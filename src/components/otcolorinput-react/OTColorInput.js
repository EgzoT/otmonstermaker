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

        this.fullStyle = this.assignStyle(this.props.fullStyle);

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

    assignStyle = (newStyle) => {
        let style = Object.assign({}, styleTemplate);
        Object.assign(style, newStyle);

        return style;
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

    containerStyle = () => {
        let style = {};

        style = { ...style, ...this.fullStyle['container'] };

        if (this.props.style) {
            style = { ...style, ...this.props.style };
        }

        return style;
    }

    render() {
        return (
            <div style={ this.containerStyle() }>
                <ColorButton
                    colorId={ this.state.id }
                    onClick={ this.toggleColorsWindow }
                    setRef={ this.ref }
                    outerDivStyle={{ ...{ width: '1.9em' }, ...this.fullStyle['button']['outer']}}
                    innerDivStyle={ this.fullStyle['button']['inner'] }
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
                        style={ this.fullStyle['window']['container'] }
                        stylePalette={ this.fullStyle['window']['palette'] }
                    />
                    : this.deviceType === 'mobile' ?
                    <ColorsWindowMobile
                        onChooseColor={ this.onChangeValue }
                        onClickOutside={ this.closeColorsWindow }
                        screenRotation={ this.screenRotation }
                        style={ this.fullStyle['windowMobile']['container'] }
                        stylePalette={ this.fullStyle['windowMobile']['palette'] }
                    /> : null
                    : null
                }
            </div>
        );
    }
}

export default OTColorInput;
