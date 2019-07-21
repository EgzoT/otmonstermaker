class LootData {
    constructor() {
        this.allLoot = [];

        this.id = 1;
        this.nameCheckbox = false;
        this.name = '';
        this.chance = 1;
        this.countMaxCheckbox = false;
        this.countMax = 1;
        this.subtypeCheckbox = false;
        this.subtype = 'water';
        this.actionIdCheckbox = false;
        this.actionId = 1;
        this.uniqueIdCheckbox = false;
        this.uniqueId = 1;
        this.textCheckbox = false;
        this.text = '';
        this.commentCheckbox = false;
        this.comment = '';

        this.dataIndex = "LOOT_";
    }

    setId = (value) => {
        this.id = value;
        this.setValueToLocalStorage('id', value);
    }

    setIndexId = (index, value) => {
        this.allLoot[index].id = value;
        this.setTableToLocalStorage();
    }

    getId = () => {
        return this.id;
    }

    setNameCheckbox = (value) => {
        this.nameCheckbox = value;
        this.setValueToLocalStorage('nameCheckbox', value);
    }

    setIndexNameCheckbox = (index, value) => {
        this.allLoot[index].nameCheckbox = value;
        this.setTableToLocalStorage();
    }

    getNameCheckbox = () => {
        return this.nameCheckbox;
    }

    setName = (value) => {
        this.name = value;
        this.setValueToLocalStorage('name', value);
    }

    setIndexName = (index, value) => {
        this.allLoot[index].name = value;
        this.setTableToLocalStorage();
    }

    getName = () => {
        return this.name;
    }

    setChance = (value) => {
        this.chance = value;
        this.setValueToLocalStorage('chance', value);
    }

    setIndexChance = (index, value) => {
        this.allLoot[index].chance = value;
        this.setTableToLocalStorage();
    }

    getChance = () => {
        return this.chance;
    }

    setCountMaxCheckbox = (value) => {
        this.countMaxCheckbox = value;
        this.setValueToLocalStorage('countMaxCheckbox', value);
    }

    setIndexCountMaxCheckbox = (index, value) => {
        this.allLoot[index].countMaxCheckbox = value;
        this.setTableToLocalStorage();
    }

    getCountMaxCheckbox = () => {
        return this.countMaxCheckbox;
    }

    setCountMax = (value) => {
        this.countMax = value;
        this.setValueToLocalStorage('countMax', value);
    }

    setIndexCountMax = (index, value) => {
        this.allLoot[index].countMax = value;
        this.setTableToLocalStorage();
    }

    getCountMax = () => {
        return this.countMax;
    }

    setSubtypeCheckbox = (value) => {
        this.subtypeCheckbox = value;
        this.setValueToLocalStorage('subtypeCheckbox', value);
    }

    setIndexSubtypeCheckbox = (index, value) => {
        this.allLoot[index].subtypeCheckbox = value;
        this.setTableToLocalStorage();
    }

    getSubtypeCheckbox = () => {
        return this.subtypeCheckbox;
    }

    setSubtype = (value) => {
        this.subtype = value;
        this.setValueToLocalStorage('subtype', value);
    }

    setIndexSubtype = (index, value) => {
        this.allLoot[index].subtype = value;
        this.setTableToLocalStorage();
    }

    getSubtype = () => {
        return this.subtype;
    }

    setActionIdCheckbox = (value) => {
        this.actionIdCheckbox = value;
        this.setValueToLocalStorage('actionIdCheckbox', value);
    }

    setIndexActionIdCheckbox = (index, value) => {
        this.allLoot[index].actionIdCheckbox = value;
        this.setTableToLocalStorage();
    }

    getActionIdCheckbox = () => {
        return this.actionIdCheckbox;
    }

    setActionId = (value) => {
        this.actionId = value;
        this.setValueToLocalStorage('actionId', value);
    }

    setIndexActionId = (index, value) => {
        this.allLoot[index].actionId = value;
        this.setTableToLocalStorage();
    }

    getActionId = () => {
        return this.actionId;
    }

    setUniqueIdCheckbox = (value) => {
        this.uniqueIdCheckbox = value;
        this.setValueToLocalStorage('uniqueIdCheckbox', value);
    }

    setIndexUniqueIdCheckbox = (index, value) => {
        this.allLoot[index].uniqueIdCheckbox = value;
        this.setTableToLocalStorage();
    }

    getUniqueIdCheckbox = () => {
        return this.uniqueIdCheckbox;
    }

    setUniqueId = (value) => {
        this.uniqueId = value;
        this.setValueToLocalStorage('uniqueId', value);
    }

    setIndexUniqueId = (index, value) => {
        this.allLoot[index].uniqueId = value;
        this.setTableToLocalStorage();
    }

    getUniqueId = () => {
        return this.uniqueId;
    }

    setTextCheckbox = (value) => {
        this.textCheckbox = value;
        this.setValueToLocalStorage('textCheckbox', value);
    }

    setIndexTextCheckbox = (index, value) => {
        this.allLoot[index].textCheckbox = value;
        this.setTableToLocalStorage();
    }

    getTextCheckbox = () => {
        return this.textCheckbox;
    }

    setText = (value) => {
        this.text = value;
        this.setValueToLocalStorage('text', value);
    }

    setIndexText = (index, value) => {
        this.allLoot[index].text = value;
        this.setTableToLocalStorage();
    }

    getText = () => {
        return this.text;
    }

    setCommentCheckbox = (value) => {
        this.commentCheckbox = value;
        this.setValueToLocalStorage('commentCheckbox', value);
    }

    setIndexCommentCheckbox = (index, value) => {
        this.allLoot[index].commentCheckbox = value;
        this.setTableToLocalStorage();
    }

    getCommentCheckbox = () => {
        return this.commentCheckbox;
    }

    setComment = (value) => {
        this.comment = value;
        this.setValueToLocalStorage('comment', value);
    }

    setIndexComment = (index, value) => {
        this.allLoot[index].comment = value;
        this.setTableToLocalStorage();
    }

    getComment = () => {
        return this.comment;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    addToLoot = () => {
        var allItems = {
            id: this.id,
            nameCheckbox: this.nameCheckbox,
            name: this.name,
            chance: this.chance,
            countMaxCheckbox: this.countMaxCheckbox,
            countMax: this.countMax,
            subtypeCheckbox: this.subtypeCheckbox,
            subtype: this.subtype,
            actionIdCheckbox: this.actionIdCheckbox,
            actionId: this.actionId,
            uniqueIdCheckbox: this.uniqueIdCheckbox,
            uniqueId: this.uniqueId,
            textCheckbox: this.textCheckbox,
            text: this.text,
            commentCheckbox: this.commentCheckbox,
            comment: this.comment
        }

        this.allLoot.push(allItems);
        this.setTableToLocalStorage();
    }

    deleteFromLoot = (index) => {
        this.allLoot.splice(index, 1);
        this.setTableToLocalStorage();
    }

    getFromLoot = (index) => {
        return this.allLoot[index];
    }

    showLoot = (index) => {
        this.id = this.allLoot[index].id;
        this.nameCheckbox = this.allLoot[index].nameCheckbox;
        this.name = this.allLoot[index].name;
        this.chance = this.allLoot[index].chance;
        this.countMaxCheckbox = this.allLoot[index].countMaxCheckbox;
        this.countMax = this.allLoot[index].countMax;
        this.subtypeCheckbox = this.allLoot[index].subtypeCheckbox;
        this.subtype = this.allLoot[index].subtype;
        this.actionIdCheckbox = this.allLoot[index].actionIdCheckbox;
        this.actionId = this.allLoot[index].actionId;
        this.uniqueIdCheckbox = this.allLoot[index].uniqueIdCheckbox;
        this.uniqueId = this.allLoot[index].uniqueId;
        this.textCheckbox = this.allLoot[index].textCheckbox;
        this.text = this.allLoot[index].text;
        this.commentCheckbox = this.allLoot[index].commentCheckbox;
        this.comment = this.allLoot[index].comment;
    }

    updateLoot = (index) => {
        this.allLoot[index] = {
            id: this.id,
            nameCheckbox: this.nameCheckbox,
            name: this.name,
            chance: this.chance,
            countMaxCheckbox: this.countMaxCheckbox,
            countMax: this.countMax,
            subtypeCheckbox: this.subtypeCheckbox,
            subtype: this.subtype,
            actionIdCheckbox: this.actionIdCheckbox,
            actionId: this.actionId,
            uniqueIdCheckbox: this.uniqueIdCheckbox,
            uniqueId: this.uniqueId,
            textCheckbox: this.textCheckbox,
            text: this.text,
            commentCheckbox: this.commentCheckbox,
            comment: this.comment
        }
    }

    getLootFromData = (index) => {
        var lootTable = {}

        if (!this.allLoot[index].nameCheckbox) {
            lootTable.id = this.allLoot[index].id;
        } else {
            lootTable.name = this.allLoot[index].name;
        }
        lootTable.chance = this.allLoot[index].chance;
        if (this.allLoot[index].countMaxCheckbox) {
            lootTable.countmax = this.allLoot[index].countMax;
        }
        if (this.allLoot[index].subtypeCheckbox) {
            lootTable.subtype = this.allLoot[index].subtype;
        }
        if (this.allLoot[index].actionIdCheckbox) {
            lootTable.actionid = this.allLoot[index].actionId;
        }
        if (this.allLoot[index].uniqueIdCheckbox) {
            lootTable.uniqueid = this.allLoot[index].uniqueId;
        }
        if (this.allLoot[index].textCheckbox) {
            lootTable.text = this.allLoot[index].text;
        }
        if (this.allLoot[index].commentCheckbox) {
            lootTable.comment = this.allLoot[index].comment;
        }

        return lootTable
    }

    getLootSubtype = () => {
        var lootSubtype = {
            'water': 1,
            'blood': 2,
            'beer': 3,
            'slime': 4,
            'lemonade': 5,
            'milk': 6,
            'manafluid': 7,
            'lifefluid': 10,
            'oil': 11,
            'urine': 13,
            'coconut milk': 14,
            'wine': 15,
            'mud': 19,
            'fruit juice': 21,
            'lava': 26,
            'rum': 27,
            'swamp': 28,
            'tea': 35,
            'mead': 43
        };

        return lootSubtype;
    }

    getLootSubtypeId = () => {
        var lootSubtypeId = {
            '1': 'water',
            '2': 'blood',
            '3': 'beer',
            '4': 'slime',
            '5': 'lemonade',
            '6': 'milk',
            '7': 'manafluid',
            '10': 'lifefluid',
            '11': 'oil',
            '13': 'urine',
            '14': 'coconut milk',
            '15': 'wine',
            '19': 'mud',
            '21': 'fruit juice',
            '26': 'lava',
            '27': 'rum',
            '28': 'swamp',
            '35': 'tea',
            '43': 'mead'
        };

        return lootSubtypeId;
    }

    translateLootSubtype = (subType) => {
        var lootSubtype = this.getLootSubtype();

        if (lootSubtype.subType != null) {
            return lootSubtype[subType];
        } else {
            return '';
        }
    }

    translateLootSubtypeIdToText = (subType) => {
        var lootSubtypeId = this.getLootSubtypeId();
        
        if (lootSubtypeId.subType != null) {
            return lootSubtypeId[subType];
        } else {
            return '';
        }
    }

    generateXMLLoot = (index, indentation = '\t', firstIndentation = '') => {
        var lootData = this.getLootFromData(index);

        var loot = '';

        if (lootData.id != null) {
            loot = loot + firstIndentation + '<item id="' + lootData.id + '"';
        } else if (lootData.name != null) {
            loot = loot + firstIndentation + '<item name="' + lootData.name + '"';
        }
        if (lootData.countmax != null) {
            loot = loot + ' countmax="' + lootData.countmax + '"';
        }
        if (lootData.subtype != null) {
            loot = loot + ' subtype="' + this.translateLootSubtype(lootData.subtype) + '"';
        }
        if (lootData.actionid != null) {
            loot = loot + ' actionId="' + lootData.actionId + '"';
        }
        if (lootData.uniqueid != null) {
            loot = loot + ' uniqueId="' + lootData.uniqueId + '"';
        }
        if (lootData.text != null) {
            loot = loot + ' text="' + lootData.text + '"';
        }
        loot = loot + ' chance="' + lootData.chance + '" />';
        if (lootData.comment != null) {
            loot = loot + ' <!--' + lootData.comment + '-->';
        }

        return loot;
    }

    getAllXMLLoot = (indentation = '\t', firstIndentation = '') => {
        var returnLoot = [];

        this.allLoot.forEach((variable, index) => {
            returnLoot.push(this.generateXMLLoot(index, indentation, firstIndentation));
        });

        return returnLoot;
    }

    //Generate XML

    getXML = (indentation = '\t', firstIndentation = '') => {
        var fileXMLString = '';

        var allXMLloot = this.getAllXMLLoot(indentation, firstIndentation);

        if (allXMLloot.length > 0) {
            fileXMLString += '\n' + indentation;
            fileXMLString += '<loot>';
            allXMLloot.forEach((variable, index) => {
                fileXMLString += '\n' + variable;
            });
            fileXMLString += '\n' + indentation + '</loot>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.allLoot = [];
        this.setTableToLocalStorage();

        this.setId(1);
        this.setNameCheckbox(false);
        this.setName('');
        this.setChance(1);
        this.setCountMaxCheckbox(false);
        this.setCountMax(1);
        this.setSubtypeCheckbox(false);
        this.setSubtype('water');
        this.setActionIdCheckbox(false);
        this.setActionId(1);
        this.setUniqueIdCheckbox(false);
        this.setUniqueId(1);
        this.setTextCheckbox(false);
        this.setText('');
        this.setCommentCheckbox(false);
        this.setComment('');
    }

    setDefaultTableValue = () => {
        this.setId(1);
        this.setNameCheckbox(false);
        this.setName('');
        this.setChance(1);
        this.setCountMaxCheckbox(false);
        this.setCountMax(1);
        this.setSubtypeCheckbox(false);
        this.setSubtype('water');
        this.setActionIdCheckbox(false);
        this.setActionId(1);
        this.setUniqueIdCheckbox(false);
        this.setUniqueId(1);
        this.setTextCheckbox(false);
        this.setText('');
        this.setCommentCheckbox(false);
        this.setComment('');
    }

    loadXMLVariableItem = (variableName, variableValue) => {
        if (variableName === 'id') {
            this.setNameCheckbox(false);
            this.setId(variableValue);
        } else if (variableName === 'name') {
            this.setNameCheckbox(true);
            this.setName(variableValue);
        } else if (variableName === 'countmax') {
            this.setCountMaxCheckbox(true);
            this.setCountMax(variableValue);
        } else if (variableName === 'subtype') {
            this.setSubtypeCheckbox(true)
            this.setSubtype(this.translateLootSubtypeIdToText(variableValue));
        } else if (variableName === 'actionId') {
            this.setActionIdCheckbox(true);
            this.setActionId(variableValue);
        } else if (variableName === 'uniqueId') {
            this.setUniqueIdCheckbox(true);
            this.setUniqueId(variableValue);
        } else if (variableName === 'text') {
            this.setTextCheckbox(true);
            this.setText(variableValue);
        } else if (variableName === 'chance') {
            this.setChance(variableValue);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    setTableToLocalStorage = () => {
        localStorage.setItem(this.getDataIndex() + "all", JSON.stringify(this.allLoot));
    }

    getTableFromLocalStorage = () => {
        if (localStorage.getItem(this.getDataIndex() + "all") !== null) {
            return JSON.parse(localStorage.getItem(this.getDataIndex() + "all"));
        } else {
            return [];
        }
    }

    loadValuesFromLocalStorage = () => {
        this.allLoot = this.getTableFromLocalStorage();

        if (this.getValueFromLocalStorage('id') !== null) {
            this.setId(this.getValueFromLocalStorage('id'));
        }
        if (this.getValueFromLocalStorage('nameCheckbox') !== null) {
            if (this.getValueFromLocalStorage('nameCheckbox') === 'true') {
                this.setNameCheckbox(true);
            } else if (this.getValueFromLocalStorage('nameCheckbox') === 'false') {
                this.setNameCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('name') !== null) {
            this.setName(this.getValueFromLocalStorage('name'));
        }
        if (this.getValueFromLocalStorage('chance') !== null) {
            this.setChance(this.getValueFromLocalStorage('chance'));
        }
        if (this.getValueFromLocalStorage('countMaxCheckbox') !== null) {
            if (this.getValueFromLocalStorage('countMaxCheckbox') === 'true') {
                this.setCountMaxCheckbox(true);
            } else if (this.getValueFromLocalStorage('countMaxCheckbox') === 'false') {
                this.setCountMaxCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('countMax') !== null) {
            this.setCountMax(this.getValueFromLocalStorage('countMax'));
        }
        if (this.getValueFromLocalStorage('subtypeCheckbox') !== null) {
            if (this.getValueFromLocalStorage('subtypeCheckbox') === 'true') {
                this.setSubtypeCheckbox(true);
            } else if (this.getValueFromLocalStorage('subtypeCheckbox') === 'false') {
                this.setSubtypeCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('subtype') !== null) {
            this.setSubtype(this.getValueFromLocalStorage('subtype'));
        }
        if (this.getValueFromLocalStorage('actionIdCheckbox') !== null) {
            if (this.getValueFromLocalStorage('actionIdCheckbox') === 'true') {
                this.setActionIdCheckbox(true);
            } else if (this.getValueFromLocalStorage('actionIdCheckbox') === 'false') {
                this.setActionIdCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('actionId') !== null) {
            this.setActionId(this.getValueFromLocalStorage('actionId'));
        }
        if (this.getValueFromLocalStorage('uniqueIdCheckbox') !== null) {
            if (this.getValueFromLocalStorage('uniqueIdCheckbox') === 'true') {
                this.setUniqueIdCheckbox(true);
            } else if (this.getValueFromLocalStorage('uniqueIdCheckbox') === 'false') {
                this.setUniqueIdCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('uniqueId') !== null) {
            this.setUniqueId(this.getValueFromLocalStorage('uniqueId'));
        }
        if (this.getValueFromLocalStorage('textCheckbox') !== null) {
            if (this.getValueFromLocalStorage('textCheckbox') === 'true') {
                this.setTextCheckbox(true);
            } else if (this.getValueFromLocalStorage('textCheckbox') === 'false') {
                this.setTextCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('text') !== null) {
            this.setText(this.getValueFromLocalStorage('text'));
        }
        if (this.getValueFromLocalStorage('commentCheckbox') !== null) {
            if (this.getValueFromLocalStorage('commentCheckbox') === 'true') {
                this.setCommentCheckbox(true);
            } else if (this.getValueFromLocalStorage('commentCheckbox') === 'false') {
                this.setCommentCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('comment') !== null) {
            this.setComment(this.getValueFromLocalStorage('comment'));
        }
    }
}

export default LootData;
