import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconFA extends React.Component {
    iconStyle = () => {
        let style = {
            margin: 'auto'
        }

        style = { ...style, ...this.props.style };

        return style;
    }

    render() {
        return (
            <FontAwesomeIcon
                style={ this.iconStyle() }
                icon={ this.props.icon }
                size={ this.props.size }
                rotation={ this.props.rotation }
                flip={ this.props.flip }
                pull={ this.props.pull }
                fixedWidth={ this.props.fixedWidth }
                inverse={ this.props.inverse }
                listItem={ this.props.listItem }
                spin={ this.props.spin }
                pulse={ this.props.pulse }
                border={ this.props.border }
                swapOpacity={ this.props.swapOpacity }
                className={ this.props.className }
                transform={ this.props.transform }
                mask={ this.props.mask }
                color={ this.props.color }
                symbol={ this.props.symbol }
            />
        );
    }
}

export default IconFA;
