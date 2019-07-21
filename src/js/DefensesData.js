class DefensesData {
    constructor() {
        this.armor = 1;
        this.defense = 1;

        this.allDefenses = [];

        this.defenseName = "healing";
        this.interval = 1000;
        this.chance = 1;
        this.min = 1;
        this.max = 1;
        this.radiusCheckbox = false;
        this.radius = 1;
        this.areaeffect = "redspark";
        this.duration = 4000;
        this.speedChange = 300;

        this.dataIndex = "DEFENSES_";
    }

    setArmor = (value) => {
        this.armor = value;
        this.setValueToLocalStorage('armor', value);
    }

    getArmor = () => {
        return this.armor;
    }

    setDefense = (value) => {
        this.defense = value;
        this.setValueToLocalStorage('defense', value);
    }

    getDefense = () => {
        return this.defense;
    }

    setDefenseName = (value) => {
        this.defenseName = value;
        this.setValueToLocalStorage('defenseName', value);
    }

    setIndexDefenseName = (index, value) => {
        this.allDefenses[index].defenseName = value;
        this.setTableToLocalStorage();
    }

    getDefenseName = () => {
        return this.defenseName;
    }

    setInterval = (value) => {
        this.interval = value;
        this.setValueToLocalStorage('interval', value);
    }

    setIndexInterval = (index, value) => {
        this.allDefenses[index].interval = value;
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
        this.allDefenses[index].chance = value;
        this.setTableToLocalStorage();
    }

    getChance = () => {
        return this.chance;
    }

    setMin = (value) => {
        this.min = value;
        this.setValueToLocalStorage('min', value);
    }

    setIndexMin = (index, value) => {
        this.allDefenses[index].min = value;
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
        this.allDefenses[index].max = value;
        this.setTableToLocalStorage();
    }

    getMax = () => {
        return this.max;
    }

    setRadiusCheckbox = (value) => {
        this.radiusCheckbox = value;
        this.setValueToLocalStorage('radiusCheckbox', value);
    }

    setIndexRadiusCheckbox = (index, value) => {
        this.allDefenses[index].radiusCheckbox = value;
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
        this.allDefenses[index].radius = value;
        this.setTableToLocalStorage();
    }

    getRadius = () => {
        return this.radius;
    }

    setAreaeffect = (value) => {
        this.areaeffect = value;
        this.setValueToLocalStorage('areaeffect', value);
    }

    setIndexAreaeffect = (index, value) => {
        this.allDefenses[index].areaeffect = value;
        this.setTableToLocalStorage();
    }

    getAreaeffect = () => {
        return this.areaeffect;
    }

    setDuration = (value) => {
        this.duration = value;
        this.setValueToLocalStorage('duration', value);
    }

    setIndexDuration = (index, value) => {
        this.allDefenses[index].duration = value;
        this.setTableToLocalStorage();
    }

    getDuration = () => {
        return this.duration;
    }

    setSpeedChange = (value) => {
        this.speedChange = value;
        this.setValueToLocalStorage('speedChange', value);
    }

    setIndexSpeedChange = (index, value) => {
        this.allDefenses[index].speedChange = value;
        this.setTableToLocalStorage();
    }

    getSpeedChange = () => {
        return this.speedChange;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Actions
    
    addToDefenses = () => {
        var allItems = {
            defenseName: this.defenseName,
            interval: this.interval,
            chance: this.chance,
            min: this.min,
            max: this.max,
            radiusCheckbox: this.radiusCheckbox,
            radius: this.radius,
            areaeffect: this.areaeffect,
            duration: this.duration,
            speedChange: this.speedChange
        }

        this.allDefenses.push(allItems);
        this.setTableToLocalStorage();
    }

    deleteFromDefenses = (index) => {
        this.allDefenses.splice(index, 1);
        this.setTableToLocalStorage();
    }

    getFromDefenses = (index) => {
        return this.allDefenses[index];
    }

    showDefenses = (index) => {
        this.defenseName = this.allDefenses[index].defenseName;
        this.interval = this.allDefenses[index].interval;
        this.chance = this.allDefenses[index].chance;
        this.min = this.allDefenses[index].min;
        this.max = this.allDefenses[index].max;
        this.radiusCheckbox = this.allDefenses[index].radiusCheckbox;
        this.radius = this.allDefenses[index].radius;
        this.areaeffect = this.allDefenses[index].areaeffect;
        this.duration = this.allDefenses[index].duration;
        this.speedChange = this.allDefenses[index].speedChange;
    }

    updateDefenses = (index) => {
        this.allDefenses[index] = {
            defenseName: this.defenseName,
            interval: this.interval,
            chance: this.chance,
            min: this.min,
            max: this.max,
            radiusCheckbox: this.radiusCheckbox,
            radius: this.radius,
            areaeffect: this.areaeffect,
            duration: this.duration,
            speedChange: this.speedChange
        }
    }

    getDefenseFromData = (index) => {
        var defenseTable = [];

        //name
        if (this.allDefenses[index].defenseName === 'healing') {
            defenseTable.defenseName = 'healing';
            defenseTable.interval = this.allDefenses[index].interval;
            defenseTable.chance = this.allDefenses[index].chance;
            defenseTable.min = this.allDefenses[index].min;
            defenseTable.max = this.allDefenses[index].max;
            if (this.allDefenses[index].radiusCheckbox) {
                defenseTable.radius = this.allDefenses[index].radius;
            }
            defenseTable.areaeffect = this.allDefenses[index].areaeffect;
        } else if (this.allDefenses[index].defenseName === 'speed') {
            defenseTable.defenseName = 'speed';
            defenseTable.interval = this.allDefenses[index].interval;
            defenseTable.chance = this.allDefenses[index].chance;
            defenseTable.areaeffect = this.allDefenses[index].areaeffect;
            defenseTable.duration = this.allDefenses[index].duration;
            defenseTable.speedChange = this.allDefenses[index].speedChange;
        } else if (this.allDefenses[index].defenseName === 'invisible') {
            defenseTable.defenseName = 'invisible';
            defenseTable.interval = this.allDefenses[index].interval;
            defenseTable.chance = this.allDefenses[index].chance;
            defenseTable.areaeffect = this.allDefenses[index].areaeffect;
            defenseTable.duration = this.allDefenses[index].duration;
        }

        return defenseTable;
    }

    generateXMLdefense = (index, indentation = '\t', firstIndentation = '') => {
        var defenseData = this.getDefenseFromData(index);

        var defense = '';

        defense = defense + firstIndentation + '<defense name="' + defenseData.defenseName + '" interval="' + defenseData.interval + '" chance="' + defenseData.chance + '"';
        if (defenseData.defenseName === 'healing') {
            defense = defense + ' min="' + defenseData.min + '" max="' + defenseData.max + '"';
            if (defenseData.radius != null) {
                defense = defense + ' radius="' + defenseData.radius + '"';
            }
        } else if (defenseData.defenseName === 'speed') {
            defense = defense + ' duration="' + defenseData.duration + '" speedchange="' + defenseData.speedChange + '"';
        } else if (defenseData.defenseName === 'invisible') {
            defense = defense + ' duration="' + defenseData.duration + '"';
        }
        defense = defense + '>';

        defense = defense + '\n' + firstIndentation + indentation + '<attribute key="areaEffect" value="' + defenseData.areaeffect + '"/>';

        defense = defense + '\n' + firstIndentation + '</defense>';

        return defense;
    }

    getAllXMLdefenses = (indentation = '\t', firstIndentation = '') => {
        var returnDefenses = [];

        this.allDefenses.forEach((variable, index) => {
            returnDefenses.push(this.generateXMLdefense(index, indentation, firstIndentation));
        });

        return returnDefenses;
    }

    //Generate XML

    getXML = (indentation = '\t', firstIndentation = '') => {
        var fileXMLString = '';
        
        var allXMLdefenses = this.getAllXMLdefenses(indentation, firstIndentation);

        if (allXMLdefenses.length > 0) {
            fileXMLString += '\n' + indentation + '<defenses armor="' + this.getArmor() + '" defense="' + this.getDefense() + '">';
            
            allXMLdefenses.forEach((variable, index) => {
                fileXMLString += '\n' + variable;
            });

            fileXMLString += '\n' + indentation + '</defenses>';
        } else {
            fileXMLString += '\n' + indentation + '<defenses armor="' + this.getArmor() + '" defense="' + this.getDefense() + '"/>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setArmor(1);
        this.setDefense(1);

        this.allDefenses = [];
        this.setTableToLocalStorage();

        this.setDefenseName("healing");
        this.setInterval(1000);
        this.setChance(1);
        this.setMin(1);
        this.setMax(1);
        this.setRadiusCheckbox(false);
        this.setRadius(1);
        this.setAreaeffect("redspark");
        this.setDuration(4000);
        this.setSpeedChange(300);
    }

    setDefaultTableValue = () => {
        this.setDefenseName("healing");
        this.setInterval(1000);
        this.setChance(1);
        this.setMin(1);
        this.setMax(1);
        this.setRadiusCheckbox(false);
        this.setRadius(1);
        this.setAreaeffect("redspark");
        this.setDuration(4000);
        this.setSpeedChange(300);
    }

    loadXMLVariableDefenses = (variableName, variableValue) => {
        if (variableName === 'armor') {
            this.setArmor(variableValue);
        } else if (variableName === 'defense') {
            this.setDefense(variableValue);
        }
    }

    loadXMLVariableDefense = (variableName, variableValue) => {
        if (variableName === 'name') {
            this.setDefenseName(variableValue);
        } else if (variableName === 'interval') {
            this.setInterval(variableValue);
        } else if (variableName === 'chance') {
            this.setChance(variableValue);
        } else if (variableName === 'min') {
            //TODOCheck parse errors
            this.setMin(variableValue);
        } else if (variableName === 'max') {
            //TODO Check parse errors
            this.setMax(variableValue);
        } else if (variableName === 'radius') {
            //TODO Check parse errors
            this.setRadiusCheckbox(true);
            this.setRadius(variableValue);
        } else if (variableName === 'duration') {
            //TODO Check parse errors
            this.setDuration(variableValue);
        } else if (variableName === 'speedchange') {
            //TODO Check parse errors
            this.setSpeedChange(variableValue);
        }
    }

    loadXMLVariableAttribute = (variableName, variableValue) => {
        if (variableName === 'key') {
            if (variableValue === 'areaEffect') {
                this.setAreaeffectCheckbox(true);
            }
        } else if (variableName === 'value') {
            if (this.getAreaeffectCheckbox()) {
                this.setAreaeffect(variableValue);
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
        localStorage.setItem(this.getDataIndex() + "all", JSON.stringify(this.allDefenses));
    }

    getTableFromLocalStorage = () => {
        if (localStorage.getItem(this.getDataIndex() + "all") !== null) {
            return JSON.parse(localStorage.getItem(this.getDataIndex() + "all"));
        } else {
            return [];
        }
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('armor') !== null) {
            this.setArmor(this.getValueFromLocalStorage('armor'));
        }
        if (this.getValueFromLocalStorage('defense') !== null) {
            this.setDefense(this.getValueFromLocalStorage('defense'));
        }

        this.allDefenses = this.getTableFromLocalStorage();

        if (this.getValueFromLocalStorage('defenseName') !== null) {
            this.setDefenseName(this.getValueFromLocalStorage('defenseName'));
        }
        if (this.getValueFromLocalStorage('interval') !== null) {
            this.setInterval(this.getValueFromLocalStorage('interval'));
        }
        if (this.getValueFromLocalStorage('chance') !== null) {
            this.setChance(this.getValueFromLocalStorage('chance'));
        }
        if (this.getValueFromLocalStorage('min') !== null) {
            this.setMin(this.getValueFromLocalStorage('min'));
        }
        if (this.getValueFromLocalStorage('max') !== null) {
            this.setMax(this.getValueFromLocalStorage('max'));
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
        if (this.getValueFromLocalStorage('areaeffect') !== null) {
            this.setAreaeffect(this.getValueFromLocalStorage('areaeffect'));
        }
        if (this.getValueFromLocalStorage('duration') !== null) {
            this.setDuration(this.getValueFromLocalStorage('duration'));
        }
        if (this.getValueFromLocalStorage('speedChange') !== null) {
            this.setSpeedChange(this.getValueFromLocalStorage('speedChange'));
        }
    }
}

export default DefensesData;
