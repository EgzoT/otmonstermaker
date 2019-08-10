import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerButton, MonsterMakerCode} from '../components';

class MonsterMakerTabIO extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ownNameCheckbox: this.props.appData.getIO().getOwnNameCheckbox(),
      ownName: this.props.appData.getIO().getOwnName(),

      name: this.props.appData.getIO().getName(),
      fileOwnName: ''
    }
  }

  onChangeOwnNameCheckbox = (event) => {
    this.props.appData.getIO().setOwnNameCheckbox(!this.props.appData.getIO().getOwnNameCheckbox());
    this.setState({ ownNameCheckbox: this.props.appData.getIO().getOwnNameCheckbox() });
    if (this.props.appData.getIO().getOwnNameCheckbox()) {
      this.setState({ name: this.state.ownName });
      this.props.appData.getIO().setName(this.state.ownName);
    } else {
      this.setState({ name: this.props.appData.getMonster().getName() });
      this.props.appData.getIO().setName(this.props.appData.getMonster().getName());
    }
  }

  onChangeOwnName = (event) => {
    this.props.appData.getIO().setOwnName(event.target.value);
    this.setState({ ownName: event.target.value });
    this.setState({ name: event.target.value });
    this.props.appData.getIO().setName(event.target.value);
  }

  onChangePath = (event) => {
    this.props.appData.getIO().loadFile(event.target.files[0]);
    
    let newName = event.target.files[0].name;
    if (newName.substring(newName.length - 4, newName.length) === '.xml') {
      newName = newName.substring(0, newName.length - 4);
    }
    this.setState({ fileOwnName: newName })
  }

  downloadFile = () => {
    this.props.appData.downloadFile();
  }

  uploadFile = () => {
    if (window.confirm('Are you sure you wish to load a file and lost current data?')) {
      this.props.appData.parseXMLFile();

      if (this.state.fileOwnName !== '') {
        this.props.appData.getIO().setOwnNameCheckbox(true);
        this.props.appData.getIO().setOwnName(this.state.fileOwnName);
        this.props.appData.getIO().setName(this.state.fileOwnName);
        this.setState({
          ownName: this.props.appData.getIO().getOwnName(),
          name: this.props.appData.getIO().getName(),
          ownNameCheckbox: this.props.appData.getIO().getOwnNameCheckbox()
        });
      } else {
        this.props.appData.getIO().setOwnNameCheckbox(false);
        this.setState({ name: this.props.appData.getMonster().getName() });
      }
    }
  }

  setDefaultValue = () => {
    if (window.confirm('Are you sure you wish to clear all this items?')) {
      this.props.appData.setDefaultValue();
      this.setState({
        ownNameCheckbox: this.props.appData.getIO().getOwnNameCheckbox(),
        ownName: this.props.appData.getIO().getOwnName(),
        name: this.props.appData.getMonster().getName()
      });
    }
  }

  render() {
    return (
      <div className="tabMenu">
        <ReactTooltip place="bottom" type="dark" effect="float" html="true" />
        <MonsterMakerLabel text="Export" />
        <hr/>
        <ul style={{listStyleType: 'none', margin: 0, padding: "5px 0px", overflow: 'auto'}}>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel text="File name: " />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel text={ this.state.name + ".xml" } style={{ minWidth: 100, color: 'green' }} />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.ownNameCheckbox }
              onChange={ this.onChangeOwnNameCheckbox }
              tooltip="Set if you want add own name."
            />
          </li>
          <li style={{float: 'left', margin: "0px 5px 0px 0px"}}>
            <MonsterMakerLabel
              text="Own name"
              tooltip="Set if you want add own name."
            />
          </li>
          <li style={{float: 'left', padding: 2, margin: "0px 5px 0px 0px"}}>
            <MonsterMakerInput
              type="text"
              value={ this.state.ownName }
              onChange={ this.onChangeOwnName }
              disabled={ !this.state.ownNameCheckbox }
            />
          </li>
        </ul>
        <MonsterMakerButton
          icon = "ra-load"
          onClick = { this.downloadFile }
          tooltip = "Download file"
        />
        <MonsterMakerLabel text="Import" />
        <hr/>
        <MonsterMakerInput
          type="file"
          style={{ margin: 5 }}
          onChange={ this.onChangePath }
        />
        <MonsterMakerButton
          icon = "ra-save"
          onClick = { this.uploadFile }
          tooltip = "Load file"
        />
        <MonsterMakerLabel text="Other" />
        <hr/>
        <MonsterMakerButton
          icon = "ra-recycle"
          onClick = { this.setDefaultValue }
          tooltip = "Clear all data"
        />
        <MonsterMakerCode text={ this.props.appData.getLineMonstersXML() } />
        <MonsterMakerCode text={ this.props.appData.getXML() } />
      </div>
    );
  }
}

export default MonsterMakerTabIO;
