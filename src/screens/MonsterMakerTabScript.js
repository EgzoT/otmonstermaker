import React from 'react';
import { Tooltip } from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput} from '../components';
import { FlexibleGridContainer } from '../components/FlexibleGrid';

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
        <Tooltip place="bottom" type="dark" effect="float" html={ true } />

        <FlexibleGridContainer>
          <MonsterMakerInput
            type="checkbox"
            defaultChecked={ this.props.appData.getScript().getChecked() }
            onChange={ this.onChangeChecked }
            tooltip="Check on to add script."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerLabel
            text="Script"
            tooltip="Check on to add script."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
        <FlexibleGridContainer>
          <MonsterMakerLabel
            text="Script"
            disabled={ !this.props.appData.getScript().getChecked() }
            tooltip="There you can use creaturescripts made for certain monsters.<br>You put this tag between flags and attacks."
            style={{ marginLeft: 3, marginRight: 3 }}
          />
          <MonsterMakerInput
            type="text"
            defaultValue={ this.props.appData.getScript().getScript() }
            onChange={ this.onChangeScript }
            disabled={ !this.props.appData.getScript().getChecked() }
            style={{ marginLeft: 3, marginRight: 3 }}
          />
        </FlexibleGridContainer>
      </div>
    );
  }
}

export default MonsterMakerTabScript;
