import React from 'react';

const styleFlexibleGrid = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    float: 'left',
    padding: '5px 0px',
    marginRight: 5
}

class FlexibleGrid extends React.Component {
    render() {
        return (
            <div style={{ ...styleFlexibleGrid, ...this.props.style }}>
                { this.props.children }
            </div>
        );
    }
}

const styleFlexibleGridContainer = {
    display: 'grid'
}

class FlexibleGridContainer extends React.Component {
    render() {
        return (
            <div style={{ ...styleFlexibleGridContainer, ...this.props.style }}>
                <FlexibleGrid style={ this.props.innerStyle }>
                    { this.props.children }
                </FlexibleGrid>
            </div>
        );
    }
}

export { FlexibleGridContainer, FlexibleGrid };
