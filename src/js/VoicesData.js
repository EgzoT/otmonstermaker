class VoicesData {
    constructor() {
        this.interval = 1000;
        this.chance = 1;

        this.allVoices = [];

        this.sentence = "";
        this.yell = false;

        this.dataIndex = "VOICES_";
    }

    setInterval = (value) => {
        this.interval = value;
        this.setValueToLocalStorage('interval', value);
    }

    getInterval = () => {
        return this.interval;
    }

    setChance = (value) => {
        this.chance = value;
        this.setValueToLocalStorage('chance', value);
    }

    getChance = () => {
        return this.chance;
    }

    setSentence = (value) => {
        this.sentence = value;
        this.setValueToLocalStorage('sentence', value);
    }

    setIndexSentence = (index, value) => {
        this.allVoices[index].sentence = value;
        this.setTableToLocalStorage();
    }

    getSentence = () => {
        return this.sentence;
    }

    setYell = (value) => {
        this.yell = value;
        this.setValueToLocalStorage('yell', value);
    }

    setIndexYell = (index, value) => {
        this.allVoices[index].yell = value;
        this.setTableToLocalStorage();
    }

    getYell = () => {
        return this.yell;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Actions

    addToVoices = () => {
        var allItems = {
            sentence: this.sentence,
            yell: this.yell
        }

        this.allVoices.push(allItems);
        this.setTableToLocalStorage();
    }

    deleteFromVoices = (index) => {
        this.allVoices.splice(index, 1);
        this.setTableToLocalStorage();
    }

    getFromVoices = (index) => {
        return this.allVoices[index];
    }

    showVoices = (index) => {
        this.sentence = this.allVoices[index].sentence;
        this.yell = this.allVoices[index].yell;
    }

    updateVoices = (index) => {
        this.allVoices[index] = {
            sentence: this.sentence,
            yell: this.yell
        }
    }

    getVoiceFromData = (index) => {
        var voiceTable = {}

        voiceTable.sentence = this.allVoices[index].sentence;
        voiceTable.yell = this.allVoices[index].yell;

        return voiceTable
    }

    generateXMLVoice = (index, indentation = '\t', firstIndentation = '') => {
        var voiceData = this.getVoiceFromData(index);

        var voice = '';

        voice = voice + firstIndentation + '<voice sentence="' + voiceData.sentence + '"';
        if (voiceData.yell) {
            voice = voice + ' yell="1"/>'
        } else {
            voice = voice + '/>'
        }

        return voice;
    }

    getAllXMLVoices = (indentation = '\t', firstIndentation = '') => {
        var returnVoices = [];

        this.allVoices.forEach((variable, index) => {
            returnVoices.push(this.generateXMLVoice(index, indentation, firstIndentation));
        });

        return returnVoices;
    }

    //Generate XML

    getXML = (indentation = '\t', firstIndentation = '') => {
        var fileXMLString = '';

        var allXMLvoices = this.getAllXMLVoices(indentation, firstIndentation);

        if (allXMLvoices.length > 0) {
            fileXMLString += '\n' + indentation + '<voices interval="' + this.getInterval() + '" chance="' + this.getChance() + '">';
            allXMLvoices.forEach((variable, index) => {
                fileXMLString += '\n' + variable;
            });
            fileXMLString += '\n' + indentation + '</voices>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setInterval(1000);
        this.setChance(1);

        this.allVoices = [];
        this.setTableToLocalStorage();

        this.setSentence("");
        this.setYell(false);
    }

    setDefaultTableValue = () => {
        this.setSentence("");
        this.setYell(false);
    }

    loadXMLVariableVoices = (variableName, variableValue) => {
        if (variableName === 'interval') {
            this.setInterval(variableValue);
        } else if (variableName === 'chance') {
            this.setChance(variableValue);
        }
    }

    loadXMLVariableVoice = (variableName, variableValue) => {
        if (variableName === 'sentence') {
            this.setSentence(variableValue);
        } else if (variableName === 'yell') {
            this.setYell(true);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    setTableToLocalStorage = () => {
        localStorage.setItem(this.getDataIndex() + "all", JSON.stringify(this.allVoices));
    }

    getTableFromLocalStorage = () => {
        if (localStorage.getItem(this.getDataIndex() + "all") !== null) {
            return JSON.parse(localStorage.getItem(this.getDataIndex() + "all"));
        } else {
            return [];
        }
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('interval') !== null) {
            this.setInterval(this.getValueFromLocalStorage('interval'));
        }
        if (this.getValueFromLocalStorage('chance') !== null) {
            this.setChance(this.getValueFromLocalStorage('chance'));
        }

        this.allVoices = this.getTableFromLocalStorage();

        if (this.getValueFromLocalStorage('sentence') !== null) {
            this.setSentence(this.getValueFromLocalStorage('sentence'));
        }
        if (this.getValueFromLocalStorage('yell') !== null) {
            if (this.getValueFromLocalStorage('yell') === 'true') {
                this.setYell(true);
            } else if (this.getValueFromLocalStorage('yell') === 'false') {
                this.setYell(false);
            }
        }
    }
}

export default VoicesData;
