import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerItemsTable, MonsterMakerButton } from '../components';
import { FlexibleGridContainer, FlexibleGrid } from '../components/FlexibleGrid';

class MonsterMakerTabVoices extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      interval: this.props.appData.getVoices().getInterval(),
      chance: this.props.appData.getVoices().getChance(),

      sentence: this.props.appData.getVoices().getSentence(),
      yell: this.props.appData.getVoices().getYell(),

      activeItem: this.props.activeItem
    }
  }

  onChangeInterval = (event) => {
    this.props.appData.getVoices().setInterval(event.target.value);
    this.setState({ interval: event.target.value });
  }

  onChangeChance = (event) => {
    this.props.appData.getVoices().setChance(event.target.value);
    this.setState({ chance: event.target.value });
  }

  onChangeSentence = (event) => {
    this.props.appData.getVoices().setSentence(event.target.value);
    this.setState({ sentence: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getVoices().setIndexSentence(this.state.activeItem, event.target.value);
    }
  }

  onChangeYell = (event) => {
    this.props.appData.getVoices().setYell(!this.props.appData.getVoices().getYell());
    this.setState({ yell: this.props.appData.getVoices().getYell() });
    if (this.state.activeItem !== null) {
      this.props.appData.getVoices().setIndexYell(this.state.activeItem, this.props.appData.getVoices().getYell());
    }
  }

  //Buttons action

  clickAddButton = () => {
    this.props.appData.getVoices().addToVoices();
    this.forceUpdate();
  }

  clickDeleteButton = () => {
    if (this.state.activeItem !== null) {
      this.props.appData.getVoices().deleteFromVoices(this.state.activeItem);
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  //Refresh items
  refreshItems = () => {
    this.setState({
      sentence: this.props.appData.getVoices().getSentence(),
      yell: this.props.appData.getVoices().getYell()
    });
  }

  //Active item
  setActiveItem = (event) => {
    if (this.state.activeItem !== event.target.id) {
      this.setState({ activeItem: event.target.id });
      this.props.appData.getVoices().showVoices(event.target.id);
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
        <ReactTooltip place="bottom" type="dark" effect="float" html={ true } />

        <FlexibleGridContainer>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Interval"
              tooltip="How often monster will be speak."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="number"
              value={ this.state.interval }
              min="1000"
              onChange={ this.onChangeInterval }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Chance"
              tooltip="Chance to speak successfully (in %)."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="number"
              value={ this.state.chance }
              min="1"
              max="100"
              onChange={ this.onChangeChance }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
        </FlexibleGridContainer>

        <MonsterMakerItemsTable
          data = { this.props.appData.getVoices().getAllXMLVoices() }
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

        <MonsterMakerLabel
          text="Sentence"
          tooltip="Put any message you want to be spoke by your monster."
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <MonsterMakerInput
          type="text"
          value={ this.state.sentence }
          onChange={ this.onChangeSentence }
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            checked={ this.state.yell }
            onChange={ this.onChangeYell }
            tooltip="It can be heard in greater distance (including different floors) than normal message."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Yell"
            tooltip="It can be heard in greater distance (including different floors) than normal message."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
      </div>
    );
  }
}

export default MonsterMakerTabVoices;
