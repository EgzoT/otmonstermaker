import React from 'react';

import { raceSelect, skullSelect } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect} from '../components';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

class MonsterMakerTabMonster extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      strategyValue: this.props.appData.getMonster().getAttack(),
      radioLookType: "0",
      strategyCheckbox: false
    };
  }

  onChangeName = (event) => {
    this.props.appData.getMonster().setName(event.target.value);
  }
  
  onChangeNameDescription = (event) => {
    this.props.appData.getMonster().setNameDescription(event.target.value);
  }

  onChangeRace = (event) => {
    this.props.appData.getMonster().setRace(event.target.value);
  }

  onChangeExperience = (event) => {
    this.props.appData.getMonster().setExperience(event.target.value);
  }

  onChangeSkull = (event) => {
    this.props.appData.getMonster().setSkull(event.target.value);
  }

  onChangeSpeed = (event) => {
    this.props.appData.getMonster().setSpeed(event.target.value);
  }

  onChangeManaCost = (event) => {
    this.props.appData.getMonster().setManaCost(event.target.value);
  }

  onChangeHealthMin = (event) => {
    this.props.appData.getMonster().setHealthMin(event.target.value);
  }

  onChangeHealthMax = (event) => {
    this.props.appData.getMonster().setHealthMax(event.target.value);
  }

  onChangeLookTypeValue = (event) => {
    this.props.appData.getMonster().setLookTypeValue(event.target.value);
  }

  onChangeHead = (event) => {
    this.props.appData.getMonster().setHead(event.target.value);
  }

  onChangeBody = (event) => {
    this.props.appData.getMonster().setBody(event.target.value);
  }

  onChangeLegs = (event) => {
    this.props.appData.getMonster().setLegs(event.target.value);
  }

  onChangeFeet = (event) => {
    this.props.appData.getMonster().setFeet(event.target.value);
  }

  onChangeAddons = (event) => {
    this.props.appData.getMonster().setAddons(event.target.value);
  }

  onChangeMount = (event) => {
    this.props.appData.getMonster().setMount(event.target.value);
  }

  onChangeCorpse = (event) => {
    this.props.appData.getMonster().setCorpse(event.target.value);
  }

  onChangeTargetchangeInterval = (event) => {
    this.props.appData.getMonster().setTargetchangeInterval(event.target.value);
  }

  onChangeTargetchangeChance = (event) => {
    this.props.appData.getMonster().setTargetchangeChance(event.target.value);
  }

  onChangeStrategy = (event) => {
    this.props.appData.getMonster().setStrategy(!this.props.appData.getMonster().getStrategy());
    this.setState({ strategyCheckbox: this.props.appData.getMonster().getStrategy() });
  }

  onChangeStrategyValue = (event) => {
    this.setState({ strategyValue: event.target.value });
    this.props.appData.getMonster().setAttack(event.target.value);
    this.props.appData.getMonster().setDefense(100 - event.target.value);
  }

  onChangeLookType = (event) => {
    this.setState({ radioLookType: event.currentTarget.value });
    this.props.appData.getMonster().setLookType(event.currentTarget.value);
  }

  render() {
    return (
      <div style={ tabStyle }>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Monster name:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  defaultValue={this.props.appData.getMonster().getName()}
                  onChange={this.onChangeName}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Name description:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  defaultValue={this.props.appData.getMonster().getNameDescription()}
                  onChange={this.onChangeNameDescription}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Race:" />
              </td>
              <td>
                <MonsterMakerInputSelect
                  selectItems={raceSelect}
                  defaultValue={this.props.appData.getMonster().getRace()}
                  onChange={this.onChangeRace}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Experience:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getExperience()}
                  onChange={this.onChangeExperience}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Skull:" />
              </td>
              <td>
                <MonsterMakerInputSelect
                  selectItems={skullSelect}
                  defaultValue={this.props.appData.getMonster().getSkull()}
                  onChange={this.onChangeSkull}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Speed:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getSpeed()}
                  onChange={this.onChangeSpeed}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Mana cost:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getManaCost()}
                  onChange={this.onChangeManaCost}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
                <td>
                  <MonsterMakerLabel text="Health:" />
                </td>
                <td>
                  <MonsterMakerLabel text="Now:" />
                </td>
                <td>
                  <MonsterMakerInput
                    type="number"
                    min="0"
                    defaultValue={this.props.appData.getMonster().getHealthNow()}
                    onChange={this.onChangeHealthNow}
                  />
                </td>
                <td>
                  <MonsterMakerLabel text="Max:" />
                </td>
                <td>
                  <MonsterMakerInput
                    type="number"
                    min="0"
                    defaultValue={this.props.appData.getMonster().getHealthMax()}
                    onChange={this.onChangeHealthMax}
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
                  type="radio"
                  onChange={this.onChangeLookType}
                  value="0"
                  checked={this.props.appData.getMonster().getLookType() === "0"}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Look Type" />
              </td>
              <td>
                <MonsterMakerInput
                  type="radio"
                  onChange={this.onChangeLookType}
                  value="1"
                  checked={this.props.appData.getMonster().getLookType() === "1"}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Look TypeEx" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  defaultValue={this.props.appData.getMonster().getLookTypeValue()}
                  onChange={this.onChangeLookTypeValue}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Head:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="132"
                  defaultValue={this.props.appData.getMonster().getHead()}
                  onChange={this.onChangeHead}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Body:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="132"
                  defaultValue={this.props.appData.getMonster().getBody()}
                  onChange={this.onChangeBody}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Legs:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="132"
                  defaultValue={this.props.appData.getMonster().getLegs()}
                  onChange={this.onChangeLegs}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Feet:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="132"
                  defaultValue={this.props.appData.getMonster().getFeet()}
                  onChange={this.onChangeFeet}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Addons:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="3"
                  defaultValue={this.props.appData.getMonster().getAddons()}
                  onChange={this.onChangeAddons}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Mount:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getMount()}
                  onChange={this.onChangeMount}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Corpse:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getCorpse()}
                  onChange={this.onChangeCorpse}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Targetchange:" />
              </td>
              <td>
                <MonsterMakerLabel text="Interval:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getTargetchangeInterval()}
                  onChange={this.onChangeTargetchangeInterval}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Chance:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  defaultValue={this.props.appData.getMonster().getTargetchangeChance()}
                  onChange={this.onChangeTargetchangeChance}
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
                  onChange={this.onChangeStrategy}
                  defaultChecked={this.props.appData.getMonster().getStrategy()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Strategy" />
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{width: "100%", padding: 10}}>
          <tbody>
            <tr>
              <td style={{display: "initial"}}>
                <MonsterMakerLabel
                  text={"Attack: " + this.state.strategyValue}
                  style={{float: "left"}}
                  disabled={!this.props.appData.getMonster().getStrategy()}
                />
                <MonsterMakerLabel
                  text={"Defense: " + (100 - this.state.strategyValue)}
                  style={{float: "right"}}
                  disabled={!this.props.appData.getMonster().getStrategy()}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{width: "100%"}}
                  defaultValue={this.props.appData.getMonster().getAttack()}
                  onChange={this.onChangeStrategyValue}
                  min="0"
                  max="100"
                  step="1"
                  disabled={!this.state.strategyCheckbox}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabMonster;
