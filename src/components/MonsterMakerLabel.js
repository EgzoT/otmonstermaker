import React from 'react';

const MonsterMakerLabelStyle = {
  fontSize: '20px'
};

class MonsterMakerLabel extends React.Component {
  render() {
    return (
      <div
        data-tooltip-id="tooltip"
        data-tooltip-html={ this.props.tooltip }
        data-tooltip-place="bottom"
        data-tooltip-type="dark"
        data-tooltip-effect="float"
        style={{ ...MonsterMakerLabelStyle, ...this.props.style, ...this.props.width }}
      >
        <label style={ this.props.disabled ? { opacity: 0.5 } : null }>
          { this.props.text }
        </label>
      </div>
    );
  }
}

export default MonsterMakerLabel;
