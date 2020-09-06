import React from 'react';
import ReactTooltip from 'react-tooltip';

import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerCode} from '../components';
import { FlexibleGridContainer, FlexibleGrid } from '../components/FlexibleGrid';
import { CircleAnimationButtonDark } from '../components/CircleAnimationButton-react/CircleAnimationButtons';

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
        <ReactTooltip place="bottom" type="dark" effect="float" html={ true } />

        <MonsterMakerLabel text="Export" />
        <hr/>

        <FlexibleGridContainer>
          <FlexibleGrid>
            <MonsterMakerLabel
              text="File name: "
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerLabel
              text={ this.state.name + ".xml" }
              style={{ minWidth: 100, color: 'green', marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
          <FlexibleGrid>
            <MonsterMakerInput
              type="checkbox"
              checked={ this.state.ownNameCheckbox }
              onChange={ this.onChangeOwnNameCheckbox }
              tooltip="Set if you want add own name."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerLabel
              text="Own name"
              tooltip="Set if you want add own name."
              style={{ marginLeft: 3, marginRight: 3 }}
            />
            <MonsterMakerInput
              type="text"
              value={ this.state.ownName }
              onChange={ this.onChangeOwnName }
              disabled={ !this.state.ownNameCheckbox }
              style={{ marginLeft: 3, marginRight: 3 }}
            />
          </FlexibleGrid>
        </FlexibleGridContainer>

        <CircleAnimationButtonDark
            icon={ <i className={ "ra ra-load" } style={{ fontSize: 20, margin: 'auto' }} ></i> }
            text={ "Download file" }
            onClick = { this.downloadFile }
            style={{ margin: 5 }}
            width={ 180 }
          />
        <MonsterMakerLabel text="Import" />

        <hr/>

        <MonsterMakerInput
          type="file"
          style={{ margin: 5 }}
          onChange={ this.onChangePath }
        />
        <CircleAnimationButtonDark
            icon={ <i className={ "ra ra-save" } style={{ fontSize: 20, margin: 'auto' }} ></i> }
            text={ "Load file" }
            onClick = { this.uploadFile }
            style={{ margin: 5 }}
            width={ 180 }
          />
        <MonsterMakerLabel text="Other" />

        <hr/>

        <CircleAnimationButtonDark
            icon={ <i className={ "ra ra-recycle" } style={{ fontSize: 20, margin: 'auto' }} ></i> }
            text={ "Clear all data" }
            onClick = { this.setDefaultValue }
            style={{ margin: 5 }}
            width={ 180 }
          />

        <MonsterMakerCode text={ this.props.appData.getLineMonstersXML() } />
        <MonsterMakerCode text={ this.props.appData.getXML() } />
      </div>
    );
  }
}

export default MonsterMakerTabIO;
