import React from 'react';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

const monsterMakerDefaultH1 = {
  textAlign: 'center',
  fontSize: "2em",
  margin: ".67em 0",
  fontWeight: 700
};

class MonsterMakerTabDefault extends React.Component {
  render() {
    return (
      <div style={ tabStyle }>
        <h1 style={monsterMakerDefaultH1} >Monster maker tool prepared for TFS 1.3</h1>
      </div>
    );
  }
}

export default MonsterMakerTabDefault;
