import React from 'react';
import { COLORS } from './const';

const outerDivStyle = {
    width: '1.1em',
    height: '1.1em',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ced4da',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    display: 'grid'
}

const innerDivStyle = {
    width: 'calc(100% - 0.15em)',
    height: 'calc(100% - 0.15em)',
    borderRadius: 5,
    margin: 'auto'
}

class ColorButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    prepareOuterDivStyle = () => {
        let style = outerDivStyle;

        style = { ...style, ...this.props.outerDivStyle }

        return style;
    }

    prepareInnerDivStyle = () => {
        let style = innerDivStyle;

        style = { ...style, ...this.props.innerDivStyle, ...{ backgroundColor: COLORS[this.props.colorId] } }

        return style;
    }

    onClick = () => {
        if (this.props.onClick) {
            this.props.onClick(this.props.colorId, COLORS[this.props.colorId]);
        }
    }

    render() {
        return (
            <div ref={ this.props.setRef } style={ this.prepareOuterDivStyle() } onClick={ this.onClick }>
                <div style={ this.prepareInnerDivStyle() }></div>
            </div>
        );
    }
}

export default ColorButton;
