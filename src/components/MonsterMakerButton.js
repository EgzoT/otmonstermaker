import React from 'react';
//import ReactTooltip from 'react-tooltip';

const buttonStyle = {
  width: 40,
  height: 40,
  padding: 0,
  backgroundColor: '#000000',
  borderColor: 'rgba(119, 111, 111, 1)',
  borderRadius: 10,
  display: 'inherit',
  marginRight: 2,
  outline: 'none'
}

const buttonStyleHover = {
  width: 40,
  height: 40,
  padding: 0,
  backgroundColor: 'rgb(90, 85, 85)',
  borderColor: 'rgba(119, 111, 111, 1)',
  borderRadius: 10,
  display: 'inherit',
  marginRight: 2,
  outline: 'none'
}

const iconStyle = {
  color: '#FFFFFF',
  fontSize: 20,
  width: 40,
  height: 40
}

class MonsterMakerButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  }
  
  render() {
    return (
      <button style={ !this.state.hover ? buttonStyle : buttonStyleHover }
              onMouseEnter={ this.toggleHover }
              onMouseLeave={ this.toggleHover }
              onClick={ this.props.onClick }
              data-tip={ this.props.tooltip }
      >
        <i className={ "ra " + this.props.icon } style={ iconStyle } ></i>
        {/*<ReactTooltip place="bottom" type="dark" effect="float"/>*/}
      </button>
    );
  }
}

export default MonsterMakerButton;
