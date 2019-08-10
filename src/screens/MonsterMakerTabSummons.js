import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

const firstLabelWidth = { minWidth: 150 }

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
      <div className="tabMenu">
        <ReactTooltip place="bottom" type="dark" effect="float" html="true" />
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Max summons"
              tooltip="How many summons can your monster have in total."
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.maxSummons }
              min="0"
              max="100"
              onChange={ this.onChangeMaxSummons }
            />
          </li>
        </ul>
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
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Summon name"
              tooltip="Put name of the monster you want to be summoned by your creature."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="text"
              value={ this.state.summonName }
              onChange={ this.onChangeSummonName }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Interval"
              tooltip="How often monster will be summon."
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
              tooltip="Chance to summon successfully (in %)."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.chance }
              min="1"
              max="100"
              onChange={ this.onChangeChance }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Max"
              tooltip="How much of each kind of summons it can have at max."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.max }
              min="1"
              max="100"
              onChange={ this.onChangeMax }
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default MonsterMakerTabSummons;
