import React from 'react';

import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

class MonsterMakerTabSummons extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      maxSummons: this.props.appData.getSummons().getMaxSummons(),

      summonName: this.props.appData.getSummons().getSummonName(),
      interval: this.props.appData.getSummons().getInterval(),
      chance: this.props.appData.getSummons().getChance(),
      max: this.props.appData.getSummons().getMax(),

      activeItem: this.props.activeItem
    }
  }

  onChangeMaxSummons = (event) => {
    this.props.appData.getSummons().setMaxSummons(event.target.value);
    this.setState({ maxSummons: event.target.value });
  }

  onChangeSummonName = (event) => {
    this.props.appData.getSummons().setSummonName(event.target.value);
    this.setState({ summonName: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getSummons().setIndexSummonName(this.state.activeItem, event.target.value);
    }
  }

  onChangeInterval = (event) => {
    this.props.appData.getSummons().setInterval(event.target.value);
    this.setState({ interval: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getSummons().setIndexInterval(this.state.activeItem, event.target.value);
    }
  }

  onChangeChance = (event) => {
    this.props.appData.getSummons().setChance(event.target.value);
    this.setState({ chance: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getSummons().setIndexChance(this.state.activeItem, event.target.value);
    }
  }

  onChangeMax = (event) => {
    this.props.appData.getSummons().setMax(event.target.value);
    this.setState({ max: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getSummons().setIndexMax(this.state.activeItem, event.target.value);
    }
  }

  //Buttons action

  clickAddButton = () => {
    this.props.appData.getSummons().addToSummons();
    this.forceUpdate();
  }

  clickDeleteButton = () => {
    if (this.state.activeItem !== null) {
      this.props.appData.getSummons().deleteFromSummons(this.state.activeItem);
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  //Refresh items
  refreshItems = () => {
    this.setState({
      summonName: this.props.appData.getSummons().getSummonName(),
      interval: this.props.appData.getSummons().getInterval(),
      chance: this.props.appData.getSummons().getChance(),
      max: this.props.appData.getSummons().getMax()
    });
  }

  //Active item
  setActiveItem = (event) => {
    if (this.state.activeItem !== event.target.id) {
      this.setState({ activeItem: event.target.id });
      this.props.appData.getSummons().showSummons(event.target.id);
      this.refreshItems();
      this.props.changeActiveItem(event.target.id);
    } else {
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  render() {
    return (
      <div class="tabMenu">
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Max summons" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.maxSummons }
                  min="0"
                  max="100"
                  onChange={ this.onChangeMaxSummons }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <MonsterMakerItemsTable
          data = { this.props.appData.getSummons().getAllXMLSummons() }
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
                <MonsterMakerLabel text="Summon name" />
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  value={ this.state.summonName }
                  onChange={ this.onChangeSummonName }
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
                  max="100"
                  onChange={ this.onChangeChance }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Max" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.max }
                  min="1"
                  max="100"
                  onChange={ this.onChangeMax }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabSummons;
