import React from 'react';
import { Tooltip } from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';
import { FlexibleGridContainer } from '../components/FlexibleGrid';

class MonsterMakerTabFlags extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      staticattack: this.props.appData.getFlags().getStaticattack(),
      runonhealth: this.props.appData.getFlags().getRunonhealth(),
      lightcolorChange: this.props.appData.getFlags().getLightcolor() === "0" ? false : true
    };
  }

  onChangeSummonable = (event) => {
    this.props.appData.getFlags().setSummonable(!this.props.appData.getFlags().getSummonable());
  }

  onChangeAttackable = (event) => {
    this.props.appData.getFlags().setAttackable(!this.props.appData.getFlags().getAttackable());
  }

  onChangeHostile = (event) => {
    this.props.appData.getFlags().setHostile(!this.props.appData.getFlags().getHostile());
  }

  onChangeIllusionable = (event) => {
    this.props.appData.getFlags().setIllusionable(!this.props.appData.getFlags().getIllusionable());
  }

  onChangeConvinceable = (event) => {
    this.props.appData.getFlags().setConvinceable(!this.props.appData.getFlags().getConvinceable());
  }

  onChangePushable = (event) => {
    this.props.appData.getFlags().setPushable(!this.props.appData.getFlags().getPushable());
  }

  onChangeCanpushitems = (event) => {
    this.props.appData.getFlags().setCanpushitems(!this.props.appData.getFlags().getCanpushitems());
  }

  onChangeCanpushcreatures = (event) => {
    this.props.appData.getFlags().setCanpushcreatures(!this.props.appData.getFlags().getCanpushcreatures());
  }

  onChangeTargetdistance = (event) => {
    this.props.appData.getFlags().setTargetdistance(event.target.value);
  }

  onChangeStaticattack = (event) => {
    this.setState({ staticattack: event.target.value });
    this.props.appData.getFlags().setStaticattack(event.target.value);
  }

  onChangeHidehealth = (event) => {
    this.props.appData.getFlags().setHidehealth(!this.props.appData.getFlags().getHidehealth());
  }

  onChangeLightcolor = (event) => {
    if (event.target.value === "0") {
      this.setState({ lightcolorChange: false });
    } else {
      this.setState({ lightcolorChange: true });
    }
    this.props.appData.getFlags().setLightcolor(event.target.value);
  }

  onChangeLightlevel = (event) => {
    this.props.appData.getFlags().setLightlevel(event.target.value);
  }

  onChangeRunonhealth = (event) => {
    this.setState({ runonhealth: event.target.value });
    this.props.appData.getFlags().setRunonhealth(event.target.value);
  }

  render() {
    return (
      <div className="tabMenu">
        <Tooltip place="bottom" type="dark" effect="float" html={ true } />

        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeSummonable }
            defaultChecked={ this.props.appData.getFlags().getSummonable() }
            tooltip="Check if you want your monster to be summoned.<br>(You need to add value to mana='x' in order to spent mana when summoned).<br>Uncheck if you dont want it to be summoned."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Summonable"
            tooltip="Check if you want your monster to be summoned.<br>(You need to add value to mana='x' in order to spent mana when summoned).<br>Uncheck if you dont want it to be summoned."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeAttackable }
            defaultChecked={ this.props.appData.getFlags().getAttackable() }
            tooltip="Check so you can attack it.<br>Uncheck if you dont want it to be attackable."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Attackable"
            tooltip="Check so you can attack it.<br>Uncheck if you dont want it to be attackable."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeHostile }
            defaultChecked={ this.props.appData.getFlags().getHostile() }
            tooltip="Check so your monster will be aggressive.<br>Uncheck if you want your monster to be friendly(like 'deer')."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Hostile"
            tooltip="Check so your monster will be aggressive.<br>Uncheck if you want your monster to be friendly(like 'deer')."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
            <MonsterMakerInput
              type="checkbox"
              onChange={ this.onChangeIllusionable }
              defaultChecked={ this.props.appData.getFlags().getIllusionable() }
              tooltip="Check if you want players to change into this monster using 'Creature Illusion' spell.<br>Uncheck if it shouldn't be illusionable."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerLabel
              text="Illusionable"
              tooltip="Check if you want players to change into this monster using 'Creature Illusion' spell.<br>Uncheck if it shouldn't be illusionable."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeConvinceable }
            defaultChecked={ this.props.appData.getFlags().getConvinceable() }
            tooltip="Check if you want your monster to be convinced using 'Convince Creature Rune'.<br>(You need to add value to mana='x' in order to spent mana when summoned).<br>Uncheck if you dont want it to be convinced."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Convinceable"
            tooltip="Check if you want your monster to be convinced using 'Convince Creature Rune'.<br>(You need to add value to mana='x' in order to spent mana when summoned).<br>Uncheck if you dont want it to be convinced."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangePushable }
            defaultChecked={ this.props.appData.getFlags().getPushable() }
            tooltip="Check if you want your monster to be pushed by players or other monsters.<br>(Can be killed with that sometimes)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Pushable"
            tooltip="Check if you want your monster to be pushed by players or other monsters.<br>(Can be killed with that sometimes)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeCanpushitems }
            defaultChecked={ this.props.appData.getFlags().getCanpushitems() }
            tooltip="Check if you want your monster to push other things like boxes, chests etc."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Canpushitems"
            tooltip="Check if you want your monster to push other things like boxes, chests etc."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeCanpushcreatures }
            defaultChecked={ this.props.appData.getFlags().getCanpushcreatures() }
            tooltip="Check if you want your monster to push other creatures.<br>(Only creatures with checked pushable, else wont push)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Canpushcreatures"
            tooltip="Check if you want your monster to push other creatures.<br>(Only creatures with checked pushable, else wont push)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Targetdistance:"
            tooltip="It's the range which creature keeps between him and target.<br>So put '1' if you want your creature to fight in melee range (close to you) or put '4' if you want it to keep distance like a warlock.<br>(Of course you can put also '2' or '8' targetdistance, '1' and '4' are values used the most)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            max="20"
            defaultValue={ this.props.appData.getFlags().getTargetdistance() }
            onChange={ this.onChangeTargetdistance }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <MonsterMakerLabel
          text={ "Staticattack: " + this.state.staticattack }
          tooltip="This flag is responsible for monster 'dancing' around target.<br>So if you put '100' monster won't move around it's target at all, if you put '1' it will be dancing around you like crazy.<br>I suggest to use it between 85-95."
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <MonsterMakerInput
          type="range"
          style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
          defaultValue={ this.props.appData.getFlags().getStaticattack() }
          onChange={ this.onChangeStaticattack }
          min="0"
          max="100"
          step="1"
        />
        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            onChange={ this.onChangeHidehealth }
            defaultChecked={ this.props.appData.getFlags().getHidehealth() }
            tooltip="Check if you want your monster healthbar and name to be invisible.<br>(You won't be able to target it - no red box around monster).<br>The only monster using it are traps like - plaguethrower, flamethrower, shredderthrower etc."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Hidehealth"
            tooltip="Check if you want your monster healthbar and name to be invisible.<br>(You won't be able to target it - no red box around monster).<br>The only monster using it are traps like - plaguethrower, flamethrower, shredderthrower etc."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Lightcolor:"
            tooltip="Put '0' so monster wont emite any light at all.<br>Put from 1 - 255 so it will emit light of that color."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="0"
            max="255"
            defaultValue={ this.props.appData.getFlags().getLightcolor() }
            onChange={ this.onChangeLightcolor }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Lightlevel:"
            tooltip="This is responsible for lightlevel.<br>(Works only if your lightcolor is greater than 0)."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="number"
            min="1"
            max="100"
            defaultValue={ this.props.appData.getFlags().getLightlevel() }
            onChange={ this.onChangeLightlevel }
            disabled={ !this.state.lightcolorChange }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <MonsterMakerLabel
          text={ "Runonhealth: " + this.state.runonhealth }
          tooltip="This flag is responsible for monster running away - number is the amount of health.<br>So if runonhealth='5' means that your creature will run when it's health is 5 or below.<br>Runonhealth='0' means that creature will fight until death."
          style={{ marginLeft: 3, marginRight: 3 }}
        />
        <MonsterMakerInput
          type="range"
          style={{ width: "100%", marginLeft: 3, marginRight: 3 }}
          defaultValue={ this.props.appData.getFlags().getRunonhealth() }
          onChange={ this.onChangeRunonhealth }
          min="0"
          max="100"
          step="1"
        />
      </div>
    );
  }
}

export default MonsterMakerTabFlags;
