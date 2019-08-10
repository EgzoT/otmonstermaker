import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';

class MonsterMakerTabScript extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      check: this.props.appData.getScript().getChecked(),
    };
  }

  onChangeChecked = (event) => {
    this.props.appData.getScript().setChecked(!this.props.appData.getScript().getChecked());
    this.setState({ check: this.props.appData.getScript().getChecked() });
  }

  onChangeScript = (event) => {
    this.props.appData.getScript().setScript(event.target.value);
  }

  render() {
    return (
      <div className="tabMenu">
        <ReactTooltip place="bottom" type="dark" effect="float" html="true" />
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  defaultChecked={this.props.appData.getScript().getChecked()}
                  onChange={this.onChangeChecked}
                  tooltip="Check on to add script."
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Script"
                  tooltip="Check on to add script."
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Script"
              disabled={!this.props.appData.getScript().getChecked()}
              tooltip="There you can use creaturescripts made for certain monsters.<br>You put this tag between flags and attacks."
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="text"
              defaultValue={this.props.appData.getScript().getScript()}
              onChange={this.onChangeScript}
              disabled={!this.props.appData.getScript().getChecked()}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default MonsterMakerTabScript;
