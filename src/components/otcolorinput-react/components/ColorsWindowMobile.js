import React from 'react';
import { ROWS, COLUMNS } from './const';

import ColorPalette from './ColorPalette';

const windowStyle = {
    position: 'absolute',
    zIndex: 999
}

const backgroundStyle = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000040',
    left: 0,
    top: 0,
    zIndex: 998
}

class ColorsWindowMobile extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();

        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {}
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);

        this.calcPos();
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    prepareOuterDivStyle = () => {
        let style = { ...windowStyle, ...this.props.style['inner'] };

        return style;
    }

    calcPos = () => {
        //Width
        this.ref.current.style.left = 'calc(50% - ' + this.ref.current.clientWidth / 2 + 'px)';

        //Height
        this.ref.current.style.top = 'calc(50% - ' + this.ref.current.clientHeight / 2 + 'px)';
    }

    handleClickOutside(event) {
        if (this.ref && !this.ref.current.contains(event.target)) {
            this.props.onClickOutside();
        }
    }

    getColorButtonStyle = () => {
        if (this.props.screenRotation === 'horizontal') {
            return {
                width: 'calc(80vw / ' + COLUMNS + ')',
                height: 'calc(80vh / ' + ROWS + ')'
            }
        } else if (this.props.screenRotation === 'vertical') {
            return {
                width: 'calc(80vw / ' + ROWS + ')',
                height: 'calc(80vh / ' + COLUMNS + ')'
            }
        }
    }

    render() {
        return (
            <div style={{ ...backgroundStyle, ...this.props.style['outer'] }}>
                <div ref={ this.ref } style={ this.prepareOuterDivStyle() }>
                    <ColorPalette
                        onChooseColor={ this.props.onChooseColor }
                        screenRotation={ this.props.screenRotation }
                        colorButtonsStyle={ this.getColorButtonStyle() }
                        style={ this.props.stylePalette }
                    />
                </div>
            </div>
        );
    }
}

export default ColorsWindowMobile;
