import React from 'react';

const containerStyle = {
    maxHeight: 250,
    maxWidth: 'calc(100vw - 40px)',
    margin: 5,
    overflow: 'auto',

    backgroundColor: '#000000',
    color: '#FFFFFF',

    whiteSpace: 'pre'
}

const textContainerStyle = {
    margin: 'auto',
    display: 'table'
}

class MonsterMakerCode extends React.Component {
    render() {
        return(
            <div style={ containerStyle } >
                <div style={ textContainerStyle } >
                    { this.props.text }
                </div>
            </div>
        );
    }
}

export default MonsterMakerCode;
