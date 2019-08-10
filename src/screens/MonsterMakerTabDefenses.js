import React from 'react';
import ReactTooltip from 'react-tooltip';

import { defenseName, areaEffect } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

const firstLabelWidth = { minWidth: 140 }
const secondLabelWidth = { minWidth: 122 }

class MonsterMakerTabDefenses extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      armor: this.props.appData.getDefenses().getArmor(),
      defense: this.props.appData.getDefenses().getDefense(),

      defenseName: this.props.appData.getDefenses().getDefenseName(),
      interval: this.props.appData.getDefenses().getInterval(),
      chance: this.props.appData.getDefenses().getChance(),
      min: this.props.appData.getDefenses().getMin(),
      max: this.props.appData.getDefenses().getMax(),
      radiusCheckbox: this.props.appData.getDefenses().getRadiusCheckbox(),
      radius: this.props.appData.getDefenses().getRadius(),
      areaeffect: this.props.appData.getDefenses().getAreaeffect(),
      duration: this.props.appData.getDefenses().getDuration(),
      speedChange: this.props.appData.getDefenses().getSpeedChange(),

      activeItem: this.props.activeItem
    }
  }

  onChangeArmor = (event) => {
    this.props.appData.getDefenses().setArmor(event.target.value);
    this.setState({ armor: event.target.value });
  }

  onChangeDefense = (event) => {
    this.props.appData.getDefenses().setDefense(event.target.value);
    this.setState({ defense: event.target.value });
  }

  onChangeDefenseName = (event) => {
    this.props.appData.getDefenses().setDefenseName(event.target.value);
    this.setState({ defenseName: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexDefenseName(this.state.activeItem, event.target.value);
    }
  }

  onChangeInterval = (event) => {
    this.props.appData.getDefenses().setInterval(event.target.value);
    this.setState({ interval: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexInterval(this.state.activeItem, event.target.value);
    }
  }

  onChangeChance = (event) => {
    this.props.appData.getDefenses().setChance(event.target.value);
    this.setState({ chance: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexChance(this.state.activeItem, event.target.value);
    }
  }

  onChangeMin = (event) => {
    this.props.appData.getDefenses().setMin(event.target.value);
    this.setState({ min: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexMin(this.state.activeItem, event.target.value);
    }
  }

  onChangeMax = (event) => {
    this.props.appData.getDefenses().setMax(event.target.value);
    this.setState({ max: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexMax(this.state.activeItem, event.target.value);
    }
  }

  onChangeRadiusCheckbox = (event) => {
    this.props.appData.getDefenses().setRadiusCheckbox(!this.props.appData.getDefenses().getRadiusCheckbox());
    this.setState({ radiusCheckbox: this.props.appData.getDefenses().getRadiusCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexRadiusCheckbox(this.state.activeItem, this.props.appData.getDefenses().getRadiusCheckbox());
    }
  }

  onChangeRadius = (event) => {
    this.props.appData.getDefenses().setRadius(event.target.value);
    this.setState({ radius: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexRadius(this.state.activeItem, event.target.value);
    }
  }

  onChangeAreaeffect = (event) => {
    this.props.appData.getDefenses().setAreaeffect(event.target.value);
    this.setState({ areaeffect: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexAreaeffect(this.state.activeItem, event.target.value);
    }
  }

  onChangeDuration = (event) => {
    this.props.appData.getDefenses().setDuration(event.target.value);
    this.setState({ duration: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexDuration(this.state.activeItem, event.target.value);
    }
  }

  onChangeSpeedChange = (event) => {
    this.props.appData.getDefenses().setSpeedChange(event.target.value);
    this.setState({ speedChange: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().setIndexSpeedChange(this.state.activeItem, event.target.value);
    }
  }

  //Buttons action

  clickAddButton = () => {
    this.props.appData.getDefenses().addToDefenses();
    this.forceUpdate();
  }

  clickDeleteButton = () => {
    if (this.state.activeItem !== null) {
      this.props.appData.getDefenses().deleteFromDefenses(this.state.activeItem);
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  //Refresh items
  refreshItems = () => {
    this.setState({
      defenseName: this.props.appData.getDefenses().getDefenseName(),
      interval: this.props.appData.getDefenses().getInterval(),
      chance: this.props.appData.getDefenses().getChance(),
      min: this.props.appData.getDefenses().getMin(),
      max: this.props.appData.getDefenses().getMax(),
      radiusCheckbox: this.props.appData.getDefenses().getRadiusCheckbox(),
      radius: this.props.appData.getDefenses().getRadius(),
      areaeffect: this.props.appData.getDefenses().getAreaeffect(),
      duration: this.props.appData.getDefenses().getDuration(),
      speedChange: this.props.appData.getDefenses().getSpeedChange()
    });
  }

  //Active item
  setActiveItem = (event) => {
    if (this.state.activeItem !== event.target.id) {
      this.setState({ activeItem: event.target.id });
      this.props.appData.getDefenses().showDefenses(event.target.id);
      this.refreshItems();
      this.props.changeActiveItem(event.target.id);
    } else {
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  render() {
    return (
      <div className="tabMenu">
        <ReactTooltip place="bottom" type="dark" effect="float" html="true" />
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Armor:"
              tooltip="Values which will reduce incoming physical damage."
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              min="1"
              value={ this.state.armor }
              onChange={ this.onChangeArmor }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Defense:"
              tooltip="Reduce incoming physical damage."
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              min="1"
              value={ this.state.defense }
              onChange={ this.onChangeDefense }
            />
          </li>
        </ul>
        <MonsterMakerItemsTable
          data = { this.props.appData.getDefenses().getAllXMLdefenses() }
          changeActiveItem = { this.setActiveItem }
          activeItem = { this.state.activeItem }
        />
        <div style = {{ display: 'initial' }}>
          <MonsterMakerButton
            icon = "ra-health"
            onClick = { this.clickAddButton }
            tooltip = "Add to table"
          />
          <MonsterMakerButton
            icon = "ra-burning-embers"
            onClick = { this.clickDeleteButton }
            tooltip = "Delete from table"
          />
        </div>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Defense name"
              tooltip="Choose defense type."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInputSelect
              selectItems={ defenseName }
              value={ this.state.defenseName }
              onChange={ this.onChangeDefenseName }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Interval"
              tooltip="It's how often the spell will be cast - 2000 = 2seconds."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.interval }
              min="1000"
              onChange={ this.onChangeInterval }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Chance"
              tooltip="It's the chance to cast the spell successfully (in %)."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.chance }
              min="1"
              onChange={ this.onChangeChance }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Min"
              disabled={ this.state.defenseName !== 'healing' }
              tooltip="Minimum heal points."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              min="1"
              value={ this.state.min }
              onChange={ this.onChangeMin }
              disabled={ this.state.defenseName !== 'healing' }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Max"
              disabled={ this.state.defenseName !== 'healing' }
              tooltip="Maximum heal points."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              min="1"
              value={ this.state.max }
              onChange={ this.onChangeMax }
              disabled={ this.state.defenseName !== 'healing' }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.radiusCheckbox }
              onChange={ this.onChangeRadiusCheckbox }
              disabled={ this.state.defenseName !== 'healing' }
              tooltip="Size of spell area."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Radius"
              disabled={ this.state.defenseName !== 'healing' }
              tooltip="Size of spell area."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.radius }
              min="1"
              max="9"
              onChange={ this.onChangeRadius }
              disabled={ this.state.defenseName !== 'healing' || !this.state.radiusCheckbox }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Area Effect"
              tooltip="Choose area effect for spell."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInputSelect
              selectItems={ areaEffect }
              value={ this.state.areaeffect }
              onChange={ this.onChangeAreaeffect }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Duration"
              disabled={ this.state.defenseName === 'healing' }
              tooltip="How long it lasts."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.duration }
              min="1"
              onChange={ this.onChangeDuration }
              disabled={ this.state.defenseName === 'healing' }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Speed change"
              disabled={ this.state.defenseName !== 'speed' }
              tooltip="Starting from monsterBaseSpeed+numbers, so if monsterBaseSpeed is 200 then put more than 200 in order to have results."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.speedChange }
              min="1"
              onChange={ this.onChangeSpeedChange }
              disabled={ this.state.defenseName !== 'speed' }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default MonsterMakerTabDefenses;
