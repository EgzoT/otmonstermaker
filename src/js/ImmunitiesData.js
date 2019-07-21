class ImmunitiesData {
    constructor() {
        this.holy = false;
        this.death = false;
        this.ice = false;
        this.fire = false;
        this.earth = false;
        this.energy = false;
        this.physical = false;
        this.lifeDrain = false;
        this.drown = false;
        this.paralyze = false;
        this.drunk = false;
        this.invisible = false;
        this.outfit = false;

        this.dataIndex = "IMMUNITIES_";
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

    setParalyze = (value) => {
        this.paralyze = value;
        this.setValueToLocalStorage('paralyze', value);
    }

    getParalyze = () => {
        return this.paralyze;
    }

    setDrunk = (value) => {
        this.drunk = value;
        this.setValueToLocalStorage('drunk', value);
    }

    getDrunk = () => {
        return this.drunk;
    }

    setInvisible = (value) => {
        this.invisible = value;
        this.setValueToLocalStorage('invisible', value);
    }

    getInvisible = () => {
        return this.invisible;
    }

    setOutfit = (value) => {
        this.outfit = value;
        this.setValueToLocalStorage('outfit', value);
    }

    getOutfit = () => {
        return this.outfit;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Generate XML

    getXML = (indentation = '\t') => {
        var fileXMLString = '';

        fileXMLString = fileXMLString + '\n' + indentation + '<immunities>';
        if (this.getHoly()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity holy="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity holy="0"/>';
        }
        if (this.getDeath()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity death="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity death="0"/>';
        }
        if (this.getIce()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity ice="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity ice="0"/>';
        }
        if (this.getFire()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity fire="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity fire="0"/>';
        }
        if (this.getEarth()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity earth="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity earth="0"/>';
        }
        if (this.getEnergy()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity energy="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity energy="0"/>';
        }
        if (this.getPhysical()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity physical="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity physical="0"/>';
        }
        if (this.getLifeDrain()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity lifedrain="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity lifedrain="0"/>';
        }
        if (this.getDrown()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity drown="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity drown="0"/>';
        }
        if (this.getParalyze()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity paralyze="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity paralyze="0"/>';
        }
        if (this.getDrunk()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity drunk="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity drunk="0"/>';
        }
        if (this.getInvisible()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity invisible="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity invisible="0"/>';
        }
        if (this.getOutfit()) {
            fileXMLString += '\n' + indentation + indentation + '<immunity outfit="1"/>';
        //} else {
        //  fileXMLString += '\n' + indentation + indentation + '<immunity outfit="0"/>';
        }
        fileXMLString += '\n' + indentation + '</immunities>';

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setHoly(false);
        this.setDeath(false);
        this.setIce(false);
        this.setFire(false);
        this.setEarth(false);
        this.setEnergy(false);
        this.setPhysical(false);
        this.setLifeDrain(false);
        this.setDrown(false);
        this.setParalyze(false);
        this.setDrunk(false);
        this.setInvisible(false);
        this.setOutfit(false);
    }

    loadXMLVariableImmunity = (variableName, variableValue) => {
        if (variableName === 'holy') {
            if (variableValue === '1') {
                this.setHoly(true);
            } else {
                this.setHoly(false);
            }
        } else if (variableName === 'death') {
            if (variableValue === '1') {
                this.setDeath(true);
            } else {
                this.setDeath(false);
            }
        } else if (variableName === 'ice') {
            if (variableValue === '1') {
                this.setIce(true);
            } else {
                this.setIce(false);
            }
        } else if (variableName === 'fire') {
            if (variableValue === '1') {
                this.setFire(true);
            } else {
                this.setFire(false);
            }
        } else if (variableName === 'earth') {
            if (variableValue === '1') {
                this.setEarth(true);
            } else {
                this.setEarth(false);
            }
        } else if (variableName === 'energy') {
            if (variableValue === '1') {
                this.setEnergy(true);
            } else {
                this.setEnergy(false);
            }
        } else if (variableName === 'physical') {
            if (variableValue === '1') {
                this.setPhysical(true);
            } else {
                this.setPhysical(false);
            }
        } else if (variableName === 'lifedrain') {
            if (variableValue === '1') {
                this.setLifeDrain(true);
            } else {
                this.setLifeDrain(false);
            }
        } else if (variableName === 'drown') {
            if (variableValue === '1') {
                this.setDrown(true);
            } else {
                this.setDrown(false);
            }
        } else if (variableName === 'paralyze') {
            if (variableValue === '1') {
                this.setParalyze(true);
            } else {
                this.setParalyze(false);
            }
        } else if (variableName === 'drunk') {
            if (variableValue === '1') {
                this.setDrunk(true);
            } else {
                this.setDrunk(false);
            }
        } else if (variableName === 'invisible') {
            if (variableValue === '1') {
                this.setInvisible(true);
            } else {
                this.setInvisible(false);
            }
        } else if (variableName === 'outfit') {
            if (variableValue === '1') {
                this.setOutfit(true);
            } else {
                this.setOutfit(false);
            }
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
            if (this.getValueFromLocalStorage('holy') === 'true') {
                this.setHoly(true);
            } else if (this.getValueFromLocalStorage('holy') === 'false') {
                this.setHoly(false);
            }
        }
        if (this.getValueFromLocalStorage('death') !== null) {
            if (this.getValueFromLocalStorage('death') === 'true') {
                this.setDeath(true);
            } else if (this.getValueFromLocalStorage('death') === 'false') {
                this.setDeath(false);
            }
        }
        if (this.getValueFromLocalStorage('ice') !== null) {
            if (this.getValueFromLocalStorage('ice') === 'true') {
                this.setIce(true);
            } else if (this.getValueFromLocalStorage('ice') === 'false') {
                this.setIce(false);
            }
        }
        if (this.getValueFromLocalStorage('fire') !== null) {
            if (this.getValueFromLocalStorage('fire') === 'true') {
                this.setFire(true);
            } else if (this.getValueFromLocalStorage('fire') === 'false') {
                this.setFire(false);
            }
        }
        if (this.getValueFromLocalStorage('earth') !== null) {
            if (this.getValueFromLocalStorage('earth') === 'true') {
                this.setEarth(true);
            } else if (this.getValueFromLocalStorage('earth') === 'false') {
                this.setEarth(false);
            }
        }
        if (this.getValueFromLocalStorage('energy') !== null) {
            if (this.getValueFromLocalStorage('energy') === 'true') {
                this.setEnergy(true);
            } else if (this.getValueFromLocalStorage('energy') === 'false') {
                this.setEnergy(false);
            }
        }
        if (this.getValueFromLocalStorage('physical') !== null) {
            if (this.getValueFromLocalStorage('physical') === 'true') {
                this.setPhysical(true);
            } else if (this.getValueFromLocalStorage('physical') === 'false') {
                this.setPhysical(false);
            }
        }
        if (this.getValueFromLocalStorage('lifeDrain') !== null) {
            if (this.getValueFromLocalStorage('lifeDrain') === 'true') {
                this.setLifeDrain(true);
            } else if (this.getValueFromLocalStorage('lifeDrain') === 'false') {
                this.setLifeDrain(false);
            }
        }
        if (this.getValueFromLocalStorage('drown') !== null) {
            if (this.getValueFromLocalStorage('drown') === 'true') {
                this.setDrown(true);
            } else if (this.getValueFromLocalStorage('drown') === 'false') {
                this.setDrown(false);
            }
        }
        if (this.getValueFromLocalStorage('paralyze') !== null) {
            if (this.getValueFromLocalStorage('paralyze') === 'true') {
                this.setParalyze(true);
            } else if (this.getValueFromLocalStorage('paralyze') === 'false') {
                this.setParalyze(false);
            }
        }
        if (this.getValueFromLocalStorage('drunk') !== null) {
            if (this.getValueFromLocalStorage('drunk') === 'true') {
                this.setDrunk(true);
            } else if (this.getValueFromLocalStorage('drunk') === 'false') {
                this.setDrunk(false);
            }
        }
        if (this.getValueFromLocalStorage('invisible') !== null) {
            if (this.getValueFromLocalStorage('invisible') === 'true') {
                this.setInvisible(true);
            } else if (this.getValueFromLocalStorage('invisible') === 'false') {
                this.setInvisible(false);
            }
        }
        if (this.getValueFromLocalStorage('outfit') !== null) {
            if (this.getValueFromLocalStorage('outfit') === 'true') {
                this.setOutfit(true);
            } else if (this.getValueFromLocalStorage('outfit') === 'false') {
                this.setOutfit(false);
            }
        }
    }
}

export default ImmunitiesData;
