import React from 'react';

const trStyle = {
  backgroundColor: '#262626',
  whiteSpace: 'pre'
  //backgroundColor: '#555555'
}

const trStyleHover = {
  backgroundColor: '#555555',
  whiteSpace: 'pre'
}

const selectedItem = {
  color: 'gold'
}

class MonsterMakerItemsTableTr extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { hover: false };
  }
  
  onMouseEnter = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    return (
      <tr style = { !this.state.hover ? trStyle : trStyleHover } onMouseEnter = { this.onMouseEnter } onMouseLeave = { this.onMouseLeave } onClick = { this.props.changeActiveItem } >
        <td key = { this.props.index } id = { this.props.index } style = { this.props.activeItem !== null && Number(this.props.activeItem) === this.props.index ? selectedItem : null }>
          { this.props.variable }
        </td>
      </tr>
    )
  }
}

export default MonsterMakerItemsTableTr;
