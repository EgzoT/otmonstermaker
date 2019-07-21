import React from 'react';

import { defenseName, areaEffect } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}


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
      <div style={ tabStyle }>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Armor:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  value={ this.state.armor }
                  onChange={ this.onChangeArmor }
                />
              </td>
              <td>
                <MonsterMakerLabel text="Defense:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  value={ this.state.defense }
                  onChange={ this.onChangeDefense }
                />
              </td>
            </tr>
          </tbody>
        </table>
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
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Defense name" />
              </td>
              <td>
                <MonsterMakerInputSelect
                  selectItems={ defenseName }
                  value={ this.state.defenseName }
                  onChange={ this.onChangeDefenseName }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Interval" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.interval }
                  min="1000"
                  onChange={ this.onChangeInterval }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Chance" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.chance }
                  min="1"
                  onChange={ this.onChangeChance }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Min"
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  value={ this.state.min }
                  onChange={ this.onChangeMin }
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Max"
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  value={ this.state.max }
                  onChange={ this.onChangeMax }
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  checked={ this.state.radiusCheckbox }
                  onChange={ this.onChangeRadiusCheckbox }
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Radius"
                  disabled={ this.state.defenseName !== 'healing' }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.radius }
                  min="1"
                  max="9"
                  onChange={ this.onChangeRadius }
                  disabled={ this.state.defenseName !== 'healing' || !this.state.radiusCheckbox }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Area Effect"
                />
              </td>
              <td>
                <MonsterMakerInputSelect
                  selectItems={ areaEffect }
                  value={ this.state.areaeffect }
                  onChange={ this.onChangeAreaeffect }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Duration"
                  disabled={ this.state.defenseName === 'healing' }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.duration }
                  min="1"
                  onChange={ this.onChangeDuration }
                  disabled={ this.state.defenseName === 'healing' }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Speed change"
                  disabled={ this.state.defenseName !== 'speed' }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.speedChange }
                  min="1"
                  onChange={ this.onChangeSpeedChange }
                  disabled={ this.state.defenseName !== 'speed' }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabDefenses;
