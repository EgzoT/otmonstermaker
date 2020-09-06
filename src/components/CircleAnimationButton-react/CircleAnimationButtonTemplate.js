import React from 'react';

const styleTemplate = {
    container: {},
    containerHover: {},
    circleContainer: {},
    textContainer: {},
    textContainerHover: {},
    text: {},
    textHover: {}
}

class CircleAnimationButtonTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.fullStyle = this.assignStyle(this.props.fullStyle);
        this.alwaysVisibleText = this.isMobileDevice() || this.props.alwaysVisibleText;

        this.height = this.props.height ? this.props.height : 35;
        this.width = this.props.autoWidth ? 'max-content' : this.props.width ? this.props.width : 105;
        this.borderColor = this.props.borderColor ? this.props.borderColor : "#787875";
        this.containerColor = this.props.containerColor ? this.props.containerColor : "#424241";
        this.animationTime = this.props.animationTime ? this.props.animationTime : 1;
        this.linearGradient = this.props.linearGradient ? this.props.linearGradient : "0deg, #424241, #333332";
        this.iconColor = this.props.iconColor ? this.props.iconColor : "#FFFFFF";
        this.textColor = this.props.textColor ? this.props.textColor : "#FFFFFF";
        this.direction = this.props.direction === "left" ? 1 : 0;

        this.state = {
            hover: this.alwaysVisibleText ? true : false
        };
    }

    assignStyle = (newStyle) => {
        let style = Object.assign({}, styleTemplate);
        Object.assign(style, newStyle);

        return style;
    }

    mouseEnter = () => {
        this.setState({ hover: true });
    }

    mouseLeave = () => {
        //Off hide text when mobile device
        if (this.alwaysVisibleText) {
            return;
        }

        this.setState({ hover: false });
    }

    isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ? true : false;
    }

    mainContainerStyle = () => {
        let style = {
            height: this.height,
            width: this.height,
            backgroundColor: this.containerColor,
            borderRadius: this.height,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 0px 0px 1px ' + this.borderColor,
            transition: "width " + this.animationTime + "s"
        }

        style = { ...style, ...this.fullStyle['container'] };

        if (this.props.style) {
            style = { ...style, ...this.props.style }
        }

        return style;
    }

    mainContainerHoverStyle = () => {
        let style = {
            height: this.height,
            width: this.width,
            backgroundColor: this.containerColor,
            borderRadius: this.height,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0px 0px 0px 1px ' + this.borderColor,
            transition: "width " + this.animationTime + "s"
        }

        style = { ...style, ...this.fullStyle['containerHover'] };

        if (this.props.style) {
            style = { ...style, ...this.props.style }
        }

        return style;
    }

    circleContainerStyle = () => {
        let style = {
            height: this.height,
            width: this.height,
            background: 'linear-gradient(' + this.linearGradient + ')',
            borderRadius: this.height,
            alignItems: 'center',
            display: 'flex',
            boxShadow: '0px 0px 0px 2px ' + this.borderColor,
            color: this.iconColor
        }

        style = { ...style, ...this.fullStyle['circleContainer'] };

        return style;
    }

    textContainerStyle = () => {
        let style = {
            display: 'flex',
            height: this.height,
            width: 0,
            transition: "width " + this.animationTime + "s"
        }

        style = { ...style, ...this.fullStyle['textContainer'] };

        return style;
    }

    textContainerHoverStyle = () => {
        let style = {
            display: 'flex',
            height: this.height,
            width: this.props.autoWidth ? 'calc(100% - ' + this.height + 'px)' : this.width - this.height,
            transition: "width " + this.animationTime + "s"
        }

        style = { ...style, ...this.fullStyle['textContainerHover'] };

        return style;
    }

    textStyle = () => {
        let style = {
            visibility: 'hidden',
            margin: 'auto',
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 0,
            userSelect: 'none',
            color: this.textColor,
            whiteSpace: 'nowrap',
            transition: "visibility " + this.animationTime / 2 + "s, opacity " + this.animationTime / 2 + "s"
        }

        if (this.props.autoWidth) {
            style = { ...style, ...{ transition: "opacity 0s" } }
        }

        style = { ...style, ...this.fullStyle['text'] };

        return style;
    }

    textHoverStyle = () => {
        let style = {
            visibility: 'visible',
            margin: 'auto',
            textAlign: 'center',
            verticalAlign: 'middle',
            opacity: 1.0,
            userSelect: 'none',
            color: this.textColor,
            whiteSpace: 'nowrap',
            transition: "visibility 0s, opacity " + this.animationTime * 2 + "s"
        }

        if (this.props.autoWidth) {
            style = { ...style, ...{ marginLeft: 10, marginRight: 10 } }
        }

        style = { ...style, ...this.fullStyle['textHover'] };

        return style;
    }

    render() {
        return (
            <div
                style={ !this.state.hover ? this.mainContainerStyle() : this.mainContainerHoverStyle() }
                onMouseEnter={ this.mouseEnter }
                onMouseLeave={ this.mouseLeave }
                onClick={ this.props.onClick }
            >
                { this.direction === 1 ?
                <div style={ !this.state.hover ? this.textContainerStyle() : this.textContainerHoverStyle() }>
                    <div style={ !this.state.hover ? this.textStyle() : this.textHoverStyle() }>{ this.props.text }</div>
                </div>
                : null }
                <div style={ this.circleContainerStyle() }>
                    { this.props.icon }
                </div>
                { this.direction === 0 ?
                <div style={ !this.state.hover ? this.textContainerStyle() : this.textContainerHoverStyle() }>
                    <div
                        style={ !this.state.hover ? this.textStyle() : this.textHoverStyle() }
                        onMouseEnter={ null }
                        onMouseLeave={ null }
                    >{ this.props.text }</div>
                </div>
                : null }
            </div>
        );
    }
}

export default CircleAnimationButtonTemplate;
