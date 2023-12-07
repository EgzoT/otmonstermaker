import React from 'react';
// import { Tooltip } from 'react-tooltip';

const MonsterMakerLabelStyle = {
  fontSize: '20px'
};

class MonsterMakerLabel extends React.Component {
  render() {
    return (
      <div style={{...MonsterMakerLabelStyle, ...this.props.style, ...this.props.width}} data-tip={ this.props.tooltip } >
        <label style={this.props.disabled ? {opacity: 0.5} : null}>
          {this.props.text}
        </label>
        {/*<Tooltip place="bottom" type="dark" effect="float" html="true" />*/}
      </div>
    );
  }
}

export default MonsterMakerLabel;
