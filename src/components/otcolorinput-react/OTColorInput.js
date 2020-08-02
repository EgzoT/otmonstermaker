import React from 'react';
import { MIN_COLOR, MAX_COLOR } from './components/const';

import ColorButton from './components/ColorButton';
import ColorsWindow from './components/ColorsWindow';
import ColorsWindowMobile from './components/ColorsWindowMobile';

const styleTemplate = {
    container: {},
    button: {
        outer: {},
        inner: {}
    },
    window: {
        container: {},
        palette: {
            container: {},
            row: {},
            column: {},
            button: {
                outer: {},
                inner: {}
            }
        }
    },
    windowMobile: {
        container: {
            outer: {},
            inner: {}
        },
        palette: {
            container: {},
            row: {},
            column: {},
            button: {
                outer: {},
                inner: {}
            }
        }
    }
}

class OTColorInput extends React.Component {
    constructor(props) {
        super(props);

        this.style = Object.assign(styleTemplate, this.props.style);

        this.ref = React.createRef();

        this.deviceType = this.getDeviceType();
        this.screenRotation = this.getScreenRotation();

        this.state = {
            id: this.checkColor(this.props.value) ? this.checkColor(this.props.value) : 0,
            isWindowOpen: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.closeColorsWindow);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.closeColorsWindow);
    }

    checkColor = (color) => {
        if (color === undefined) {
            return undefined;
        } else if (color >= MIN_COLOR && color <= MAX_COLOR) {
            return color;
        } else if (color > MAX_COLOR) {
            return MAX_COLOR;
        } else if (color < MIN_COLOR) {
            return MIN_COLOR;
        } else {
            return undefined;
        }
    }

    setColor = (color) => {
        this.setState({ color: this.checkColor(color) });
    }

    toggleColorsWindow = () => {
        if (this.state.isWindowOpen) {
            this.closeColorsWindow();
        } else {
            this.openColorsWindow();
        }
    }

    openColorsWindow = () => {
        if (!this.state.isWindowOpen) {
            this.deviceType = this.getDeviceType();
            this.screenRotation = this.getScreenRotation();

            this.setState({ isWindowOpen: true });
        }
    }

    closeColorsWindow = () => {
        if (this.state.isWindowOpen) {
            this.setState({ isWindowOpen: false });
        }
    }

    onChangeValue = (value, hexColor) => {
        this.setState({ id: value });
        this.closeColorsWindow();

        if (this.props.onChange) {
            this.props.onChange(value, hexColor);
        }
    }

    getDeviceType = () => {
        return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ? 'mobile' : 'desktop';
    }

    getScreenRotation = () => {
        return window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical';
    }

    render() {
        return (
            <div style={ this.style['container'] }>
                <ColorButton
                    colorId={ this.state.id }
                    onClick={ this.toggleColorsWindow }
                    setRef={ this.ref }
                    outerDivStyle={{ ...{ width: '1.9em' }, ...this.style['button']['outer']}}
                    innerDivStyle={ this.style['button']['inner'] }
                />
                { this.state.isWindowOpen ?
                    this.deviceType === 'desktop' ?
                    <ColorsWindow
                        onChooseColor={ this.onChangeValue }
                        posX={ this.ref.current.offsetLeft }
                        posY={ this.ref.current.offsetTop }
                        parentWidth={ this.ref.current.offsetWidth }
                        parentHeight={ this.ref.current.offsetHeight }
                        onClickOutside={ this.closeColorsWindow }
                        buttonRef={ this.ref }
                        screenRotation={ this.screenRotation }
                        style={ this.style['window']['container'] }
                        stylePalette={ this.style['window']['palette'] }
                    />
                    : this.deviceType === 'mobile' ?
                    <ColorsWindowMobile
                        onChooseColor={ this.onChangeValue }
                        onClickOutside={ this.closeColorsWindow }
                        screenRotation={ this.screenRotation }
                        style={ this.style['windowMobile']['container'] }
                        stylePalette={ this.style['windowMobile']['palette'] }
                    /> : null
                    : null
                }
            </div>
        );
    }
}

export default OTColorInput;
