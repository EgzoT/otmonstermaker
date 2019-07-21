import React from 'react';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

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
      <div style={tabStyle}>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeSummonable}
                  defaultChecked={this.props.appData.getFlags().getSummonable()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Summonable" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeAttackable}
                  defaultChecked={this.props.appData.getFlags().getAttackable()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Attackable" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeHostile}
                  defaultChecked={this.props.appData.getFlags().getHostile()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Hostile" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeIllusionable}
                  defaultChecked={this.props.appData.getFlags().getIllusionable()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Illusionable" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeConvinceable}
                  defaultChecked={this.props.appData.getFlags().getConvinceable()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Convinceable" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangePushable}
                  defaultChecked={this.props.appData.getFlags().getPushable()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Pushable" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeCanpushitems}
                  defaultChecked={this.props.appData.getFlags().getCanpushitems()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Canpushitems" />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  onChange={this.onChangeCanpushcreatures}
                  defaultChecked={this.props.appData.getFlags().getCanpushcreatures()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Canpushcreatures" />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Targetdistance:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="20"
                  defaultValue={this.props.appData.getFlags().getTargetdistance()}
                  onChange={this.onChangeTargetdistance}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel
                  text={"Staticattack: " + this.state.staticattack}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{width: "100%", padding: 10}}>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{width: "100%"}}
                  defaultValue={this.props.appData.getFlags().getStaticattack()}
                  onChange={this.onChangeStaticattack}
                  min="0"
                  max="100"
                  step="1"
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
                  onChange={this.onChangeHidehealth}
                  defaultChecked={this.props.appData.getFlags().getHidehealth()}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Hidehealth" />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Lightcolor:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="0"
                  max="255"
                  defaultValue={this.props.appData.getFlags().getLightcolor()}
                  onChange={this.onChangeLightcolor}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Lightlevel:" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  min="1"
                  max="100"
                  defaultValue={this.props.appData.getFlags().getLightlevel()}
                  onChange={this.onChangeLightlevel}
                  disabled={!this.state.lightcolorChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <table style={{width: "100%", padding: 10}}>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel
                  text={"Runonhealth: " + this.state.runonhealth}
                  //style={{float: "right"}}
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerInput
                  type="range"
                  style={{width: "100%"}}
                  defaultValue={this.props.appData.getFlags().getRunonhealth()}
                  onChange={this.onChangeRunonhealth}
                  min="0"
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

export default MonsterMakerTabFlags;
