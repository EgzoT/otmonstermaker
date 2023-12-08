import React from 'react';

import { raceSelect, skullSelect } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect } from '../components';
import { FlexibleGridContainer, FlexibleGrid } from '../components/FlexibleGrid';
import OTColorInput from '../components/otcolorinput-react/OTColorInput';

const firstLabelWidth = { minWidth: 200 }

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

  onChangeHead = (colorId) => {
    this.props.appData.getMonster().setHead(colorId);
  }

  onChangeBody = (colorId) => {
    this.props.appData.getMonster().setBody(colorId);
  }

  onChangeLegs = (colorId) => {
    this.props.appData.getMonster().setLegs(colorId);
  }

  onChangeFeet = (colorId) => {
    this.props.appData.getMonster().setFeet(colorId);
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
      <div className="tabMenu">
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Monster name:"
            tooltip="Put your monster name."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="text"
            defaultValue={ this.props.appData.getMonster().getName() }
            onChange={ this.onChangeName }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Name description:"
            tooltip="Put description of your monster.<br>Example:<br>'A demon loses 5 hitpoints due to an attack by a test.'<br>'a test' is name description."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="text"
            defaultValue={ this.props.appData.getMonster().getNameDescription() }
            onChange={ this.onChangeNameDescription }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Race:"
            tooltip="Choose race for monster."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInputSelect
            selectItems={ raceSelect }
            defaultValue={ this.props.appData.getMonster().getRace() }
            onChange={ this.onChangeRace }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Experience:"
            tooltip="Choose how many experience points gain player for kill monster."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            defaultValue={ this.props.appData.getMonster().getExperience() }
            onChange={ this.onChangeExperience }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Skull:"
            tooltip="Choose skulls type for your monster to have.<br>Set 'none' to don't set skull."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInputSelect
            selectItems={ skullSelect }
            defaultValue={ this.props.appData.getMonster().getSkull() }
            onChange={ this.onChangeSkull }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Speed:"
            tooltip="Choose speed for your monster.<br>Set it to '0' means your monster won't move at all."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            defaultValue={ this.props.appData.getMonster().getSpeed() }
            onChange={ this.onChangeSpeed }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Mana cost:"
            tooltip="You can configure mana cost needed for the summon of this monster.<br>You need to turn on flag 'summonable' or 'convinceable'."
            width={ firstLabelWidth }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            defaultValue={ this.props.appData.getMonster().getManaCost() }
            onChange={ this.onChangeManaCost }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Health:"
            tooltip="Set health points for your monster."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerLabel
                text="Now:"
                tooltip="How much health points will have monster when he spawned."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerInput
                type="number"
                min="0"
                defaultValue={ this.props.appData.getMonster().getHealthNow() }
                onChange={ this.onChangeHealthNow }
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerLabel
                text="Max:"
                tooltip="Maximum health points of monster.<br>This value needs to be equal or greater than in 'Now'."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerInput
                type="number"
                min="0"
                defaultValue={ this.props.appData.getMonster().getHealthMax() }
                onChange={ this.onChangeHealthMax }
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
          </FlexibleGrid>
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerInput
                type="radio"
                onChange={ this.onChangeLookType }
                value="0"
                checked={ this.props.appData.getMonster().getLookType() === "0" }
                tooltip="This is where you set up outfit of your monster."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerLabel
                text="Look Type"
                tooltip="This is where you set up outfit of your monster."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerInput
                type="radio"
                onChange={ this.onChangeLookType }
                value="1"
                checked={ this.props.appData.getMonster().getLookType() === "1" }
                tooltip="This is where you set up outfit from item id for your monster.<br>For example for id '3031', your monster look like 'Gold Coin'."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerLabel
                text="Look TypeEx"
                tooltip="This is where you set up outfit from item id for your monster.<br>For example for id '3031', your monster look like 'Gold Coin'."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
          </FlexibleGrid>
          <MonsterMakerInput
            type="number"
            min="1"
            defaultValue={ this.props.appData.getMonster().getLookTypeValue() }
            onChange={ this.onChangeLookTypeValue }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Head:"
              tooltip="Choose color id for head.<br>Works only if monster has outfit which can be edited with colors like player outfits."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <OTColorInput
              value={ this.props.appData.getMonster().getHead() }
              onChange={ this.onChangeHead }
              style={{ marginLeft: 3, marginRight: 3 }}
              fullStyle={{ button: { outer: { width: '3em', height: '1.5em' } } }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Body:"
              tooltip="Choose color id for body.<br>Works only if monster has outfit which can be edited with colors like player outfits."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <OTColorInput
              value={ this.props.appData.getMonster().getBody() }
              onChange={ this.onChangeBody }
              style={{ marginLeft: 3, marginRight: 3 }}
              fullStyle={{ button: { outer: { width: '3em', height: '1.5em' } } }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Legs:"
              tooltip="Choose color id for legs.<br>Works only if monster has outfit which can be edited with colors like player outfits."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <OTColorInput
              value={ this.props.appData.getMonster().getLegs() }
              onChange={ this.onChangeLegs }
              style={{ marginLeft: 3, marginRight: 3 }}
              fullStyle={{ button: { outer: { width: '3em', height: '1.5em' } } }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Feet:"
              tooltip="Choose color id for feet.<br>Works only if monster has outfit which can be edited with colors like player outfits."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <OTColorInput
              value={ this.props.appData.getMonster().getFeet() }
              onChange={ this.onChangeFeet }
              style={{ marginLeft: 3, marginRight: 3 }}
              fullStyle={{ button: { outer: { width: '3em', height: '1.5em' } } }}
            />
          </FlexibleGrid>
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Addons:"
              tooltip="You can type addons for your monster.<br>'0' means no addons, '1' means first addon, '2' means second addon, '3' means both addons.<br>Works only if monster has outfit which can be edited with addons."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="number"
              min="0"
              max="3"
              defaultValue={ this.props.appData.getMonster().getAddons() }
              onChange={ this.onChangeAddons }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="Mount:"
              tooltip="You can type mount for your creature.<br>Type mount='0' if you don't want your monster to have any mounts."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="number"
              min="0"
              defaultValue={ this.props.appData.getMonster().getMount() }
              onChange={ this.onChangeMount }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Corpse:"
            tooltip="Set monster corpse<br>If you want your monster to have any loot, set only containers."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            defaultValue={ this.props.appData.getMonster().getCorpse() }
            onChange={ this.onChangeCorpse }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Targetchange:"
            tooltip="You can set up monster retarget."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerLabel
                text="Interval:"
                tooltip="How often it will try to change it\'s target (in milliseconds)."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerInput
                type="number"
                min="0"
                defaultValue={ this.props.appData.getMonster().getTargetchangeInterval() }
                onChange={ this.onChangeTargetchangeInterval }
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
            <FlexibleGrid>
              <MonsterMakerLabel
                text="Chance:"
                tooltip="It's the chance to retarget successfully.<br>Put '0' if you don't want your monster to retarget at all."
                style={{ marginLeft: 3, marginRight: 3 }}
              />
              <MonsterMakerInput
                type="number"
                min="0"
                defaultValue={ this.props.appData.getMonster().getTargetchangeChance() }
                onChange={ this.onChangeTargetchangeChance }
                style={{ marginLeft: 3, marginRight: 3 }}
              />
            </FlexibleGrid>
          </FlexibleGrid>
        </FlexibleGridContainer>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeStrategy}
                  defaultChecked={this.props.appData.getMonster().getStrategy()}
                  tooltip="This is responsible for monster behavior."
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Strategy"
                  tooltip="This is responsible for monster behavior."
                />
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
                  tooltip="If more, there is more focused on attack."
                />
                <MonsterMakerLabel
                  text={"Defense: " + (100 - this.state.strategyValue)}
                  style={{float: "right"}}
                  disabled={!this.props.appData.getMonster().getStrategy()}
                  tooltip="If more, there is more focused on defence."
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
