import React from 'react';

import MonsterMakerItemsTableTr from './MonsterMakerItemsTableTr.js';

const containerStyle = {
  maxHeight: 250,
  maxWidth: "calc(100vw - 40px)",
  padding: 5,
  overflow: 'auto'
}

const tableStyle = {
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#000000',
  color: '#FFFFFF'
}

class MonsterMakerItemsTable extends React.Component {
  render() {
    return (
      <div style={ containerStyle } >
        <table style={ tableStyle } >
          <tbody>
            {
              this.props.data.map((variable, index) => {
                return (
                  <MonsterMakerItemsTableTr
                    key={ index }
                    variable = { variable }
                    index = { index }
                    changeActiveItem = { this.props.changeActiveItem }
                    activeItem = { this.props.activeItem }
                  />
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerItemsTable;
