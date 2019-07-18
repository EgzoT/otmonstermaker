class ElementsData {
    constructor() {
        this.holy = 0;
        this.death = 0;
        this.ice = 0;
        this.fire = 0;
        this.earth = 0;
        this.energy = 0;
        this.physical = 0;
        this.lifeDrain = 0;
        this.drown = 0;

        this.dataIndex = "ELEMENTS_";
    }

    setHoly = (value) => {
        this.holy = value;
        this.setValueToLocalStorage('holy', value);
    }

    getHoly = () => {
        return this.holy;
    }

    setDeath = (value) => {
        this.death = value;
        this.setValueToLocalStorage('death', value);
    }

    getDeath = () => {
        return this.death;
    }

    setIce = (value) => {
        this.ice = value;
        this.setValueToLocalStorage('ice', value);
    }

    getIce = () => {
        return this.ice;
    }

    setFire = (value) => {
        this.fire = value;
        this.setValueToLocalStorage('fire', value);
    }

    getFire = () => {
        return this.fire;
    }

    setEarth = (value) => {
        this.earth = value;
        this.setValueToLocalStorage('earth', value);
    }

    getEarth = () => {
        return this.earth;
    }

    setEnergy = (value) => {
        this.energy = value;
        this.setValueToLocalStorage('energy', value);
    }

    getEnergy = () => {
        return this.energy;
    }

    setPhysical = (value) => {
        this.physical = value;
        this.setValueToLocalStorage('physical', value);
    }

    getPhysical = () => {
        return this.physical;
    }

    setLifeDrain = (value) => {
        this.lifeDrain = value;
        this.setValueToLocalStorage('lifeDrain', value);
    }

    getLifeDrain = () => {
        return this.lifeDrain;
    }

    setDrown = (value) => {
        this.drown = value;
        this.setValueToLocalStorage('drown', value);
    }

    getDrown = () => {
        return this.drown;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Generate XML

    getXML = (indentation = '\t') => {
        var fileXMLString = '';

        fileXMLString += '\n' + indentation + '<elements>';
        if (this.getHoly() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element holyPercent="' + this.getHoly() + '"/>';
        }
        if (this.getDeath() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element deathPercent="' + this.getDeath() + '"/>';
        }
        if (this.getIce() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element icePercent="' + this.getIce() + '"/>';
        }
        if (this.getFire() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element firePercent="' + this.getFire() + '"/>';
        }
        if (this.getEarth() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element earthPercent="' + this.getEarth() + '"/>';
        }
        if (this.getEnergy() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element energyPercent="' + this.getEnergy() + '"/>';
        }
        if (this.getPhysical() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element physicalPercent="' + this.getPhysical() + '"/>';
        }
        if (this.getLifeDrain() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element lifedrainPercent="' + this.getLifeDrain() + '"/>';
        }
        if (this.getDrown() !== 0) {
            fileXMLString += '\n' + indentation + indentation + '<element drownPercent="' + this.getDrown() + '"/>';
        }
        fileXMLString += '\n' + indentation + '</elements>';

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setHoly(0);
        this.setDeath(0);
        this.setIce(0);
        this.setFire(0);
        this.setEarth(0);
        this.setEnergy(0);
        this.setPhysical(0);
        this.setLifeDrain(0);
        this.setDrown(0);
    }

    loadXMLVariableElement = (variableName, variableValue) => {
        if (variableName === 'holyPercent') {
            this.setHoly(variableValue);
        } else if (variableName === 'deathPercent') {
            this.setDeath(variableValue);
        } else if (variableName === 'icePercent') {
            this.setIce(variableValue);
        } else if (variableName === 'firePercent') {
            this.setFire(variableValue);
        } else if (variableName === 'earthPercent') {
            this.setEarth(variableValue);
        } else if (variableName === 'energyPercent') {
            this.setEnergy(variableValue);
        } else if (variableName === 'physicalPercent') {
            this.setPhysical(variableValue);
        } else if (variableName === 'lifedrainPercent') {
            this.setLifeDrain(variableValue);
        } else if (variableName === 'drownPercent') {
            this.setDrown(variableValue);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('holy') !== null) {
            this.setHoly(this.getValueFromLocalStorage('holy'));
        }
        if (this.getValueFromLocalStorage('death') !== null) {
            this.setDeath(this.getValueFromLocalStorage('death'));
        }
        if (this.getValueFromLocalStorage('ice') !== null) {
            this.setIce(this.getValueFromLocalStorage('ice'));
        }
        if (this.getValueFromLocalStorage('fire') !== null) {
            this.setFire(this.getValueFromLocalStorage('fire'));
        }
        if (this.getValueFromLocalStorage('earth') !== null) {
            this.setEarth(this.getValueFromLocalStorage('earth'));
        }
        if (this.getValueFromLocalStorage('energy') !== null) {
            this.setEnergy(this.getValueFromLocalStorage('energy'));
        }
        if (this.getValueFromLocalStorage('physical') !== null) {
            this.setPhysical(this.getValueFromLocalStorage('physical'));
        }
        if (this.getValueFromLocalStorage('lifeDrain') !== null) {
            this.setLifeDrain(this.getValueFromLocalStorage('lifeDrain'));
        }
        if (this.getValueFromLocalStorage('drown') !== null) {
            this.setDrown(this.getValueFromLocalStorage('drown'));
        }
    }
}

export default ElementsData;
