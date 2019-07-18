class ScriptData {
    constructor() {
        this.checked = false;
        this.script = "";

        this.dataIndex = "SCRIPT_";
    }

    setChecked = (value) => {
        this.checked = value;
        this.setValueToLocalStorage('checked', value);
    }

    getChecked = () => {
        return this.checked;
    }

    setScript = (value) => {
        this.script = value;
        this.setValueToLocalStorage('script', value);
    }

    getScript = () => {
        return this.script;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Generate XML

    getXML = (indentation = '\t') => {
        var fileXMLString = '';

        if (this.getChecked()) {
            fileXMLString += '\n' + indentation + '<script>';
            fileXMLString += '\n' + indentation + indentation + '<event name="' + this.getScript() + '"/>';
            fileXMLString += '\n' + indentation + '</script>';
        }

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setChecked(false);
        this.setScript("");
    }

    loadXMLVariableEvent = (variableName, variableValue) => {
        if (variableName === 'name') {
            this.setChecked(true);
            this.setScript(variableValue);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('checked') !== null) {
            if (this.getValueFromLocalStorage('checked') === 'true') {
                this.setChecked(true);
            } else if (this.getValueFromLocalStorage('checked') === 'false') {
                this.setChecked(false);
            }
        }

        if (this.getValueFromLocalStorage('script') !== null) {
            this.setScript(this.getValueFromLocalStorage('script'));
        }
    }
}

export default ScriptData;
