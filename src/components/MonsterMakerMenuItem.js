import React from 'react';

const monsterMakerMenuItemStyleLiDis = {
  float: 'left',
  marginTop: "6px",
  marginBottom: "6px",
  marginLeft: "6px"
};

const monsterMakerMenuItemStyleLiAct = {
  float: 'left',
  marginTop: "6px",
  marginBottom: "6px",
  marginLeft: "6px"
};

const monsterMakerMenuItemStyleSpanDis = {
  textAlign: 'center',
  padding: '5px 5px',
  align: 'center'
};

const monsterMakerMenuItemStyleSpanAct = {
  textAlign: 'center',
  boxShadow: '0 0 0 2px #38B0DE',
  borderRadius: "20px",
  padding: '5px 5px',
  align: 'center'
};

const monsterMakerMenuItemStyleUl = {
  listStyleType: 'none',
  paddingInlineStart: '0px',
  textAlign: 'center',
  padding: '0px 10px'
}

class MonsterMakerMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {hover: false};
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  }

  changeClick = () => {
    this.props.onClick(this.props.name);
  }

  render() {
    var myclassName = this.props.active ? 'active' : '';
    
    var menuItemColorHover;
    if (!this.state.hover) {
      menuItemColorHover = {color: "#a1a1a1"};
    } else {
      menuItemColorHover = {color: "#FFFFFF"};
    }

    return (
      <li style={this.props.active ? monsterMakerMenuItemStyleLiAct : monsterMakerMenuItemStyleLiDis} onClick={this.changeClick} className={myclassName}>
        <ul style={monsterMakerMenuItemStyleUl} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} >
          <li>
            <span className="ra-stack ra-lg" style={this.props.active ? monsterMakerMenuItemStyleSpanAct : monsterMakerMenuItemStyleSpanDis} >
              <i className={"ra " + this.props.icon + " ra-stack-2x"} style={menuItemColorHover} ></i>
            </span>
          </li>
          <li style={menuItemColorHover} >
            {this.props.name}
          </li>
        </ul>
      </li>
    );
  }
}

export default MonsterMakerMenuItem;
