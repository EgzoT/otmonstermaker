import React from 'react';

import { subtype } from '../consts'
import { MonsterMakerLabel, MonsterMakerInput, MonsterMakerInputSelect, MonsterMakerItemsTable, MonsterMakerButton } from '../components';

class MonsterMakerTabLoot extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: this.props.appData.getLoot().getId(),
      nameCheckbox: this.props.appData.getLoot().getNameCheckbox(),
      name: this.props.appData.getLoot().getName(),
      chance: this.props.appData.getLoot().getChance(),
      countMaxCheckbox: this.props.appData.getLoot().getCountMaxCheckbox(),
      countMax: this.props.appData.getLoot().getCountMax(),
      subtypeCheckbox: this.props.appData.getLoot().getSubtypeCheckbox(),
      subtype: this.props.appData.getLoot().getSubtype(),
      actionIdCheckbox: this.props.appData.getLoot().getActionIdCheckbox(),
      actionId: this.props.appData.getLoot().getActionId(),
      uniqueIdCheckbox: this.props.appData.getLoot().getUniqueIdCheckbox(),
      uniqueId: this.props.appData.getLoot().getUniqueId(),
      textCheckbox: this.props.appData.getLoot().getTextCheckbox(),
      text: this.props.appData.getLoot().getText(),
      commentCheckbox: this.props.appData.getLoot().getCommentCheckbox(),
      comment: this.props.appData.getLoot().getComment(),

      activeItem: this.props.activeItem
    }
  }

  onChangeId = (event) => {
    this.props.appData.getLoot().setId(event.target.value);
    this.setState({ id: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexId(this.state.activeItem, event.target.value);
    }
  }

  onChangeNameCheckbox = (event) => {
    this.props.appData.getLoot().setNameCheckbox(!this.props.appData.getLoot().getNameCheckbox());
    this.setState({ nameCheckbox: this.props.appData.getLoot().getNameCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexNameCheckbox(this.state.activeItem, this.props.appData.getLoot().getNameCheckbox());
    }
  }

  onChangeName = (event) => {
    this.props.appData.getLoot().setName(event.target.value);
    this.setState({ name: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexName(this.state.activeItem, event.target.value);
    }
  }

  onChangeChance = (event) => {
    this.props.appData.getLoot().setChance(event.target.value);
    this.setState({ chance: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexChance(this.state.activeItem, event.target.value);
    }
  }

  onChangeCountMaxCheckbox = (event) => {
    this.props.appData.getLoot().setCountMaxCheckbox(!this.props.appData.getLoot().getCountMaxCheckbox());
    this.setState({ countMaxCheckbox: this.props.appData.getLoot().getCountMaxCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexCountMaxCheckbox(this.state.activeItem, this.props.appData.getLoot().getCountMaxCheckbox());
    }
  }

  onChangeCountMax = (event) => {
    this.props.appData.getLoot().setCountMax(event.target.value);
    this.setState({ countMax: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexCountMax(this.state.activeItem, event.target.value);
    }
  }

  onChangeSubtypeCheckbox = (event) => {
    this.props.appData.getLoot().setSubtypeCheckbox(!this.props.appData.getLoot().getSubtypeCheckbox());
    this.setState({ subtypeCheckbox: this.props.appData.getLoot().getSubtypeCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexSubtypeCheckbox(this.state.activeItem, this.props.appData.getLoot().getSubtypeCheckbox());
    }
  }

  onChangeSubtype = (event) => {
    this.props.appData.getLoot().setSubtype(event.target.value);
    this.setState({ subtype: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexSubtype(this.state.activeItem, event.target.value);
    }
  }

  onChangeActionIdCheckbox = (event) => {
    this.props.appData.getLoot().setActionIdCheckbox(!this.props.appData.getLoot().getActionIdCheckbox());
    this.setState({ actionIdCheckbox: this.props.appData.getLoot().getActionIdCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexActionIdCheckbox(this.state.activeItem, this.props.appData.getLoot().getActionIdCheckbox());
    }
  }

  onChangeActionId = (event) => {
    this.props.appData.getLoot().setActionId(event.target.value);
    this.setState({ actionId: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexActionId(this.state.activeItem, event.target.value);
    }
  }

  onChangeUniqueIdCheckbox = (event) => {
    this.props.appData.getLoot().setUniqueIdCheckbox(!this.props.appData.getLoot().getUniqueIdCheckbox());
    this.setState({ uniqueIdCheckbox: this.props.appData.getLoot().getUniqueIdCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexUniqueIdCheckbox(this.state.activeItem, this.props.appData.getLoot().getUniqueIdCheckbox());
    }
  }

  onChangeUniqueId = (event) => {
    this.props.appData.getLoot().setUniqueId(event.target.value);
    this.setState({ uniqueId: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexUniqueId(this.state.activeItem, event.target.value);
    }
  }

  onChangeTextCheckbox = (event) => {
    this.props.appData.getLoot().setTextCheckbox(!this.props.appData.getLoot().getTextCheckbox());
    this.setState({ textCheckbox: this.props.appData.getLoot().getTextCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexTextCheckbox(this.state.activeItem, this.props.appData.getLoot().getTextCheckbox());
    }
  }

  onChangeText = (event) => {
    this.props.appData.getLoot().setText(event.target.value);
    this.setState({ text: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexText(this.state.activeItem, event.target.value);
    }
  }

  onChangeCommentCheckbox = (event) => {
    this.props.appData.getLoot().setCommentCheckbox(!this.props.appData.getLoot().getCommentCheckbox());
    this.setState({ commentCheckbox: this.props.appData.getLoot().getCommentCheckbox() });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexCommentCheckbox(this.state.activeItem, this.props.appData.getLoot().getCommentCheckbox());
    }
  }

  onChangeComment = (event) => {
    this.props.appData.getLoot().setComment(event.target.value);
    this.setState({ comment: event.target.value });
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().setIndexComment(this.state.activeItem, event.target.value);
    }
  }

  //Buttons action

  clickAddButton = () => {
    this.props.appData.getLoot().addToLoot();
    this.forceUpdate();
  }

  clickDeleteButton = () => {
    if (this.state.activeItem !== null) {
      this.props.appData.getLoot().deleteFromLoot(this.state.activeItem);
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  //Refresh items
  refreshItems = () => {
    this.setState({
      id: this.props.appData.getLoot().getId(),
      nameCheckbox: this.props.appData.getLoot().getNameCheckbox(),
      name: this.props.appData.getLoot().getName(),
      chance: this.props.appData.getLoot().getChance(),
      countMaxCheckbox: this.props.appData.getLoot().getCountMaxCheckbox(),
      countMax: this.props.appData.getLoot().getCountMax(),
      subtypeCheckbox: this.props.appData.getLoot().getSubtypeCheckbox(),
      subtype: this.props.appData.getLoot().getSubtype(),
      actionIdCheckbox: this.props.appData.getLoot().getActionIdCheckbox(),
      actionId: this.props.appData.getLoot().getActionId(),
      uniqueIdCheckbox: this.props.appData.getLoot().getUniqueIdCheckbox(),
      uniqueId: this.props.appData.getLoot().getUniqueId(),
      textCheckbox: this.props.appData.getLoot().getTextCheckbox(),
      text: this.props.appData.getLoot().getText(),
      commentCheckbox: this.props.appData.getLoot().getCommentCheckbox(),
      comment: this.props.appData.getLoot().getComment(),
    });
  }

  //Active item
  setActiveItem = (event) => {
    if (this.state.activeItem !== event.target.id) {
      this.setState({ activeItem: event.target.id });
      this.props.appData.getLoot().showLoot(event.target.id);
      this.refreshItems();
      this.props.changeActiveItem(event.target.id);
    } else {
      this.setState({ activeItem: null });
      this.props.changeActiveItem(null);
    }
  }

  render() {
    return (
      <div class="tabMenu">
        <MonsterMakerItemsTable
          data = { this.props.appData.getLoot().getAllXMLLoot() }
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
        <table>
          <tbody>
            <tr>
              <td>
                <MonsterMakerLabel text="Id" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.id }
                  min="1"
                  max="100000"
                  onChange={ this.onChangeId }
                  disabled={ this.state.nameCheckbox }
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="checkbox"
                  checked={ this.state.nameCheckbox }
                  onChange={ this.onChangeNameCheckbox }
                />
              </td>
              <td>
                <MonsterMakerLabel
                  text="Name"
                />
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  value={ this.state.name }
                  onChange={ this.onChangeName }
                  disabled={ !this.state.nameCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <MonsterMakerLabel text="Chance" />
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.chance }
                  min="1"
                  onChange={ this.onChangeChance }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.countMaxCheckbox }
                          onChange={ this.onChangeCountMaxCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Count Max" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.countMax }
                  min="1"
                  max="10000000"
                  onChange={ this.onChangeCountMax }
                  disabled={ !this.state.countMaxCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.subtypeCheckbox }
                          onChange={ this.onChangeSubtypeCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Subtype" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInputSelect
                  selectItems={ subtype }
                  value={ this.state.subtype }
                  onChange={ this.onChangeSubtype }
                  disabled={ !this.state.subtypeCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.actionIdCheckbox }
                          onChange={ this.onChangeActionIdCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Action Id" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.actionId }
                  min="0"
                  max="10000000"
                  onChange={ this.onChangeActionId }
                  disabled={ !this.state.actionIdCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.uniqueIdCheckbox }
                          onChange={ this.onChangeUniqueIdCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Unique Id" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInput
                  type="number"
                  value={ this.state.uniqueId }
                  min="0"
                  max="10000000"
                  onChange={ this.onChangeUniqueId }
                  disabled={ !this.state.uniqueIdCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.textCheckbox }
                          onChange={ this.onChangeTextCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  value={ this.state.text }
                  onChange={ this.onChangeText }
                  disabled={ !this.state.textCheckbox }
                />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <MonsterMakerInput
                          type="checkbox"
                          checked={ this.state.commentCheckbox }
                          onChange={ this.onChangeCommentCheckbox }
                        />
                      </td>
                      <td>
                        <MonsterMakerLabel text="Comment" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <MonsterMakerInput
                  type="text"
                  value={ this.state.comment }
                  onChange={ this.onChangeComment }
                  disabled={ !this.state.commentCheckbox }
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonsterMakerTabLoot;
