import React from 'react';
// import { Tooltip } from 'react-tooltip';

class MonsterMakerInput extends React.Component {
  render() {
    const style = this.props.disabled ? {...this.props.style, ...{opacity: 0.5}} : this.props.style;

    return (
      <div data-tip={ this.props.tooltip } >
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
        {/*<Tooltip place="bottom" type="dark" effect="float"/>*/}
      </div>
    );
  }
}

export default MonsterMakerInput;
