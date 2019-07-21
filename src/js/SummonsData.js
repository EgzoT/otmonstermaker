class SummonsData {
    constructor() {
        this.maxSummons = 1;

        this.allSummons = [];

        this.summonName = '';
        this.interval = 1000;
        this.chance = 1;
        this.max = 1;

        this.dataIndex = "SUMMONS_";
    }

    setMaxSummons = (value) => {
        this.maxSummons = value;
        this.setValueToLocalStorage('maxSummons', value);
    }

    getMaxSummons = () => {
        return this.maxSummons;
    }

    setSummonName = (value) => {
        this.summonName = value;
        this.setValueToLocalStorage('summonName', value);
    }

    setIndexSummonName = (index, value) => {
        this.allSummons[index].summonName = value;
        this.setTableToLocalStorage();
    }

    getSummonName = () => {
        return this.summonName;
    }

    setInterval = (value) => {
        this.interval = value;
        this.setValueToLocalStorage('interval', value);
    }

    setIndexInterval = (index, value) => {
        this.allSummons[index].interval = value;
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
        this.allSummons[index].chance = value;
        this.setTableToLocalStorage();
    }

    getChance = () => {
        return this.chance;
    }

    setMax = (value) => {
        this.max = value;
        this.setValueToLocalStorage('max', value);
    }

    setIndexMax = (index, value) => {
        this.allSummons[index].max = value;
        this.setTableToLocalStorage();
    }

    getMax = () => {
        return this.max;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Actions

    addToSummons = () => {
        var allItems = {
            summonName: this.summonName,
            interval: this.interval,
            chance: this.chance,
            max: this.max
        }

        this.allSummons.push(allItems);
        this.setTableToLocalStorage();
    }

    deleteFromSummons = (index) => {
        this.allSummons.splice(index, 1);
        this.setTableToLocalStorage();
    }

    getFromSummons = (index) => {
        return this.allSummons[index];
    }

    showSummons = (index) => {
        this.summonName = this.allSummons[index].summonName;
        this.interval = this.allSummons[index].interval;
        this.chance = this.allSummons[index].chance;
        this.max = this.allSummons[index].max;
    }

    updateSummons = (index) => {
        this.allSummons[index] = {
            summonName: this.summonName,
            interval: this.interval,
            chance: this.chance,
            max: this.max
        }
    }

    getSummonFromData = (index) => {
        var summonTable = [];

        summonTable.summonName = this.allSummons[index].summonName;
        summonTable.interval = this.allSummons[index].interval;
        summonTable.chance = this.allSummons[index].chance;
        summonTable.max = this.allSummons[index].max;

        return summonTable;
    }

    generateXMLSummon = (index, indentation = '\t', firstIndentation = '') => {
        var summonData = this.getSummonFromData(index);

        var summon = '';
        
        summon += firstIndentation + '<summon name="' + summonData.summonName + '" interval="' + summonData.interval + '" chance="' + summonData.chance + '" max="' + summonData.max + '"/>';

        return summon;
    }

    getAllXMLSummons = (indentation = '\t', firstIndentation = '') => {
        var returnSummons = [];

        this.allSummons.forEach((variable, index) => {
            returnSummons.push(this.generateXMLSummon(index, indentation, firstIndentation));
        });

        return returnSummons;
    }

    //Generate XML

    getXML = (indentation = '\t', firstIndentation = '') => {
        var fileXMLString = '';

        var allXMLsummons = this.getAllXMLSummons(indentation, firstIndentation);

        if (allXMLsummons.length > 0) {
            fileXMLString += '\n' + indentation + '<summons maxSummons="' + this.getMaxSummons() + '">';
            allXMLsummons.forEach((variable, index) => {
                fileXMLString += '\n' + variable;
            });
            fileXMLString += '\n' + indentation + '</summons>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setMaxSummons(1);

        this.allSummons = [];
        this.setTableToLocalStorage();

        this.setSummonName('');
        this.setInterval(1000);
        this.setChance(1);
        this.setMax(1);
    }

    setDefaultTableValue = () => {
        this.setSummonName('');
        this.setInterval(1000);
        this.setChance(1);
        this.setMax(1);
    }

    loadXMLVariableSummons = (variableName, variableValue) => {
        if (variableName === 'maxSummons') {
            this.setMaxSummons(variableValue);
        }
    }

    loadXMLVariableSummon = (variableName, variableValue) => {
        if (variableName === 'name') {
            this.setSummonName(variableValue);
        } else if (variableName === 'interval') {
            this.setInterval(variableValue);
        } else if (variableName === 'chance') {
            this.setChance(variableValue);
        } else if (variableName === 'max') {
            this.setMax(variableValue);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    setTableToLocalStorage = () => {
        localStorage.setItem(this.getDataIndex() + "all", JSON.stringify(this.allSummons));
    }

    getTableFromLocalStorage = () => {
        if (localStorage.getItem(this.getDataIndex() + "all") !== null) {
            return JSON.parse(localStorage.getItem(this.getDataIndex() + "all"));
        } else {
            return [];
        }
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('maxSummons') !== null) {
            this.setMaxSummons(this.getValueFromLocalStorage('maxSummons'));
        }

        this.allSummons = this.getTableFromLocalStorage();

        if (this.getValueFromLocalStorage('summonName') !== null) {
            this.setSummonName(this.getValueFromLocalStorage('summonName'));
        }
        if (this.getValueFromLocalStorage('interval') !== null) {
            this.setInterval(this.getValueFromLocalStorage('interval'));
        }
        if (this.getValueFromLocalStorage('chance') !== null) {
            this.setChance(this.getValueFromLocalStorage('chance'));
        }
        if (this.getValueFromLocalStorage('max') !== null) {
            this.setMax(this.getValueFromLocalStorage('max'));
        }
    }
}

export default SummonsData;
