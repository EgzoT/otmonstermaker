class MonsterData {
    constructor() {
        this.name = "";
        this.nameDescription = "";
        this.race = "blood";
        this.experience = 1000;
        this.skull = "none";
        this.speed = 100;
        this.manaCost = 0;
        this.healthNow = 100;
        this.healthMax = 100;
        this.lookType = "0";
        this.lookTypeValue = 1;
        this.head = 0;
        this.body = 0;
        this.legs = 0;
        this.feet = 0;
        this.addons = 0;
        this.mount = 0;
        this.corpse = 1;
        this.targetchangeInterval = 2000;
        this.targetchangeChance = 5;
        this.strategy = false;
        this.attack = 50;
        this.defense = 50;

        this.dataIndex = "MONSTER_";
    }

    setName = (value) => {
        this.name = value;
        this.setValueToLocalStorage('name', value);
    }

    getName = () => {
        return this.name;
    }

    setNameDescription = (value) => {
        this.nameDescription = value;
        this.setValueToLocalStorage('nameDescription', value);
    }

    getNameDescription = () => {
        return this.nameDescription;
    }

    setRace = (value) => {
        this.race = value;
        this.setValueToLocalStorage('race', value);
    }

    getRace = () => {
        return this.race;
    }

    setExperience = (value) => {
        this.experience = value;
        this.setValueToLocalStorage('experience', value);
    }

    getExperience = () => {
        return this.experience;
    }

    setSkull = (value) => {
        this.skull = value;
        this.setValueToLocalStorage('skull', value);
    }

    getSkull = () => {
        return this.skull;
    }

    setSpeed = (value) => {
        this.speed = value;
        this.setValueToLocalStorage('speed', value);
    }

    getSpeed = () => {
        return this.speed;
    }

    setManaCost = (value) => {
        this.manaCost = value;
        this.setValueToLocalStorage('manaCost', value);
    }

    getManaCost = () => {
        return this.manaCost;
    }

    setHealthNow = (value) => {
        this.healthNow = value;
        this.setValueToLocalStorage('healthNow', value);
    }

    getHealthNow = () => {
        return this.healthNow;
    }

    setHealthMax = (value) => {
        this.healthMax = value;
        this.setValueToLocalStorage('healthMax', value);
    }

    getHealthMax = () => {
        return this.healthMax;
    }

    setLookType = (value) => {
        this.lookType = value;
        this.setValueToLocalStorage('lookType', value);
    }

    getLookType = () => {
        return this.lookType;
    }

    setLookTypeValue = (value) => {
        this.lookTypeValue = value;
        this.setValueToLocalStorage('lookTypeValue', value);
    }

    getLookTypeValue = () => {
        return this.lookTypeValue;
    }

    setHead = (value) => {
        this.head = value;
        this.setValueToLocalStorage('head', value);
    }

    getHead = () => {
        return this.head;
    }

    setBody = (value) => {
        this.body = value;
        this.setValueToLocalStorage('body', value);
    }

    getBody = () => {
        return this.body;
    }

    setLegs = (value) => {
        this.legs = value;
        this.setValueToLocalStorage('legs', value);
    }
    
    getLegs = () => {
        return this.legs;
    }

    setFeet = (value) => {
        this.feet = value;
        this.setValueToLocalStorage('feet', value);
    }

    getFeet = () => {
        return this.feet;
    }

    setAddons = (value) => {
        this.addons = value;
        this.setValueToLocalStorage('addons', value);
    }

    getAddons = () => {
        return this.addons;
    }

    setMount = (value) => {
        this.mount = value;
        this.setValueToLocalStorage('mount', value);
    }

    getMount = () => {
        return this.mount;
    }

    setCorpse = (value) => {
        this.corpse = value;
        this.setValueToLocalStorage('corpse', value);
    }

    getCorpse = () => {
        return this.corpse;
    }

    setTargetchangeInterval = (value) => {
        this.targetchangeInterval = value;
        this.setValueToLocalStorage('targetchangeInterval', value);
    }

    getTargetchangeInterval = () => {
        return this.targetchangeInterval;
    }

    setTargetchangeChance = (value) => {
        this.targetchangeChance = value;
        this.setValueToLocalStorage('targetchangeChance', value);
    }

    getTargetchangeChance = () => {
        return this.targetchangeChance;
    }

    setStrategy = (value) => {
        this.strategy = value;
        this.setValueToLocalStorage('strategy', value);
    }

    getStrategy = () => {
        return this.strategy;
    }

    setAttack = (value) => {
        this.attack = value;
        this.setValueToLocalStorage('attack', value);
    }

    getAttack = () => {
        return this.attack;
    }

    setDefense = (value) => {
        this.defense = value;
        this.setValueToLocalStorage('defense', value);
    }

    getDefense = () => {
        return this.defense;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Generate XML

    getXML = (indentation = '\t') => {
        var fileXMLString = '';
        
        fileXMLString += '\n' + '<monster name="' + this.getName() + '" nameDescription="' + this.getNameDescription() +
        '" race="' + this.getRace() + '" experience="' + this.getExperience() + '" skull="' + this.getSkull() +
        '" speed="' + this.getSpeed() + '" manacost="' + this.getManaCost() + '">';
        
        fileXMLString += '\n' + indentation + '<health now="' + this.getHealthNow() + '" max="' + this.getHealthMax() + '"/>';
        
        var lookTypeFormat = null;
        if (this.getLookType() === "0") {
            lookTypeFormat = 'type';
        } else if (this.getLookType() === "1") {
            lookTypeFormat = 'typeEx';
        }
        
        fileXMLString += '\n' + indentation + '<look ' + lookTypeFormat + '="' + this.getLookTypeValue() + '" head="' + this.getHead() +
        '" body="' + this.getBody() + '" legs="' + this.getLegs() + '" feet="' + this.getFeet() + '" addons="' +
        this.getAddons() + '" mount="' + this.getMount() + '" corpse="' + this.getCorpse() + '"/>';
        
        fileXMLString += '\n' + indentation + '<targetchange interval="' + this.getTargetchangeInterval() + '" chance="' + this.getTargetchangeChance() + '"/>';
        
        if (this.getStrategy()) {
            fileXMLString += '\n' + indentation + '<strategy attack="' + this.getAttack() + '" defense="' + this.getDefense() + '"/>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setName("");
        this.setNameDescription("");
        this.setRace("blood");
        this.setExperience(1000);
        this.setSkull("none");
        this.setSpeed(100);
        this.setManaCost(0);
        this.setHealthNow(100);
        this.setHealthMax(100);
        this.setLookType("0");
        this.setLookTypeValue(1);
        this.setHead(0);
        this.setBody(0);
        this.setLegs(0);
        this.setFeet(0);
        this.setAddons(0);
        this.setMount(0);
        this.setCorpse(1);
        this.setTargetchangeInterval(2000);
        this.setTargetchangeChance(5);
        this.setStrategy(false);
        this.setAttack(50);
        this.setDefense(50);
    }

    loadXMLVariableMonster = (variableName, variableValue) => {
        if (variableName === 'name') {
            this.setName(variableValue);
        } else if (variableName === 'nameDescription') {
            this.setNameDescription(variableValue);
        } else if (variableName === 'race') {
            this.setRace(variableValue);
        } else if (variableName === 'experience') {
            this.setExperience(variableValue);
        } else if (variableName === 'skull') {
            this.setSkull(variableValue);
        } else if (variableName === 'speed') {
            this.setSpeed(variableValue);
        } else if (variableName === 'manacost') {
            this.setManaCost(variableValue);
        }
    }

    loadXMLVariableHealth = (variableName, variableValue) => {
        if (variableName === 'now') {
            this.setHealthNow(variableValue);
        } else if (variableName === 'max') {
            this.setHealthMax(variableValue);
        }
    }

    loadXMLVariableLook = (variableName, variableValue) => {
        if (variableName === 'type') {
            this.setLookType("0");
            this.setLookTypeValue(variableValue);
        } else if (variableName === 'typeEx') {
            this.setLookType("1");
            this.setLookTypeValue(variableValue);
        } else if (variableName === 'head') {
            this.setHead(variableValue);
        } else if (variableName === 'body') {
            this.setBody(variableValue);
        } else if (variableName === 'legs') {
            this.setLegs(variableValue);
        } else if (variableName === 'feet') {
            this.setFeet(variableValue);
        } else if (variableName === 'addons') {
            this.setAddons(variableValue);
        } else if (variableName === 'mount') {
            this.setMount(variableValue);
        } else if (variableName === 'corpse') {
            this.setCorpse(variableValue);
        }
    }

    loadXMLVariableTargetchange = (variableName, variableValue) => {
        if (variableName === 'interval') {
            this.setTargetchangeInterval(variableValue);
        } else if (variableName === 'chance') {
            this.setTargetchangeChance(variableValue);
        }
    }

    loadXMLVariableStrategy = (variableName, variableValue) => {
        this.setStrategy(true);
        if (variableName === 'attack') {
            this.setAttack(Number(variableValue));
            this.setDefense(100 - Number(variableValue));
        //} else if (variableName === 'defense') {
            //  Ignore
            //this.setDefense(100 - Number(variableValue));
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('name') !== null) {
            this.setName(this.getValueFromLocalStorage('name'));
        }
        if (this.getValueFromLocalStorage('nameDescription') !== null) {
            this.setNameDescription(this.getValueFromLocalStorage('nameDescription'));
        }
        if (this.getValueFromLocalStorage('race') !== null) {
            this.setRace(this.getValueFromLocalStorage('race'));
        }
        if (this.getValueFromLocalStorage('experience') !== null) {
            this.setExperience(this.getValueFromLocalStorage('experience'));
        }
        if (this.getValueFromLocalStorage('skull') !== null) {
            this.setSkull(this.getValueFromLocalStorage('skull'));
        }
        if (this.getValueFromLocalStorage('speed') !== null) {
            this.setSpeed(this.getValueFromLocalStorage('speed'));
        }
        if (this.getValueFromLocalStorage('manaCost') !== null) {
            this.setManaCost(this.getValueFromLocalStorage('manaCost'));
        }
        if (this.getValueFromLocalStorage('healthNow') !== null) {
            this.setHealthNow(this.getValueFromLocalStorage('healthNow'));
        }
        if (this.getValueFromLocalStorage('healthMax') !== null) {
            this.setHealthMax(this.getValueFromLocalStorage('healthMax'));
        }
        if (this.getValueFromLocalStorage('lookType') !== null) {
            this.setLookType(this.getValueFromLocalStorage('lookType'));
        }
        if (this.getValueFromLocalStorage('lookTypeValue') !== null) {
            this.setLookTypeValue(this.getValueFromLocalStorage('lookTypeValue'));
        }
        if (this.getValueFromLocalStorage('head') !== null) {
            this.setHead(this.getValueFromLocalStorage('head'));
        }
        if (this.getValueFromLocalStorage('body') !== null) {
            this.setBody(this.getValueFromLocalStorage('body'));
        }
        if (this.getValueFromLocalStorage('legs') !== null) {
            this.setLegs(this.getValueFromLocalStorage('legs'));
        }
        if (this.getValueFromLocalStorage('feet') !== null) {
            this.setFeet(this.getValueFromLocalStorage('feet'));
        }
        if (this.getValueFromLocalStorage('addons') !== null) {
            this.setAddons(this.getValueFromLocalStorage('addons'));
        }
        if (this.getValueFromLocalStorage('mount') !== null) {
            this.setMount(this.getValueFromLocalStorage('mount'));
        }
        if (this.getValueFromLocalStorage('corpse') !== null) {
            this.setCorpse(this.getValueFromLocalStorage('corpse'));
        }
        if (this.getValueFromLocalStorage('targetchangeInterval') !== null) {
            this.setTargetchangeInterval(this.getValueFromLocalStorage('targetchangeInterval'));
        }
        if (this.getValueFromLocalStorage('targetchangeChance') !== null) {
            this.setTargetchangeChance(this.getValueFromLocalStorage('targetchangeChance'));
        }
        if (this.getValueFromLocalStorage('strategy') !== null) {
            if (this.getValueFromLocalStorage('strategy') === 'true') {
                this.setStrategy(true);
            } else if (this.getValueFromLocalStorage('strategy') === 'false') {
                this.setStrategy(false);
            }
        }
        if (this.getValueFromLocalStorage('attack') !== null) {
            this.setAttack(this.getValueFromLocalStorage('attack'));
        }
        if (this.getValueFromLocalStorage('defense') !== null) {
            this.setDefense(this.getValueFromLocalStorage('defense'));
        }
    }
}

export default MonsterData;
