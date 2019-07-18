import React from 'react';

import MonsterMakerMenuItem from './MonsterMakerMenuItem';

import MonsterMakerTabMonster from './MonsterMakerTabMonster';
import MonsterMakerTabFlags from './MonsterMakerTabFlags';
import MonsterMakerTabScript from './MonsterMakerTabScript';
import MonsterMakerTabAttacks from './MonsterMakerTabAttacks';
import MonsterMakerTabDefenses from './MonsterMakerTabDefenses';
import MonsterMakerTabElements from './MonsterMakerTabElements';
import MonsterMakerTabImmunities from './MonsterMakerTabImmunities';
import MonsterMakerTabSummons from './MonsterMakerTabSummons';
import MonsterMakerTabVoices from './MonsterMakerTabVoices';
import MonsterMakerTabLoot from './MonsterMakerTabLoot';
import MonsterMakerTabIO from './MonsterMakerTabIO';
import MonsterMakerTabDefault from './MonsterMakerTabDefault';

const monsterMakerMenuStyle = {
  backgroundColor: '#333',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'auto'
};

const mainWindowStyle = {
  height: 'auto',
  minHeight: '100%',
  backgroundImage: 'linear-gradient( 107deg,  rgba(2,108,223,1) 27.4%, rgba(0,255,255,1) 92.7% )'
}

class MonsterMakerMenu extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeItem: '',
      attacksActiveItem: null,
      defensesActiveItem: null,
      summonsActiveItem: null,
      voicesActiveItem: null,
      lootActiveItem: null
    };
  }

  componentDidMount() {
    this.props.appData.loadValuesFromLocalStorage();
  }

  handleItemClick = (state) => {
    this.setState({ activeItem: state });
  }

  changeState = (item) => {
    if (item !== this.state.activeItem) {
      this.setState({ activeItem: item });
    }
  }

  changeAttacksActiveItem = (state) => {
    this.setState({ attacksActiveItem: state });
  }

  changeDefensesActiveItem = (state) => {
    this.setState({ defensesActiveItem: state });
  }

  changeSummonsActiveItem = (state) => {
    this.setState({ summonsActiveItem: state });
  }

  changeVoicesActiveItem = (state) => {
    this.setState({ voicesActiveItem: state });
  }

  changeLootActiveItem = (state) => {
    this.setState({ lootActiveItem: state });
  }

  render() {
    const activeItem = this.state.activeItem

    return (
      <div style={ mainWindowStyle }>
        <ul style={ monsterMakerMenuStyle }>
          <MonsterMakerMenuItem
            name="Monster"
            active={activeItem === "Monster"}
            onClick={this.handleItemClick}
            icon="ra-dragon"
          />
          <MonsterMakerMenuItem
            name="Flags"
            active={activeItem === "Flags"}
            onClick={this.handleItemClick}
            icon="ra-castle-flag"
          />
          <MonsterMakerMenuItem
            name="Script"
            active={activeItem === "Script"}
            onClick={this.handleItemClick}
            icon="ra-book"
          />
          <MonsterMakerMenuItem
            name="Attacks"
            active={activeItem === "Attacks"}
            onClick={this.handleItemClick}
            icon="ra-lightning-sword"
          />
          <MonsterMakerMenuItem
            name="Defenses"
            active={activeItem === "Defenses"}
            onClick={this.handleItemClick}
            icon="ra-broken-shield"
          />
          <MonsterMakerMenuItem
            name="Elements"
            active={activeItem === "Elements"}
            onClick={this.handleItemClick}
            icon="ra-doubled"
          />
          <MonsterMakerMenuItem
            name="Immunities"
            active={activeItem === "Immunities"}
            onClick={this.handleItemClick}
            icon="ra-player-thunder-struck"
          />
          <MonsterMakerMenuItem
            name="Summons"
            active={activeItem === "Summons"}
            onClick={this.handleItemClick}
            icon="ra-pawprint"
          />
          <MonsterMakerMenuItem
            name="Voices"
            active={activeItem === "Voices"}
            onClick={this.handleItemClick}
            icon="ra-aware"
          />
          <MonsterMakerMenuItem
            name="Loot"
            active={activeItem === "Loot"}
            onClick={this.handleItemClick}
            icon="ra-vase"
          />
          <MonsterMakerMenuItem
            name="I/O"
            active={activeItem === "I/O"}
            onClick={this.handleItemClick}
            icon="ra-cycle"
          />
        </ul>
        <div>
          { this.state.activeItem === "Monster" ? <MonsterMakerTabMonster appData={this.props.appData} /> : null }
          { this.state.activeItem === "Flags" ? <MonsterMakerTabFlags appData={this.props.appData} /> : null }
          { this.state.activeItem === "Script" ? <MonsterMakerTabScript appData={this.props.appData} /> : null }
          { this.state.activeItem === "Attacks" ? <MonsterMakerTabAttacks appData={this.props.appData} activeItem={this.state.attacksActiveItem} changeActiveItem={this.changeAttacksActiveItem} /> : null }
          { this.state.activeItem === "Defenses" ? <MonsterMakerTabDefenses appData={this.props.appData} activeItem={this.state.defensesActiveItem} changeActiveItem={this.changeDefensesActiveItem} /> : null }
          { this.state.activeItem === "Elements" ? <MonsterMakerTabElements appData={this.props.appData} /> : null }
          { this.state.activeItem === "Immunities" ? <MonsterMakerTabImmunities appData={this.props.appData} /> : null }
          { this.state.activeItem === "Summons" ? <MonsterMakerTabSummons appData={this.props.appData} activeItem={this.state.summonsActiveItem} changeActiveItem={this.changeSummonsActiveItem} /> : null }
          { this.state.activeItem === "Voices" ? <MonsterMakerTabVoices appData={this.props.appData} activeItem={this.state.voicesActiveItem} changeActiveItem={this.changeVoicesActiveItem} /> : null }
          { this.state.activeItem === "Loot" ? <MonsterMakerTabLoot appData={this.props.appData} activeItem={this.state.lootActiveItem} changeActiveItem={this.changeLootActiveItem} /> : null }
          { this.state.activeItem === "I/O" ? <MonsterMakerTabIO appData={this.props.appData} /> : null }
          { this.state.activeItem === "" ? <MonsterMakerTabDefault /> : null }
        </div>
      </div>
    );
  }
}

export default MonsterMakerMenu;
