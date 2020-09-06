import React from 'react';

import CircleAnimationButtonTemplate from './CircleAnimationButtonTemplate';

const styleColors = {
    skyBlue: {
        borderColor: "#385D6B",
        containerColor: "#81D6F7",
        gradientColor: "#6DB5D1",
        textColor: "#000000"
    },
    gray: {
        borderColor: "#6B6B6B",
        containerColor: "#818181",
        gradientColor: "#D1D1D1",
        textColor: "#000000"
    },
    coralBlue: {
        borderColor: "#15406B",
        containerColor: "#2A7DD1",
        gradientColor: "#3399FF",
        textColor: "#000000"
    },
    deepSea: {
        borderColor: "#013D6B",
        containerColor: "#01579B",
        gradientColor: "#0277D1",
        textColor: "#FFFFFF"
    },
    steelPurple: {
        borderColor: "#50506B",
        containerColor: "#9999CC",
        gradientColor: "#9D9DD1",
        textColor: "#000000"
    },
    springForest: {
        borderColor: "#2D6B30",
        containerColor: "#43A047",
        gradientColor: "#58D15E",
        textColor: "#000000"
    }
}

export class CircleAnimationButton extends React.Component {
    constructor(props) {
        super(props);

        this.color = this.props.color ? this.props.color : "skyBlue";

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : styleColors[this.color].borderColor;
        this.containerColor = this.props.containerColor ? this.props.containerColor : styleColors[this.color].containerColor;
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, " + styleColors[this.color].containerColor + ", " + styleColors[this.color].gradientColor;
        this.iconColor = this.props.iconColor ? this.props.iconColor : styleColors[this.color].textColor;
        this.textColor = this.props.textColor ? this.props.textColor : styleColors[this.color].textColor;
    }

    render() {
        return (
            <CircleAnimationButtonTemplate
                height={ this.height }
                width={ this.width }
                borderColor={ this.borderColor }
                containerColor={ this.containerColor }
                animationTime={ this.animationTime }
                linearGradient={ this.linearGradient }
                iconColor={ this.iconColor }
                textColor={ this.textColor }
                direction={ this.props.direction }
                alwaysVisibleText={ this.props.alwaysVisibleText }
                autoWidth={ this.props.autoWidth }
                style={ this.props.style }
                fullStyle={ this.props.fullStyle }
                icon={ this.props.icon }
                text={ this.props.text }
                onClick={ this.props.onClick }
            />
        );
    }
}

export default CircleAnimationButton;
