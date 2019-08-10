import React from 'react';
import ReactTooltip from 'react-tooltip';

import { areaEffect, shotEffect } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

const firstLabelWidth = { minWidth: 200 }
const secondLabelWidth = { minWidth: 180 }

class MonsterMakerTabAttacks extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      attackType: this.props.appData.getAttacks().getType(),
      elementalType: this.props.appData.getAttacks().getElementalType(),
      conditionsType: this.props.appData.getAttacks().getConditionsType(),
      fieldsType: this.props.appData.getAttacks().getFieldsType(),
      runesType: this.props.appData.getAttacks().getRunesType(),
      spellsType: this.props.appData.getAttacks().getSpellsType(),
      otherType: this.props.appData.getAttacks().getOtherType(),
      min: this.props.appData.getAttacks().getMin(),
      max: this.props.appData.getAttacks().getMax(),
      skillChange: this.props.appData.getAttacks().getSkillCheckbox(),
      skill: this.props.appData.getAttacks().getSkill(),
      attack: this.props.appData.getAttacks().getAttack(),
      interval: this.props.appData.getAttacks().getInterval(),
      chance: this.props.appData.getAttacks().getChance(),
      lengthCheckbox: this.props.appData.getAttacks().getLengthCheckbox(),
      length: this.props.appData.getAttacks().getLength(),
      spreadCheckbox: this.props.appData.getAttacks().getSpreadCheckbox(),
      spread: this.props.appData.getAttacks().getSpread(),
      radiusCheckbox: this.props.appData.getAttacks().getRadiusCheckbox(),
      radius: this.props.appData.getAttacks().getRadius(),
      poisonCheckbox: this.props.appData.getAttacks().getPoisonCheckbox(),
      poison: this.props.appData.getAttacks().getPoison(),
      target: this.props.appData.getAttacks().getTarget(),
      range: this.props.appData.getAttacks().getRange(),
      areaeffectCheckbox: this.props.appData.getAttacks().getAreaeffectCheckbox(),
      areaeffect: this.props.appData.getAttacks().getAreaeffect(),
      shooteffectCheckbox: this.props.appData.getAttacks().getShooteffectCheckbox(),
      shooteffect: this.props.appData.getAttacks().getShooteffect(),

      activeItem: this.props.activeItem
    };
  }

  //On change states

  onChangeAttackType = (event) => {
    this.props.appData.getAttacks().setType(event.target.value);
    this.setState({ attackType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexType(this.state.activeItem, event.target.value);
    }
  }

  onChangeElementalType = (event) => {
    this.props.appData.getAttacks().setElementalType(event.target.value);
    this.setState({ elementalType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexElementalType(this.state.activeItem, event.target.value);
    }
  }

  onChangeConditionsType = (event) => {
    this.props.appData.getAttacks().setConditionsType(event.target.value);
    this.setState({ conditionsType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexConditionsType(this.state.activeItem, event.target.value);
    }
  }

  onChangeFieldsType = (event) => {
    this.props.appData.getAttacks().setFieldsType(event.target.value);
    this.setState({ fieldsType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexFieldsType(this.state.activeItem, event.target.value);
    }
  }

  onChangeRunesType = (event) => {
    this.props.appData.getAttacks().setRunesType(event.target.value);
    this.setState({ runesType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexRunesType(this.state.activeItem, event.target.value);
    }
  }

  onChangeSpellsType = (event) => {
    this.props.appData.getAttacks().setSpellsType(event.target.value);
    this.setState({ spellsType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexSpellsType(this.state.activeItem, event.target.value);
    }
  }

  onChangeOtherType = (event) => {
    this.props.appData.getAttacks().setOtherType(event.target.value);
    this.setState({ otherType: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexOtherType(this.state.activeItem, event.target.value);
    }
  }

  onChangeMin = (event) => {
    this.props.appData.getAttacks().setMin(event.target.value);
    this.setState({ min: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexMin(this.state.activeItem, event.target.value);
    }
  }

  onChangeMax = (event) => {
    this.props.appData.getAttacks().setMax(event.target.value);
    this.setState({ max: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexMax(this.state.activeItem, event.target.value);
    }
  }

  onChangeSkillCheckbox = (event) => {
    this.props.appData.getAttacks().setSkillCheckbox(!this.props.appData.getAttacks().getSkillCheckbox());
    this.setState({ skillChange: this.props.appData.getAttacks().getSkillCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexSkillCheckbox(this.state.activeItem, this.props.appData.getAttacks().getSkillCheckbox());
    }
  }

  onChangeSkill = (event) => {
    this.props.appData.getAttacks().setSkill(event.target.value);
    this.setState({ skill: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexSkill(this.state.activeItem, event.target.value);
    }
  }

  onChangeAttack = (event) => {
    this.props.appData.getAttacks().setAttack(event.target.value);
    this.setState({ attack: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexAttack(this.state.activeItem, event.target.value);
    }
  }

  onChangeInterval = (event) => {
    this.props.appData.getAttacks().setInterval(event.target.value);
    this.setState({ interval: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexInterval(this.state.activeItem, event.target.value);
    }
  }

  onChangeChance = (event) => {
    this.props.appData.getAttacks().setChance(event.target.value);
    this.setState({ chance: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexChance(this.state.activeItem, event.target.value);
    }
  }

  onChangeLengthCheckbox = (event) => {
    this.props.appData.getAttacks().setLengthCheckbox(!this.props.appData.getAttacks().getLengthCheckbox());
    this.setState({ lengthCheckbox: this.props.appData.getAttacks().getLengthCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexLengthCheckbox(this.state.activeItem, this.props.appData.getAttacks().getLengthCheckbox());
    }
  }

  onChangeLength = (event) => {
    this.props.appData.getAttacks().setLength(event.target.value);
    this.setState({ length: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexLength(this.state.activeItem, event.target.value);
    }
  }

  onChangeSpreadCheckbox = (event) => {
    this.props.appData.getAttacks().setSpreadCheckbox(!this.props.appData.getAttacks().getSpreadCheckbox());
    this.setState({ spreadCheckbox: this.props.appData.getAttacks().getSpreadCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexSpreadCheckbox(this.state.activeItem, this.props.appData.getAttacks().getSpreadCheckbox());
    }
  }

  onChangeSpread = (event) => {
    this.props.appData.getAttacks().setSpread(event.target.value);
    this.setState({ spread: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexSpread(this.state.activeItem, event.target.value);
    }
  }

  onChangeRadiusCheckbox = (event) => {
    this.props.appData.getAttacks().setRadiusCheckbox(!this.props.appData.getAttacks().getRadiusCheckbox());
    this.setState({ radiusCheckbox: this.props.appData.getAttacks().getRadiusCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexRadiusCheckbox(this.state.activeItem, this.props.appData.getAttacks().getRadiusCheckbox());
    }
  }

  onChangeRadius = (event) => {
    this.props.appData.getAttacks().setRadius(event.target.value);
    this.setState({ radius: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexRadius(this.state.activeItem, event.target.value);
    }
  }

  onChangePoisonCheckbox = (event) => {
    this.props.appData.getAttacks().setPoisonCheckbox(!this.props.appData.getAttacks().getPoisonCheckbox());
    this.setState({ poisonCheckbox: this.props.appData.getAttacks().getPoisonCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexPoisonCheckbox(this.state.activeItem, this.props.appData.getAttacks().getPoisonCheckbox());
    }
  }

  onChangePoison = (event) => {
    this.props.appData.getAttacks().setPoison(event.target.value);
    this.setState({ poison: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexPoison(this.state.activeItem, event.target.value);
    }
  }

  onChangeTarget = (event) => {
    this.props.appData.getAttacks().setTarget(!this.props.appData.getAttacks().getTarget());
    this.setState({ target: this.props.appData.getAttacks().getTarget() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexTarget(this.state.activeItem, this.props.appData.getAttacks().getTarget());
    }
  }

  onChangeRange = (event) => {
    this.props.appData.getAttacks().setRange(event.target.value);
    this.setState({ range: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexRange(this.state.activeItem, event.target.value);
    }
  }

  onChangeAreaeffectCheckbox = (event) => {
    this.props.appData.getAttacks().setAreaeffectCheckbox(!this.props.appData.getAttacks().getAreaeffectCheckbox());
    this.setState({ areaeffectCheckbox: this.props.appData.getAttacks().getAreaeffectCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexAreaeffectCheckbox(this.state.activeItem, this.props.appData.getAttacks().getAreaeffectCheckbox());
    }
  }

  onChangeAreaeffect = (event) => {
    this.props.appData.getAttacks().setAreaeffect(event.target.value);
    this.setState({ areaeffect: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexAreaeffect(this.state.activeItem, event.target.value);
    }
  }

  onChangeShooteffectCheckbox = (event) => {
    this.props.appData.getAttacks().setShooteffectCheckbox(!this.props.appData.getAttacks().getShooteffectCheckbox());
    this.setState({ shooteffectCheckbox: this.props.appData.getAttacks().getShooteffectCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexShooteffectCheckbox(this.state.activeItem, this.props.appData.getAttacks().getShooteffectCheckbox());
    }
  }

  onChangeShooteffect = (event) => {
    this.props.appData.getAttacks().setShooteffect(event.target.value);
    this.setState({ shooteffect: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().setIndexShooteffect(this.state.activeItem, event.target.value);
    }
  }

  //Buttons action

  clickAddButton = () => {
    this.props.appData.getAttacks().addToAttacks();
    this.forceUpdate();
  }

  clickDeleteButton = () => {
    if (this.state.activeItem !== null) {
      this.props.appData.getAttacks().deleteFromAttacks(this.state.activeItem);
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  //Refresh items

  refreshItems = () => {
    this.setState({
      attackType: this.props.appData.getAttacks().getType(),
      elementalType: this.props.appData.getAttacks().getElementalType(),
      conditionsType: this.props.appData.getAttacks().getConditionsType(),
      fieldsType: this.props.appData.getAttacks().getFieldsType(),
      runesType: this.props.appData.getAttacks().getRunesType(),
      spellsType: this.props.appData.getAttacks().getSpellsType(),
      otherType: this.props.appData.getAttacks().getOtherType(),
      min: this.props.appData.getAttacks().getMin(),
      max: this.props.appData.getAttacks().getMax(),
      skillChange: this.props.appData.getAttacks().getSkillCheckbox(),
      skill: this.props.appData.getAttacks().getSkill(),
      attack: this.props.appData.getAttacks().getAttack(),
      interval: this.props.appData.getAttacks().getInterval(),
      chance: this.props.appData.getAttacks().getChance(),
      lengthCheckbox: this.props.appData.getAttacks().getLengthCheckbox(),
      length: this.props.appData.getAttacks().getLength(),
      spreadCheckbox: this.props.appData.getAttacks().getSpreadCheckbox(),
      spread: this.props.appData.getAttacks().getSpread(),
      radiusCheckbox: this.props.appData.getAttacks().getRadiusCheckbox(),
      radius: this.props.appData.getAttacks().getRadius(),
      poisonCheckbox: this.props.appData.getAttacks().getPoisonCheckbox(),
      poison: this.props.appData.getAttacks().getPoison(),
      target: this.props.appData.getAttacks().getTarget(),
      range: this.props.appData.getAttacks().getRange(),
      areaeffectCheckbox: this.props.appData.getAttacks().getAreaeffectCheckbox(),
      areaeffect: this.props.appData.getAttacks().getAreaeffect(),
      shooteffectCheckbox: this.props.appData.getAttacks().getShooteffectCheckbox(),
      shooteffect: this.props.appData.getAttacks().getShooteffect()
    });
  }

  //Active item
  setActiveItem = (event) => {
    if (this.state.activeItem !== event.target.id) {
      this.setState({ activeItem: event.target.id });
      this.props.appData.getAttacks().showAttacks(event.target.id);
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
        <MonsterMakerItemsTable
          data = { this.props.appData.getAttacks().getAllXMLattacks() }
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
              text="Name"
              tooltip="There you can use various attacks like 'melee'.<br>It includes also spell names like:"
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel text="Type:" />
          </li>
          <td>
            <MonsterMakerInputSelect
              selectItems={ this.props.appData.getAttacks().getAttackTypeArray() }
              value={ this.state.attackType }
              onChange={ this.onChangeAttackType }
            />
          </td>
          <td>
            {
              this.state.attackType === "elemental" ?
              <MonsterMakerInputSelect
                selectItems={ this.props.appData.getAttacks().getElementalTypeArray() }
                value={ this.state.elementalType }
                onChange={ this.onChangeElementalType }
              /> : null
            }
            {
              this.state.attackType === "conditions" ?
              <MonsterMakerInputSelect
                selectItems={ this.props.appData.getAttacks().getConditionsTypeArray() }
                value={ this.state.conditionsType }
                onChange={ this.onChangeConditionsType }
              /> : null
            }
            {
              this.state.attackType === "fields" ?
              <MonsterMakerInputSelect
                selectItems={ this.props.appData.getAttacks().getFieldsTypeArray() }
                value={ this.state.fieldsType }
                onChange={ this.onChangeFieldsType }
              /> : null
            }
            {
              this.state.attackType === "runes" ?
              <MonsterMakerInputSelect
                selectItems={ this.props.appData.getAttacks().getRunesTypeArray() }
                value={ this.state.runesType }
                onChange={ this.onChangeRunesType }
              /> : null
            }
            {
              this.state.attackType === "spells" ?
              <MonsterMakerInputSelect
                selectItems={ this.props.appData.getAttacks().getSpellsTypeArray() }
                value={ this.state.spellsType }
                onChange={ this.onChangeSpellsType }
              /> : null
            }
            {
              this.state.attackType === "other" ?
              <MonsterMakerInput
                type="text"
                value={ this.state.otherType }
                onChange={ this.onChangeOtherType }
              /> : null
            }
          </td>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Min"
              disabled={ this.state.skillChange && this.state.attackType === "melee" }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.min }
              onChange={ this.onChangeMin }
              disabled={ this.state.skillChange && this.state.attackType === "melee" }
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Max"
              disabled={ this.state.skillChange && this.state.attackType === "melee" }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.max }
              onChange={ this.onChangeMax }
              disabled={ this.state.skillChange && this.state.attackType === "melee" }
            />
          </li>
          {
            this.state.attackType === "melee" ?
            <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
              <MonsterMakerInput
                type="checkbox"
                value={ this.state.skillChange }
                onChange={ this.onChangeSkillCheckbox }
              />
            </li> : null
          }
          {
            this.state.attackType === "melee" ?
            <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
              <MonsterMakerLabel
                text="Skill"
              />
            </li> : null
          }
          {
            this.state.attackType === "melee" ?
            <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
              <MonsterMakerInput
                type="number"
                value={ this.state.skill }
                onChange={ this.onChangeSkill }
                disabled={ !this.state.skillChange }
              />
            </li> : null
          }
          {
            this.state.attackType === "melee" ?
            <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
              <MonsterMakerLabel
                text="Attack"
                disabled={ !this.state.skillChange }
              />
            </li> : null
          }
          {
            this.state.attackType === "melee" ?
            <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
              <MonsterMakerInput
                type="number"
                value={ this.state.attack }
                onChange={ this.onChangeAttack }
                disabled={ !this.state.skillChange }
              />
            </li> : null
          }
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Interval"
              tooltip="It's how often the spell will be cast - 2000 = 2seconds."
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
              tooltip="It's the chance to cast the spell successfully (in %)."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.chance }
              min="1"
              onChange={ this.onChangeChance }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.lengthCheckbox }
              onChange={ this.onChangeLengthCheckbox }
              disabled={ this.state.radiusCheckbox }
              tooltip="How long the beam/wave is - remember to set always spread='0'<br>If there is no spread it still will be cast as wave.<br>(So length='x' spread='0')."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Length"
              disabled={ this.state.radiusCheckbox }
              tooltip="How long the beam/wave is - remember to set always spread='0'.<br>If there is no spread it still will be cast as wave.<br>(So length='x' spread='0')."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.length }
              min="0"
              max="11"
              onChange={ this.onChangeLength }
              disabled={ !this.state.lengthCheckbox }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.spreadCheckbox }
              onChange={ this.onChangeSpreadCheckbox }
              disabled={ this.state.radiusCheckbox }
              tooltip="How big spread is."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Spread"
              disabled={ this.state.radiusCheckbox }
              tooltip="How big spread is."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.spread }
              min="0"
              max="3"
              onChange={ this.onChangeSpread }
              disabled={ !this.state.spreadCheckbox }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.radiusCheckbox }
              onChange={ this.onChangeRadiusCheckbox }
              disabled={ this.state.lengthCheckbox || this.state.spreadCheckbox }
              tooltip="This is responsible for the size of area.<br>(Radius won't work with spread and length - if there's already length and/or spread do not add radius)."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Radius"
              disabled={ this.state.lengthCheckbox || this.state.spreadCheckbox}
              tooltip="This is responsible for the size of area.<br>(Radius won't work with spread and length - if there's already length and/or spread do not add radius)."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.radius }
              min="1"
              max="9"
              onChange={ this.onChangeRadius }
              disabled={ !this.state.radiusCheckbox }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.poisonCheckbox }
              onChange={ this.onChangePoisonCheckbox }
              tooltip="Makes target poisoned, formula is:<br>Desired damage(for example. 25hp/turn)*20 = 500 so poison='500'."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Poison"
              tooltip="Makes target poisoned, formula is:<br>Desired damage(for example. 25hp/turn)*20 = 500 so poison='500'."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.poison }
              min="1"
              onChange={ this.onChangePoison }
              disabled={ !this.state.poisonCheckbox }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.target }
              onChange={ this.onChangeTarget }
              tooltip="Checked target - spell cast on monster itself.<br>Unchecked target - spell cast on target."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Target"
              tooltip="Checked target - spell cast on monster itself.<br>Unchecked target - spell cast on target."
              width={ secondLabelWidth }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Range"
              disabled={ !this.state.target }
              tooltip="Means how far your monster can shoot a ranged spell."
              width={ firstLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="number"
              value={ this.state.range }
              min="1"
              max="12"
              onChange={ this.onChangeRange }
              disabled={ !this.state.target }
            />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.areaeffectCheckbox }
              onChange={ this.onChangeAreaeffectCheckbox }
              tooltip="There you can add various areaEffects for the spell."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Area Effect"
              tooltip="There you can add various areaEffects for the spell."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInputSelect
                selectItems={ areaEffect }
                value={ this.state.areaeffect }
                onChange={ this.onChangeAreaeffect }
                disabled={ !this.state.areaeffectCheckbox }
              />
          </li>
        </ul>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.shooteffectCheckbox }
              onChange={ this.onChangeShooteffectCheckbox }
              tooltip="There you can add various shootEffect for the spell."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Shoot Effect"
              tooltip="There you can add various shootEffect for the spell."
              width={ secondLabelWidth }
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInputSelect
                selectItems={ shotEffect }
                value={ this.state.shooteffect }
                onChange={ this.onChangeShooteffect }
                disabled={ !this.state.shooteffectCheckbox }
              />
          </li>
        </ul>
      </div>
    );
  }
}

export default MonsterMakerTabAttacks;
