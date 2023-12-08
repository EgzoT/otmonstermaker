import React from 'react';

import { MonsterMakerLabel, MonsterMakerInput } from '../components';
import { FlexibleGridContainer } from '../components/FlexibleGrid';

class MonsterMakerTabImmunities extends React.Component {
  onChangeHoly = (event) => {
    this.props.appData.getImmunities().setHoly(!this.props.appData.getImmunities().getHoly());
  }

  onChangeDeath = (event) => {
    this.props.appData.getImmunities().setDeath(!this.props.appData.getImmunities().getDeath());
  }

  onChangeIce = (event) => {
    this.props.appData.getImmunities().setIce(!this.props.appData.getImmunities().getIce());
  }

  onChangeFire = (event) => {
    this.props.appData.getImmunities().setFire(!this.props.appData.getImmunities().getFire());
  }

  onChangeEarth = (event) => {
    this.props.appData.getImmunities().setEarth(!this.props.appData.getImmunities().getEarth());
  }

  onChangeEnergy = (event) => {
    this.props.appData.getImmunities().setEnergy(!this.props.appData.getImmunities().getEnergy());
  }

  onChangePhysical = (event) => {
    this.props.appData.getImmunities().setPhysical(!this.props.appData.getImmunities().getPhysical());
  }

  onChangeLifeDrain = (event) => {
    this.props.appData.getImmunities().setLifeDrain(!this.props.appData.getImmunities().getLifeDrain());
  }

  onChangeDrown = (event) => {
    this.props.appData.getImmunities().setDrown(!this.props.appData.getImmunities().getDrown());
  }

  onChangeParalyze = (event) => {
    this.props.appData.getImmunities().setParalyze(!this.props.appData.getImmunities().getParalyze());
  }

  onChangeDrunk = (event) => {
    this.props.appData.getImmunities().setDrunk(!this.props.appData.getImmunities().getDrunk());
  }

  onChangeInvisible = (event) => {
    this.props.appData.getImmunities().setInvisible(!this.props.appData.getImmunities().getInvisible());
  }

  onChangeOutfit = (event) => {
    this.props.appData.getImmunities().setOutfit(!this.props.appData.getImmunities().getOutfit());
  }

  render() {
    return (
      <div className="tabMenu">
        <MonsterMakerLabel
          text="Immunities"
          tooltip="Select to set immunities."
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={this.onChangeHoly}
            defaultChecked={ this.props.appData.getImmunities().getHoly() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Holy"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeDeath }
            defaultChecked={ this.props.appData.getImmunities().getDeath() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Death"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeIce }
            defaultChecked={ this.props.appData.getImmunities().getIce() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Ice"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeFire }
            defaultChecked={ this.props.appData.getImmunities().getFire() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Fire"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeEarth }
            defaultChecked={ this.props.appData.getImmunities().getEarth() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Earth"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeEnergy }
            defaultChecked={ this.props.appData.getImmunities().getEnergy() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Energy"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangePhysical }
            defaultChecked={ this.props.appData.getImmunities().getPhysical() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Physical"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeLifeDrain }
            defaultChecked={ this.props.appData.getImmunities().getLifeDrain() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Life Drain"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeDrown }
            defaultChecked={ this.props.appData.getImmunities().getDrown() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Drown"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeParalyze }
            defaultChecked={ this.props.appData.getImmunities().getParalyze() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Paralyze"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeDrunk }
            defaultChecked={ this.props.appData.getImmunities().getDrunk() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Drunk"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeInvisible }
            defaultChecked={ this.props.appData.getImmunities().getInvisible() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Invisible"
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeOutfit }
              defaultChecked={ this.props.appData.getImmunities().getOutfit() }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerLabel
              text="Outfit"
              style={{ marginLeft: 3, marginRight: 3 }}
            />
        </FlexibleGridContainer>
      </div>
    );
  }
}

export default MonsterMakerTabImmunities;
