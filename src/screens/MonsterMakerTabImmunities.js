import React from 'react';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

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
      <div style={ tabStyle }>
        <MonsterMakerLabel text="Immunities" />
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeHoly}
                  defaultChecked={ this.props.appData.getImmunities().getHoly() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Holy"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeDeath }
                  defaultChecked={ this.props.appData.getImmunities().getDeath() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Death"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeIce }
                  defaultChecked={ this.props.appData.getImmunities().getIce() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Ice"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeFire }
                  defaultChecked={ this.props.appData.getImmunities().getFire() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Fire"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeEarth }
                  defaultChecked={ this.props.appData.getImmunities().getEarth() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Earth"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeEnergy }
                  defaultChecked={ this.props.appData.getImmunities().getEnergy() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Energy"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangePhysical }
                  defaultChecked={ this.props.appData.getImmunities().getPhysical() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Physical"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeLifeDrain }
                  defaultChecked={ this.props.appData.getImmunities().getLifeDrain() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Life Drain"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeDrown }
                  defaultChecked={ this.props.appData.getImmunities().getDrown() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Drown"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeParalyze }
                  defaultChecked={ this.props.appData.getImmunities().getParalyze() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Paralyze"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeDrunk }
                  defaultChecked={ this.props.appData.getImmunities().getDrunk() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Drunk"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeInvisible }
                  defaultChecked={ this.props.appData.getImmunities().getInvisible() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Invisible"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={ this.onChangeOutfit }
                  defaultChecked={ this.props.appData.getImmunities().getOutfit() }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Outfit"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabImmunities;
