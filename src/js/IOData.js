class IOData {
    constructor() {
        this.ownNameCheckbox = false;
        this.ownName = '';

        this.name = '';
        this.fileText = '';

        this.dataIndex = "IO_";
    }

    setOwnNameCheckbox = (value) => {
        this.ownNameCheckbox = value;
        this.setValueToLocalStorage('ownNameCheckbox', value);
    }

    getOwnNameCheckbox = () => {
        return this.ownNameCheckbox;
    }

    setOwnName = (value) => {
        this.ownName = value;
        this.setValueToLocalStorage('ownName', value);
        if (this.getOwnNameCheckbox()) {
            this.setName(value);
        }
    }

    getOwnName = () => {
        return this.ownName;
    }

    setName = (value) => {
        this.name = value;
    }

    getName = () => {
        return this.name;
    }

    setFileText = (value) => {
        this.fileText = value;
    }

    getFileText = () => {
        return this.fileText;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    setDefaultValue = () => {
        this.setOwnNameCheckbox(false);
        this.setOwnName('');

        this.setName(null);
    }

    loadFile = (file) => {
        var reader = new FileReader();

        reader.addEventListener('load', (e) => {
            this.setFileText(e.target.result);
        });
        
        reader.readAsBinaryString(file);
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('ownNameCheckbox') !== null) {
            if (this.getValueFromLocalStorage('ownNameCheckbox') === 'true') {
                this.setOwnNameCheckbox(true);
            } else if (this.getValueFromLocalStorage('ownNameCheckbox') === 'false') {
                this.setOwnNameCheckbox(false);
            }
        }
        if (this.getValueFromLocalStorage('ownName') !== null) {
            this.setOwnName(this.getValueFromLocalStorage('ownName'));
        }
    }
}

export default IOData;
