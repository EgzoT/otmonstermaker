import React from 'react';

class MonsterMakerInputSelect extends React.Component {
  render() {
    var rows = [];

    this.props.selectItems.forEach(function (item, i) {
      rows.push(<option value={item} key={i}>{item}</option>);
    });
    

    return (
      <div>
        <select
          style={ this.props.style }
          defaultValue={ this.props.defaultValue }
          value={ this.props.value }
          onChange={ this.props.onChange }
          disabled={ this.props.disabled }
        >
          {rows}
        </select>
      </div>
    );
  }
}

export default MonsterMakerInputSelect;
