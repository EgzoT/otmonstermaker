import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';

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
        <ReactTooltip place="bottom" type="dark" effect="float" html="true" />
        <MonsterMakerLabel
          text="Immunities"
          tooltip="Select to set immunities."
        />
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={this.onChangeHoly}
              defaultChecked={ this.props.appData.getImmunities().getHoly() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Holy"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeDeath }
              defaultChecked={ this.props.appData.getImmunities().getDeath() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Death"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeIce }
              defaultChecked={ this.props.appData.getImmunities().getIce() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Ice"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeFire }
              defaultChecked={ this.props.appData.getImmunities().getFire() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Fire"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeEarth }
              defaultChecked={ this.props.appData.getImmunities().getEarth() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Earth"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeEnergy }
              defaultChecked={ this.props.appData.getImmunities().getEnergy() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Energy"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangePhysical }
              defaultChecked={ this.props.appData.getImmunities().getPhysical() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Physical"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeLifeDrain }
              defaultChecked={ this.props.appData.getImmunities().getLifeDrain() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Life Drain"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeDrown }
              defaultChecked={ this.props.appData.getImmunities().getDrown() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Drown"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeParalyze }
              defaultChecked={ this.props.appData.getImmunities().getParalyze() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Paralyze"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeDrunk }
              defaultChecked={ this.props.appData.getImmunities().getDrunk() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Drunk"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeInvisible }
              defaultChecked={ this.props.appData.getImmunities().getInvisible() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Invisible"
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeOutfit }
              defaultChecked={ this.props.appData.getImmunities().getOutfit() }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Outfit"
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default MonsterMakerTabImmunities;
