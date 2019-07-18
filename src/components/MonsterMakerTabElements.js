import React from 'react';

import MonsterMakerLabel from './MonsterMakerLabel.js';
import MonsterMakerInput from './MonsterMakerInput.js';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

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
      <div style={ tabStyle }>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Elements"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Holy"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.holy }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeHoly }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.holy }
                  onChange={ this.onChangeHoly }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Death"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.death }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeDeath }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.death }
                  onChange={ this.onChangeDeath }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Ice"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.ice }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeIce }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.ice }
                  onChange={ this.onChangeIce }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Fire"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.fire }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeFire }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.fire }
                  onChange={this.onChangeFire}
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Earth"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.earth }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeEarth }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.earth }
                  onChange={ this.onChangeEarth }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Energy"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.energy }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeEnergy }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.energy }
                  onChange={ this.onChangeEnergy }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Physical"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.physical }
                  min="-100"
                  max="100"
                  onChange={ this.onChangePhysical }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.physical }
                  onChange={ this.onChangePhysical }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Life Drain"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.lifeDrain }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeLifeDrain }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.lifeDrain }
                  onChange={ this.onChangeLifeDrain }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Drown"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.drown }
                  min="-100"
                  max="100"
                  onChange={ this.onChangeDrown }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{ width: "100%" }}
                  value={ this.state.drown }
                  onChange={ this.onChangeDrown }
                  min="-100"
                  max="100"
                  step="1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabElements;
