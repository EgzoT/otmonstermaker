import React from 'react';

import CircleAnimationButtonTemplate from './CircleAnimationButtonTemplate';

export class CircleAnimationButtonDanger extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#6B1515";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#FF3333";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #FF3333, #D12A2A";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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

export class CircleAnimationButtonSuccess extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#236B20";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#50F74A";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #50F74A, #44D13F";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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

export class CircleAnimationButtonWarning extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#6B6B17";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#F7F734";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #F7F734, #D1D12C";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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

export class CircleAnimationButtonPrimary extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#25446B";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#579FF7";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #579FF7, #4986D1";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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

export class CircleAnimationButtonDark extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#787875";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#424241";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #424241, #333332";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#FFFFFF";
        this.textColor = this.props.textColor ? this.props.textColor : "#FFFFFF";
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

export class CircleAnimationButtonLight extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#474746";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#DEDED9";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #DEDED9, #ADADAA";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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

export class CircleAnimationButtonInfo extends React.Component {
    constructor(props) {
        super(props);

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#22444D";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#64CAE3";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #64CAE3, #4F9FB3";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#000000";
        this.textColor = this.props.textColor ? this.props.textColor : "#000000";
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
