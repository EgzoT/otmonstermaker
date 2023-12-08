import React from 'react';

class MonsterMakerInput extends React.Component {
  render() {
    const style = this.props.disabled ? {...this.props.style, ...{opacity: 0.5}} : this.props.style;

    return (
      <div
        data-tooltip-id="tooltip"  
        data-tooltip-html={ this.props.tooltip }
        data-tooltip-place="bottom"
        data-tooltip-type="dark"
        data-tooltip-effect="float"
      >
        <input
          type={this.props.type}
          name="name"
          defaultValue={this.props.defaultValue}
          defaultChecked={this.props.defaultChecked}
          style={style}
          onChange={this.props.onChange}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          checked={this.props.checked}
          disabled={this.props.disabled}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default MonsterMakerInput;
