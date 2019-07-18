import React from 'react';

const MonsterMakerLabelStyle = {
  fontSize: '20px'
};

class MonsterMakerLabel extends React.Component {
  render() {
    return (
      <div style={{...MonsterMakerLabelStyle, ...this.props.style}}>
        <label style={this.props.disabled ? {opacity: 0.5} : null}>
          {this.props.text}
        </label>
      </div>
    );
  }
}

export default MonsterMakerLabel;
