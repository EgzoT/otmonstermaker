import React from 'react';
import { Tooltip } from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';
import { FlexibleGridContainer } from '../components/FlexibleGrid';

const firstLabelWidth = { minWidth: 120 }

class MonsterMakerTabElements extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      holy: this.props.appData.getElements().getHoly(),
      death: this.props.appData.getElements().getDeath(),
      ice: this.props.appData.getElements().getIce(),
      fire: this.props.appData.getElements().getFire(),
      earth: this.props.appData.getElements().getEarth(),
      energy: this.props.appData.getElements().getEnergy(),
      physical: this.props.appData.getElements().getPhysical(),
      lifeDrain: this.props.appData.getElements().getLifeDrain(),
      drown: this.props.appData.getElements().getDrown()
    };
  }

  onChangeHoly = (event) => {
    this.setState({ holy: event.target.value });
    this.props.appData.getElements().setHoly(event.target.value);
  }
  
  onChangeDeath = (event) => {
    this.setState({ death: event.target.value });
    this.props.appData.getElements().setDeath(event.target.value);
  }
  
  onChangeIce = (event) => {
    this.setState({ ice: event.target.value });
    this.props.appData.getElements().setIce(event.target.value);
  }
  
  onChangeFire = (event) => {
    this.setState({ fire: event.target.value });
    this.props.appData.getElements().setFire(event.target.value);
  }
  
  onChangeEarth = (event) => {
    this.setState({ earth: event.target.value });
    this.props.appData.getElements().setEarth(event.target.value);
  }
  
  onChangeEnergy = (event) => {
    this.setState({ energy: event.target.value });
    this.props.appData.getElements().setEnergy(event.target.value);
  }
  
  onChangePhysical = (event) => {
    this.setState({ physical: event.target.value });
    this.props.appData.getElements().setPhysical(event.target.value);
  }
  
  onChangeLifeDrain = (event) => {
    this.setState({ lifeDrain: event.target.value });
    this.props.appData.getElements().setLifeDrain(event.target.value);
  }
  
  onChangeDrown = (event) => {
    this.setState({ drown: event.target.value });
    this.props.appData.getElements().setDrown(event.target.value);
  }

  render() {
    return (
      <div className="tabMenu">
        <Tooltip place="bottom" type="dark" effect="float" html={ true } />

        <MonsterMakerLabel
          text="Elements"
          tooltip="Resistance or weakness to certain elements to your monster.<br>+ Minus values - Means that your monster will be weak to certain element.<br>You can put there any value you want, starting from -1.<br>+ Positive values - Means that your monster will be resistant to certain element.<br>You can put there values starting from 1 ending on 99 (100 would mean full immunity and there's different category).<br>* If you put here 100% resistance to for example fire, you monster yes will be immune to fire but it will also WALK AROUND FIRE FIELDS,<br>not onto them as it's supposed to be and you don't want that to happen."
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <FlexibleGridContainer>
            <MonsterMakerLabel
              text="Holy"
              tooltip="Values in percent."
              width={ firstLabelWidth }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="number"
              value={ this.state.holy }
              min="-100"
              max="100"
              onChange={ this.onChangeHoly }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="range"
              style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
              value={ this.state.holy }
              onChange={ this.onChangeHoly }
              min="-100"
              max="100"
              step="1"
            />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Death"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.death }
            min="-100"
            max="100"
            onChange={ this.onChangeDeath }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.death }
            onChange={ this.onChangeDeath }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Ice"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.ice }
            min="-100"
            max="100"
            onChange={ this.onChangeIce }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.ice }
            onChange={ this.onChangeIce }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Fire"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.fire }
            min="-100"
            max="100"
            onChange={ this.onChangeFire }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.fire }
            onChange={this.onChangeFire}
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Earth"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.earth }
            min="-100"
            max="100"
            onChange={ this.onChangeEarth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.earth }
            onChange={ this.onChangeEarth }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Energy"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.energy }
            min="-100"
            max="100"
            onChange={ this.onChangeEnergy }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.energy }
            onChange={ this.onChangeEnergy }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Physical"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.physical }
            min="-100"
            max="100"
            onChange={ this.onChangePhysical }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.physical }
            onChange={ this.onChangePhysical }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Life Drain"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.lifeDrain }
            min="-100"
            max="100"
            onChange={ this.onChangeLifeDrain }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.lifeDrain }
            onChange={ this.onChangeLifeDrain }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Drown"
            tooltip="Values in percent."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            value={ this.state.drown }
            min="-100"
            max="100"
            onChange={ this.onChangeDrown }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="range"
            style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
            value={ this.state.drown }
            onChange={ this.onChangeDrown }
            min="-100"
            max="100"
            step="1"
          />
        </FlexibleGridContainer>
      </div>
    );
  }
}

export default MonsterMakerTabElements;
