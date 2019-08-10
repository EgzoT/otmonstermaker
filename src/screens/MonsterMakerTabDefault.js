import React from 'react';

const monsterMakerDefaultH1 = {
  textAlign: 'center',
  fontSize: "2em",
  margin: ".67em 0",
  fontWeight: 700
};

class MonsterMakerTabDefault extends React.Component {
  render() {
    return (
      <div className="tabMenu">
        <h1 style={monsterMakerDefaultH1} >Monster maker tool prepared for TFS 1.3</h1>
      </div>
    );
  }
}

export default MonsterMakerTabDefault;
