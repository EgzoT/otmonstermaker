import React from 'react';
import { COLUMNS } from './const';

import ColorPalette from './ColorPalette';

const windowStyle = {
    position: 'absolute'
}

class ColorsWindow extends React.Component {
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
        let style = windowStyle;

        style = { ...style, ...{ left: 'calc(20em - ' + (this.props.posX / 2 + (COLUMNS * 2) - this.props.parentWidth) + 'px)', top: '' }, ...this.props.style }

        return style;
    }

    calcPos = () => {
        //Width
        let leftPos = this.props.posX - this.ref.current.clientWidth / 2 + this.props.parentWidth / 2;
        if (leftPos < 0) {
            leftPos = 0;
        } else if (leftPos + this.ref.current.clientWidth > document.body.clientWidth) {
            leftPos = document.body.clientWidth - this.ref.current.clientWidth;
        }

        //Height
        let topPos = this.props.posY + this.props.parentHeight;
        if (topPos < 0) {
            topPos = 0;
        } else if (topPos + this.ref.current.clientHeight > document.body.clientHeight) {
            topPos = this.props.posY - this.ref.current.clientHeight;
        }

        this.ref.current.style.left = leftPos + 'px';
        this.ref.current.style.top = topPos + 'px';
    }

    handleClickOutside(event) {
        if (this.ref && !this.ref.current.contains(event.target) && this.props.buttonRef && !this.props.buttonRef.current.contains(event.target)) {
            this.props.onClickOutside();
        }
    }

    getColorButtonStyle = () => {
        return {
            width: 'calc(20em / ' + COLUMNS + ')',
            height: 'calc(20em / ' + COLUMNS + ')',
            maxWidth: 'calc(80vw / ' + COLUMNS + ' - ' + 2 + 'px)',
            maxHeight: 'calc(80vw / ' + COLUMNS + ' - ' + 2 + 'px)'
        }
    }

    render() {
        return (
            <div ref={ this.ref } style={ this.prepareOuterDivStyle() }>
                <ColorPalette
                    onChooseColor={ this.props.onChooseColor }
                    screenRotation={ 'horizontal' }
                    colorButtonsStyle={ this.getColorButtonStyle() }
                    style={ this.props.stylePalette }
                />
            </div>
        );
    }
}

export default ColorsWindow;
