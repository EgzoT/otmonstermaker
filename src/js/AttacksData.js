class AttacksData {
    constructor() {
        this.allAttacks = [];

        this.type = "melee";
        this.elementalType = "physical";
        this.conditionsType = "physicalcondition";
        this.fieldsType = "firefield";
        this.runesType = "sudden death";
        this.spellsType = "great energy beam";
        this.otherType = "";
        this.min = -5;
        this.max = -10;
        this.skillCheckbox = false;
        this.skill = 1;
        this.attack = 1;
        this.interval = 1000;
        this.chance = 1;
        this.lengthCheckbox = false;
        this.length = 0;
        this.spreadCheckbox = false;
        this.spread = 1;
        this.radiusCheckbox = false;
        this.radius = 1;
        this.poisonCheckbox = false;
        this.poison = 1;
        this.target = false;
        this.range = 1;
        this.areaeffectCheckbox = false;
        this.areaeffect = "redspark";
        this.shooteffectCheckbox = false;
        this.shooteffect = "spear";

        this.dataIndex = "ATTACKS_";

        this.attackTypeArray = ['melee', 'elemental', 'conditions', 'fields', 'runes', 'spells', 'other'];
        this.elementalTypeArray = ['physical', 'energy', 'earth', 'fire', 'lifedrain', 'manadrain', 'healing', 'drown', 'ice', 'holy', 'death'];
        this.conditionsTypeArray = ['physicalcondition', 'firecondition', 'energycondition', 'earthcondition', 'icecondition', 'deathcondition', 'holycondition', 'drowncondition'];
        this.fieldsTypeArray = ['firefield', 'poisonfield', 'energyfield'];
        this.runesTypeArray = ['sudden death'];
        this.spellsTypeArray = ['great energy beam'];
    }

    setType = (value) => {
        this.type = value;
        this.setValueToLocalStorage('type', value);
    }

    setIndexType = (index, value) => {
        this.allAttacks[index].type = value;
        this.setTableToLocalStorage();
    }

    getType = () => {
        return this.type;
    }

    setElementalType = (value) => {
        this.elementalType = value;
        this.setValueToLocalStorage('elementalType', value);
    }

    setIndexElementalType = (index, value) => {
        this.allAttacks[index].elementalType = value;
        this.setTableToLocalStorage();
    }

    getElementalType = () => {
        return this.elementalType;
    }

    setConditionsType = (value) => {
        this.conditionsType = value;
        this.setValueToLocalStorage('conditionsType', value);
    }

    setIndexConditionsType = (index, value) => {
        this.allAttacks[index].conditionsType = value;
        this.setTableToLocalStorage();
    }

    getConditionsType = () => {
        return this.conditionsType;
    }

    setFieldsType = (value) => {
        this.fieldsType = value;
        this.setValueToLocalStorage('fieldsType', value);
    }

    setIndexFieldsType = (index, value) => {
        this.allAttacks[index].fieldsType = value;
        this.setTableToLocalStorage();
    }

    getFieldsType = () => {
        return this.fieldsType;
    }

    setRunesType = (value) => {
        this.runesType = value;
        this.setValueToLocalStorage('runesType', value);
    }

    setIndexRunesType = (index, value) => {
        this.allAttacks[index].runesType = value;
        this.setTableToLocalStorage();
    }

    getRunesType = () => {
        return this.runesType;
    }

    setSpellsType = (value) => {
        this.spellsType = value;
        this.setValueToLocalStorage('spellsType', value);
    }

    setIndexSpellsType = (index, value) => {
        this.allAttacks[index].spellsType = value;
        this.setTableToLocalStorage();
    }

    getSpellsType = () => {
        return this.spellsType;
    }

    setOtherType = (value) => {
        this.otherType = value;
        this.setValueToLocalStorage('otherType', value);
    }

    setIndexOtherType = (index, value) => {
        this.allAttacks[index].otherType = value;
        this.setTableToLocalStorage();
    }

    getOtherType = () => {
        return this.otherType;
    }

    setMin = (value) => {
        this.min = value;
        this.setValueToLocalStorage('min', value);
    }

    setIndexMin = (index, value) => {
        this.allAttacks[index].min = value;
        this.setTableToLocalStorage();
    }

    getMin = () => {
        return this.min;
    }

    setMax = (value) => {
        this.max = value;
        this.setValueToLocalStorage('max', value);
    }

    setIndexMax = (index, value) => {
        this.allAttacks[index].max = value;
        this.setTableToLocalStorage();
    }

    getMax = () => {
        return this.max;
    }

    setSkillCheckbox = (value) => {
        this.skillCheckbox = value;
        this.setValueToLocalStorage('skillCheckbox', value);
    }

    setIndexSkillCheckbox = (index, value) => {
        this.allAttacks[index].skillCheckbox = value;
        this.setTableToLocalStorage();
    }

    getSkillCheckbox = () => {
        return this.skillCheckbox;
    }

    setSkill = (value) => {
        this.skill = value;
        this.setValueToLocalStorage('skill', value);
    }

    setIndexSkill = (index, value) => {
        this.allAttacks[index].skill = value;
        this.setTableToLocalStorage();
    }

    getSkill = () => {
        return this.skill;
    }

    setAttack = (value) => {
        this.attack = value;
        this.setValueToLocalStorage('attack', value);
    }

    setIndexAttack = (index, value) => {
        this.allAttacks[index].attack = value;
        this.setTableToLocalStorage();
    }

    getAttack = () => {
        return this.attack;
    }

    setInterval = (value) => {
        this.interval = value;
        this.setValueToLocalStorage('interval', value);
    }

    setIndexInterval = (index, value) => {
        this.allAttacks[index].interval = value;
        this.setTableToLocalStorage();
    }

    getInterval = () => {
        return this.interval;
    }

    setChance = (value) => {
        this.chance = value;
        this.setValueToLocalStorage('chance', value);
    }

    setIndexChance = (index, value) => {
        this.allAttacks[index].chance = value;
        this.setTableToLocalStorage();
    }

    getChance = () => {
        return this.chance;
    }

    setLengthCheckbox = (value) => {
        this.lengthCheckbox = value;
        this.setValueToLocalStorage('lengthCheckbox', value);
    }

    setIndexLengthCheckbox = (index, value) => {
        this.allAttacks[index].lengthCheckbox = value;
        this.setTableToLocalStorage();
    }

    getLengthCheckbox = () => {
        return this.lengthCheckbox;
    }

    setLength = (value) => {
        this.length = value;
        this.setValueToLocalStorage('length', value);
    }

    setIndexLength = (index, value) => {
        this.allAttacks[index].length = value;
        this.setTableToLocalStorage();
    }

    getLength = () => {
        return this.length;
    }

    setSpreadCheckbox = (value) => {
        this.spreadCheckbox = value;
        this.setValueToLocalStorage('spreadCheckbox', value);
    }

    setIndexSpreadCheckbox = (index, value) => {
        this.allAttacks[index].spreadCheckbox = value;
        this.setTableToLocalStorage();
    }

    getSpreadCheckbox = () => {
        return this.spreadCheckbox;
    }

    setSpread = (value) => {
        this.spread = value;
        this.setValueToLocalStorage('spread', value);
    }

    setIndexSpread = (index, value) => {
        this.allAttacks[index].spread = value;
        this.setTableToLocalStorage();
    }

    getSpread = () => {
        return this.spread;
    }

    setRadiusCheckbox = (value) => {
        this.radiusCheckbox = value;
        this.setValueToLocalStorage('radiusCheckbox', value);
    }

    setIndexRadiusCheckbox = (index, value) => {
        this.allAttacks[index].radiusCheckbox = value;
        this.setTableToLocalStorage();
    }

    getRadiusCheckbox = () => {
        return this.radiusCheckbox;
    }

    setRadius = (value) => {
        this.radius = value;
        this.setValueToLocalStorage('radius', value);
    }

    setIndexRadius = (index, value) => {
        this.allAttacks[index].radius = value;
        this.setTableToLocalStorage();
    }

    getRadius = () => {
        return this.radius;
    }

    setPoisonCheckbox = (value) => {
        this.poisonCheckbox = value;
        this.setValueToLocalStorage('poisonCheckbox', value);
    }

    setIndexPoisonCheckbox = (index, value) => {
        this.allAttacks[index].poisonCheckbox = value;
        this.setTableToLocalStorage();
    }

    getPoisonCheckbox = () => {
        return this.poisonCheckbox;
    }

    setPoison = (value) => {
        this.poison = value;
        this.setValueToLocalStorage('poison', value);
    }

    setIndexPoison = (index, value) => {
        this.allAttacks[index].poison = value;
        this.setTableToLocalStorage();
    }

    getPoison = () => {
        return this.poison;
    }

    setTarget = (value) => {
        this.target = value;
        this.setValueToLocalStorage('target', value);
    }

    setIndexTarget = (index, value) => {
        this.allAttacks[index].target = value;
        this.setTableToLocalStorage();
    }

    getTarget = () => {
        return this.target;
    }

    setRange = (value) => {
        this.range = value;
        this.setValueToLocalStorage('range', value);
    }

    setIndexRange = (index, value) => {
        this.allAttacks[index].range = value;
        this.setTableToLocalStorage();
    }

    getRange = () => {
        return this.range;
    }

    setAreaeffectCheckbox = (value) => {
        this.areaeffectCheckbox = value;
        this.setValueToLocalStorage('areaeffectCheckbox', value);
    }

    setIndexAreaeffectCheckbox = (index, value) => {
        this.allAttacks[index].areaeffectCheckbox = value;
        this.setTableToLocalStorage();
    }

    getAreaeffectCheckbox = () => {
        return this.areaeffectCheckbox;
    }

    setAreaeffect = (value) => {
        this.areaeffect = value;
        this.setValueToLocalStorage('areaeffect', value);
    }

    setIndexAreaeffect = (index, value) => {
        this.allAttacks[index].areaeffect = value;
        this.setTableToLocalStorage();
    }

    getAreaeffect = () => {
        return this.areaeffect;
    }

    setShooteffectCheckbox = (value) => {
        this.shooteffectCheckbox = value;
        this.setValueToLocalStorage('shooteffectCheckbox', value);
    }

    setIndexShooteffectCheckbox = (index, value) => {
        this.allAttacks[index].shooteffectCheckbox = value;
        this.setTableToLocalStorage();
    }

    getShooteffectCheckbox = () => {
        return this.shooteffectCheckbox;
    }

    setShooteffect = (value) => {
        this.shooteffect = value;
        this.setValueToLocalStorage('shooteffect', value);
    }

    setIndexShooteffect = (index, value) => {
        this.allAttacks[index].shooteffect = value;
        this.setTableToLocalStorage();
    }

    getShooteffect = () => {
        return this.shooteffect;
    }

    //Arrays

    getAttackTypeArray = () => {
        return this.attackTypeArray;
    }

    getElementalTypeArray = () => {
        return this.elementalTypeArray;
    }

    getConditionsTypeArray = () => {
        return this.conditionsTypeArray;
    }

    getFieldsTypeArray = () => {
        return this.fieldsTypeArray;
    }

    getRunesTypeArray = () => {
        return this.runesTypeArray;
    }

    getSpellsTypeArray = () => {
        return this.spellsTypeArray;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Actions

    addToAttacks = () => {
        var allItems = {
            type: this.type,
            elementalType: this.elementalType,
            conditionsType: this.conditionsType,
            fieldsType: this.fieldsType,
            runesType: this.runesType,
            spellsType: this.spellsType,
            otherType: this.otherType,
            min: this.min,
            max: this.max,
            skillCheckbox: this.skillCheckbox,
            skill: this.skill,
            attack: this.attack,
            interval: this.interval,
            chance: this.chance,
            lengthCheckbox: this.lengthCheckbox,
            length: this.length,
            spreadCheckbox: this.spreadCheckbox,
            spread: this.spread,
            radiusCheckbox: this.radiusCheckbox,
            radius: this.radius,
            poisonCheckbox: this.poisonCheckbox,
            poison: this.poison,
            target: this.target,
            range: this.range,
            areaeffectCheckbox: this.areaeffectCheckbox,
            areaeffect: this.areaeffect,
            shooteffectCheckbox: this.shooteffectCheckbox,
            shooteffect: this.shooteffect
        }

        this.allAttacks.push(allItems);
        this.setTableToLocalStorage();
    }

    deleteFromAttacks = (index) => {
        this.allAttacks.splice(index, 1);
        this.setTableToLocalStorage();
    }

    getFromAttacks = (index) => {
        return this.allAttacks[index];
    }

    showAttacks = (index) => {
        this.type = this.allAttacks[index].type;
        this.elementalType = this.allAttacks[index].elementalType;
        this.conditionsType = this.allAttacks[index].conditionsType;
        this.fieldsType = this.allAttacks[index].fieldsType;
        this.runesType = this.allAttacks[index].runesType;
        this.spellsType = this.allAttacks[index].spellsType;
        this.otherType = this.allAttacks[index].otherType;
        this.min = this.allAttacks[index].min;
        this.max = this.allAttacks[index].max;
        this.skillCheckbox = this.allAttacks[index].skillCheckbox;
        this.skill = this.allAttacks[index].skill;
        this.attack = this.allAttacks[index].attack;
        this.interval = this.allAttacks[index].interval;
        this.chance = this.allAttacks[index].chance;
        this.lengthCheckbox = this.allAttacks[index].lengthCheckbox;
        this.length = this.allAttacks[index].length;
        this.spreadCheckbox = this.allAttacks[index].spreadCheckbox;
        this.spread = this.allAttacks[index].spread;
        this.radiusCheckbox = this.allAttacks[index].radiusCheckbox;
        this.radius = this.allAttacks[index].radius;
        this.poisonCheckbox = this.allAttacks[index].poisonCheckbox;
        this.poison = this.allAttacks[index].poison;
        this.target = this.allAttacks[index].target;
        this.range = this.allAttacks[index].range;
        this.areaeffectCheckbox = this.allAttacks[index].areaeffectCheckbox;
        this.areaeffect = this.allAttacks[index].areaeffect;
        this.shooteffectCheckbox = this.allAttacks[index].shooteffectCheckbox;
        this.shooteffect = this.allAttacks[index].shooteffect;
    }

    updateAttacks = (index) => {
        this.allAttacks[index] = {
            type: this.type,
            elementalType: this.elementalType,
            conditionsType: this.conditionsType,
            fieldsType: this.fieldsType,
            runesType: this.runesType,
            spellsType: this.spellsType,
            otherType: this.otherType,
            min: this.min,
            max: this.max,
            skillCheckbox: this.skillCheckbox,
            skill: this.skill,
            attack: this.attack,
            interval: this.interval,
            chance: this.chance,
            lengthCheckbox: this.lengthCheckbox,
            length: this.length,
            spreadCheckbox: this.spreadCheckbox,
            spread: this.spread,
            radiusCheckbox: this.radiusCheckbox,
            radius: this.radius,
            poisonCheckbox: this.poisonCheckbox,
            poison: this.poison,
            target: this.target,
            range: this.range,
            areaeffectCheckbox: this.areaeffectCheckbox,
            areaeffect: this.areaeffect,
            shooteffectCheckbox: this.shooteffectCheckbox,
            shooteffect: this.shooteffect
        }
    }

    getAttackFromData = (index) => {
        var attackTable = [];

        //name
        if (this.allAttacks[index].type === 'melee') {
            attackTable.name = 'melee';
        } else if (this.allAttacks[index].type === 'elemental') {
            attackTable.name = this.allAttacks[index].elementalType;
        } else if (this.allAttacks[index].type === 'conditions') {
            attackTable.name = this.allAttacks[index].conditionsType;
        } else if (this.allAttacks[index].type === 'fields') {
            attackTable.name = this.allAttacks[index].fieldsType;
        } else if (this.allAttacks[index].type === 'runes') {
            attackTable.name = this.allAttacks[index].runesType;
        } else if (this.allAttacks[index].type === 'spells') {
            attackTable.name = this.allAttacks[index].spellsType;
        } else if (this.allAttacks[index].type === 'other') {
            attackTable.name = this.allAttacks[index].otherType;
        }

        //min/max/skill/attack
        if (!this.allAttacks[index].skillCheckbox) {
            attackTable.min = Number(this.allAttacks[index].min);
            attackTable.max = Number(this.allAttacks[index].max);
        } else {
            attackTable.skill = Number(this.allAttacks[index].skill);
            attackTable.attack = Number(this.allAttacks[index].attack);
        }

        //interval/chance
        attackTable.interval = Number(this.allAttacks[index].interval);
        attackTable.chance = Number(this.allAttacks[index].chance);
        
        //length/spread/radius/poison
        if (this.allAttacks[index].lengthCheckbox) {
            attackTable.length = Number(this.allAttacks[index].length);
        }
        if (this.allAttacks[index].spreadCheckbox) {
            attackTable.spread = Number(this.allAttacks[index].spread);
        }
        if (this.allAttacks[index].radiusCheckbox) {
            attackTable.radius = Number(this.allAttacks[index].radius);
        }
        if (this.allAttacks[index].poisonCheckbox) {
            attackTable.poison = Number(this.allAttacks[index].poison);
        }
        
        //target/range
        if (this.allAttacks[index].target) {
            attackTable.target = 1;
            attackTable.range = Number(this.allAttacks[index].range);
        }

        //area/shoot effect
        if (this.allAttacks[index].areaeffectCheckbox) {
            attackTable.areaEffect = this.allAttacks[index].areaeffect;
        }
        if (this.allAttacks[index].shooteffectCheckbox) {
            attackTable.shootEffect = this.allAttacks[index].shooteffect;
        }

        return attackTable;
    }

    generateXMLattack = (index, indentation = '\t', firstIndentation = '') => {
        var attackData = this.getAttackFromData(index);

        var attack = '';

        attack = firstIndentation + '<attack name="' + attackData.name + '" interval="' + attackData.interval + '"';
        if (attackData.chance != null) {
            attack = attack + ' chance="' + attackData.chance + '"';
        }
        if (attackData.length != null) {
            attack = attack + ' length="' + attackData.length + '"';
        }
        if (attackData.spread != null) {
            attack = attack + ' spread="' + attackData.spread + '"';
        }
        if (attackData.radius != null) {
            attack = attack + ' radius="' + attackData.radius + '"';
        }
        if (attackData.range != null) {
            attack = attack + ' range="' + attackData.range + '"';
        }
        if (attackData.target != null) {
            attack = attack + ' target="' + attackData.target + '"';
        }
        if (attackData.min != null && attackData.max != null) {
            attack = attack + ' min="' + attackData.min + '" max="' + attackData.max + '"';
        } else if (attackData.skill != null && attackData.attack != null) {
            attack = attack + ' skill="' + attackData.skill + '" attack="' + attackData.attack + '"';
        }
        if (attackData.poison != null) {
            attack = attack + ' poison="' + attackData.poison + '"';
        }
        if (!(attackData.areaEffect != null || attackData.shootEffect != null)) {
            attack = attack + '/>';
        } else {
            attack = attack + '>';

            if (attackData.areaEffect != null) {
                attack = attack + '\n' + firstIndentation + indentation + '<attribute key="areaEffect" value="' + attackData.areaEffect + '"/>';
            }

            if (attackData.shootEffect != null) {
                attack = attack + '\n' + firstIndentation + indentation + '<attribute key="shootEffect" value="' + attackData.shootEffect + '"/>';
            }

            attack = attack + '\n' + firstIndentation + '</attack>';
        }

        return attack;
    }

    getAllXMLattacks = (indentation = '\t', firstIndentation = '') => {
        var returnAttacks = [];

        this.allAttacks.forEach((variable, index) => {
            returnAttacks.push(this.generateXMLattack(index, indentation, firstIndentation));
        });

        return returnAttacks;
    }

    //Generate XML

    getXML = (indentation = '\t', firstIndentation = '') => {
        var fileXMLString = '';
        
        var allXMLattacks = this.getAllXMLattacks(indentation, firstIndentation);

        if (allXMLattacks.length > 0) {
            fileXMLString += '\n' + indentation + '<attacks>';

            allXMLattacks.map((variable, index) => {
                fileXMLString += '\n' + variable;
            });

            fileXMLString += '\n' + indentation + '</attacks>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.allAttacks = [];
        this.setTableToLocalStorage();

        this.setType("melee");
        this.setElementalType("physical");
        this.setConditionsType("physicalcondition");
        this.setFieldsType("firefield");
        this.setRunesType("sudden death");
        this.setSpellsType("great energy beam");
        this.setOtherType("");
        this.setMin(-5);
        this.setMax(-10);
        this.setSkillCheckbox(false);
        this.setSkill(1);
        this.setAttack(1);
        this.setInterval(1000);
        this.setChance(1);
        this.setLengthCheckbox(false);
        this.setLength(0);
        this.setSpreadCheckbox(false);
        this.setSpread(1);
        this.setRadiusCheckbox(false);
        this.setRadius(1);
        this.setPoisonCheckbox(false);
        this.setPoison(1);
        this.setTarget(false);
        this.setRange(1);
        this.setAreaeffectCheckbox(false);
        this.setAreaeffect("redspark");
        this.setShooteffectCheckbox(false);
        this.setShooteffect("spear");
    }

    setDefaultTableValue = () => {
        this.setType("melee");
        this.setElementalType("physical");
        this.setConditionsType("physicalcondition");
        this.setFieldsType("firefield");
        this.setRunesType("sudden death");
        this.setSpellsType("great energy beam");
        this.setOtherType("");
        this.setMin(-5);
        this.setMax(-10);
        this.setSkillCheckbox(false);
        this.setSkill(1);
        this.setAttack(1);
        this.setInterval(1000);
        this.setChance(1);
        this.setLengthCheckbox(false);
        this.setLength(0);
        this.setSpreadCheckbox(false);
        this.setSpread(1);
        this.setRadiusCheckbox(false);
        this.setRadius(1);
        this.setPoisonCheckbox(false);
        this.setPoison(1);
        this.setTarget(false);
        this.setRange(1);
        this.setAreaeffectCheckbox(false);
        this.setAreaeffect("redspark");
        this.setShooteffectCheckbox(false);
        this.setShooteffect("spear");
    }

    compareValueToAttactType = (value) => {
        if (value === 'melee') {
            return 'melee';
        }

        this.getElementalTypeArray().forEach(function (item, i) {
            if (item === value) {
                return 'elemental';
            }
        });

        this.getConditionsTypeArray().forEach(function (item, i) {
            if (item === value) {
                return 'conditions';
            }
        });
    
        this.getFieldsTypeArray().forEach(function (item, i) {
            if (item === value) {
                return 'fields';
            }
        });
    
        this.getRunesTypeArray().forEach(function (item, i) {
            if (item === value) {
                return 'runes';
            }
        });
    
        this.getSpellsTypeArray().forEach(function (item, i) {
            if (item === value) {
                return 'spells';
            }
        });

        return 'other';
    }

    loadXMLVariableAttack = (variableName, variableValue) => {
        if (variableName === 'name') {
            let attackType = this.compareValueToAttactType(variableValue);
            this.setType(attackType);

            if (attackType === 'elemental') {
                this.setElementalType(variableValue);
            } else if (attackType === 'conditions') {
                this.setConditionsType(variableValue);
            } else if (attackType === 'fields') {
                this.setFieldsType(variableValue);
            } else if (attackType === 'runes') {
                this.setRunesType(variableValue);
            } else if (attackType === 'spells') {
                this.setSpellsType(variableValue);
            } else if (attackType === 'other') {
                this.setOtherType(variableValue);
            }
        } else if (variableName === 'min') {
            if (this.getSkillCheckbox()) {
                //TODO Check parse errors
            }
            this.setMin(variableValue);
            this.setSkillCheckbox(false);
        } else if (variableName === 'max') {
            if (this.getSkillCheckbox()) {
                //TODO Check parse errors
            }
            this.setMax(variableValue);
            this.setSkillCheckbox(false);
        } else if (variableName === 'skill') {
            this.setSkill(variableValue);
            this.setSkillCheckbox(true);
        } else if (variableName === 'attack') {
            this.setAttack(variableValue);
            this.setSkillCheckbox(true);
        } else if (variableName === 'interval') {
            this.setInterval(variableValue);
        } else if (variableName === 'chance') {
            this.setChance(variableValue);
        } else if (variableName === 'length') {
            if (this.getRadiusCheckbox()) {
                //TODO Check parse errors
            }
            this.setLength(variableValue);
            this.setLengthCheckbox(true);
        } else if (variableName === 'spread') {
            if (this.getRadiusCheckbox()) {
                //TODO Check parse errors
            }
            this.setSpread(variableValue);
            this.setSpreadCheckbox(true);
        } else if (variableName === 'radius') {
            if (this.getLengthCheckbox() || this.getRadiusCheckbox()) {
                //TODO Check parse errors
            }
            this.setRadius(variableValue);
            this.setRadiusCheckbox(true);
        } else if (variableName === 'poison') {
            this.setPoison(variableValue);
            this.setPoisonCheckbox(true);
        } else if (variableName === 'target') {
            this.setTarget(true);
        } else if (variableName === 'range') {
            this.setRange(variableValue);
        }
    }

    loadXMLVariableAttribute = (variableName, variableValue) => {
        if (variableName === 'key') {
            if (variableValue === 'areaEffect') {
                this.setAreaeffectCheckbox(true);
            } else if (variableValue === 'shootEffect') {
                this.setShooteffectCheckbox(true);
            }
        } else if (variableName === 'value') {
            if (this.getAreaeffectCheckbox()) {
                this.setAreaeffect(variableValue);
            } else if (this.getShooteffectCheckbox()) {
                this.setShooteffect(variableValue);
            }
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    setTableToLocalStorage = () => {
        localStorage.setItem(this.getDataIndex() + "all", JSON.stringify(this.allAttacks));
    }

    getTableFromLocalStorage = () => {
        if (localStorage.getItem(this.getDataIndex() + "all") !== null) {
            return JSON.parse(localStorage.getItem(this.getDataIndex() + "all"));
        } else {
            return [];
        }
    }

    loadValuesFromLocalStorage = () => {
        this.allAttacks = this.getTableFromLocalStorage();

        if (this.getValueFromLocalStorage('type') !== null) {
            this.setType(this.getValueFromLocalStorage('type'));
        }
        if (this.getValueFromLocalStorage('elementalType') !== null) {
            this.setElementalType(this.getValueFromLocalStorage('elementalType'));
        }
        if (this.getValueFromLocalStorage('conditionsType') !== null) {
            this.setConditionsType(this.getValueFromLocalStorage('conditionsType'));
        }
        if (this.getValueFromLocalStorage('fieldsType') !== null) {
            this.setFieldsType(this.getValueFromLocalStorage('fieldsType'));
        }
        if (this.getValueFromLocalStorage('runesType') !== null) {
            this.setRunesType(this.getValueFromLocalStorage('runesType'));
        }
        if (this.getValueFromLocalStorage('spellsType') !== null) {
            this.setSpellsType(this.getValueFromLocalStorage('spellsType'));
        }
        if (this.getValueFromLocalStorage('otherType') !== null) {
            this.setOtherType(this.getValueFromLocalStorage('otherType'));
        }
        if (this.getValueFromLocalStorage('min') !== null) {
            this.setMin(this.getValueFromLocalStorage('min'));
        }
        if (this.getValueFromLocalStorage('max') !== null) {
            this.setMax(this.getValueFromLocalStorage('max'));
        }
        if (this.getValueFromLocalStorage('skillCheckbox') !== null) {
            if (this.getValueFromLocalStorage('skillCheckbox') === 'true') {
                this.setSkillCheckbox(true);
            } else if (this.getValueFromLocalStorage('skillCheckbox') === 'false') {
                this.setSkillCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('skill') !== null) {
            this.setSkill(this.getValueFromLocalStorage('skill'));
        }
        if (this.getValueFromLocalStorage('attack') !== null) {
            this.setAttack(this.getValueFromLocalStorage('attack'));
        }
        if (this.getValueFromLocalStorage('interval') !== null) {
            this.setInterval(this.getValueFromLocalStorage('interval'));
        }
        if (this.getValueFromLocalStorage('chance') !== null) {
            this.setChance(this.getValueFromLocalStorage('chance'));
        }
        if (this.getValueFromLocalStorage('lengthCheckbox') !== null) {
            if (this.getValueFromLocalStorage('lengthCheckbox') === 'true') {
                this.setLengthCheckbox(true);
            } else if (this.getValueFromLocalStorage('lengthCheckbox') === 'false') {
                this.setLengthCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('length') !== null) {
            this.setLength(this.getValueFromLocalStorage('length'));
        }
        if (this.getValueFromLocalStorage('spreadCheckbox') !== null) {
            if (this.getValueFromLocalStorage('spreadCheckbox') === 'true') {
                this.setSpreadCheckbox(true);
            } else if (this.getValueFromLocalStorage('spreadCheckbox') === 'false') {
                this.setSpreadCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('spread') !== null) {
            this.setSpread(this.getValueFromLocalStorage('spread'));
        }
        if (this.getValueFromLocalStorage('radiusCheckbox') !== null) {
            if (this.getValueFromLocalStorage('radiusCheckbox') === 'true') {
                this.setRadiusCheckbox(true);
            } else if (this.getValueFromLocalStorage('radiusCheckbox') === 'false') {
                this.setRadiusCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('radius') !== null) {
            this.setRadius(this.getValueFromLocalStorage('radius'));
        }
        if (this.getValueFromLocalStorage('poisonCheckbox') !== null) {
            if (this.getValueFromLocalStorage('poisonCheckbox') === 'true') {
                this.setPoisonCheckbox(true);
            } else if (this.getValueFromLocalStorage('poisonCheckbox') === 'false') {
                this.setPoisonCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('poison') !== null) {
            this.setPoison(this.getValueFromLocalStorage('poison'));
        }
        if (this.getValueFromLocalStorage('target') !== null) {
            if (this.getValueFromLocalStorage('target') === 'true') {
                this.setTarget(true);
            } else if (this.getValueFromLocalStorage('target') === 'false') {
                this.setTarget(false);
            }
        }
        if (this.getValueFromLocalStorage('range') !== null) {
            this.setRange(this.getValueFromLocalStorage('range'));
        }
        if (this.getValueFromLocalStorage('areaeffectCheckbox') !== null) {
            if (this.getValueFromLocalStorage('areaeffectCheckbox') === 'true') {
                this.setAreaeffectCheckbox(true);
            } else if (this.getValueFromLocalStorage('areaeffectCheckbox') === 'false') {
                this.setAreaeffectCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('areaeffect') !== null) {
            this.setAreaeffect(this.getValueFromLocalStorage('areaeffect'));
        }
        if (this.getValueFromLocalStorage('shooteffectCheckbox') !== null) {
            if (this.getValueFromLocalStorage('shooteffectCheckbox') === 'true') {
                this.setShooteffectCheckbox(true);
            } else if (this.getValueFromLocalStorage('shooteffectCheckbox') === 'false') {
                this.setShooteffectCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('shooteffect') !== null) {
            this.setShooteffect(this.getValueFromLocalStorage('shooteffect'));
        }
    }
}

export default AttacksData;
