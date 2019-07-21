import React from 'react';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';

const tabStyle = {
  padding: '15px 15px 10px 15px',
  width: 'fit-content',
  margin: '0px auto 0px auto',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderRadius: 25
}

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
      <div style={tabStyle}>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  defaultChecked={this.props.appData.getScript().getChecked()}
                  onChange={this.onChangeChecked}
                />
              </td>
              <td>
                <MonsterMakerLabel text="Script" />
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel
                  text="Script"
                  disabled={!this.props.appData.getScript().getChecked()}
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  defaultValue={this.props.appData.getScript().getScript()}
                  onChange={this.onChangeScript}
                  disabled={!this.props.appData.getScript().getChecked()}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabScript;
