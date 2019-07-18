class FlagsData {
    constructor() {
        this.summonable = false;
        this.attackable = false;
        this.hostile = false;
        this.illusionable = false;
        this.convinceable = false;
        this.pushable = false;
        this.canpushitems = false;
        this.canpushcreatures = false;
        this.targetdistance = 1;
        this.staticattack = 90;
        this.hidehealth = false;
        this.lightcolor = "0";
        this.lightlevel = 1;
        this.runonhealth = 25;

        this.dataIndex = "FLAGS_";
    }

    setSummonable = (value) => {
        this.summonable = value;
        this.setValueToLocalStorage('summonable', value);
    }

    getSummonable = () => {
        return this.summonable;
    }

    setAttackable = (value) => {
        this.attackable = value;
        this.setValueToLocalStorage('attackable', value);
    }

    getAttackable = () => {
        return this.attackable;
    }

    setHostile = (value) => {
        this.hostile = value;
        this.setValueToLocalStorage('hostile', value);
    }

    getHostile = () => {
        return this.hostile;
    }

    setIllusionable = (value) => {
        this.illusionable = value;
        this.setValueToLocalStorage('illusionable', value);
    }

    getIllusionable = () => {
        return this.illusionable;
    }

    setConvinceable = (value) => {
        this.convinceable = value;
        this.setValueToLocalStorage('convinceable', value);
    }

    getConvinceable = () => {
        return this.convinceable;
    }

    setPushable = (value) => {
        this.pushable = value;
        this.setValueToLocalStorage('pushable', value);
    }

    getPushable = () => {
        return this.pushable;
    }

    setCanpushitems = (value) => {
        this.canpushitems = value;
        this.setValueToLocalStorage('canpushitems', value);
    }

    getCanpushitems = () => {
        return this.canpushitems;
    }

    setCanpushcreatures = (value) => {
        this.canpushcreatures = value;
        this.setValueToLocalStorage('canpushcreatures', value);
    }

    getCanpushcreatures = () => {
        return this.canpushcreatures;
    }

    setTargetdistance = (value) => {
        this.targetdistance = value;
        this.setValueToLocalStorage('targetdistance', value);
    }

    getTargetdistance = () => {
        return this.targetdistance;
    }

    setStaticattack = (value) => {
        this.staticattack = value;
        this.setValueToLocalStorage('staticattack', value);
    }

    getStaticattack = () => {
        return this.staticattack;
    }

    setHidehealth = (value) => {
        this.hidehealth = value;
        this.setValueToLocalStorage('hidehealth', value);
    }

    getHidehealth = () => {
        return this.hidehealth;
    }

    setLightcolor = (value) => {
        this.lightcolor = value;
        this.setValueToLocalStorage('lightcolor', value);
    }

    getLightcolor = () => {
        return this.lightcolor;
    }

    setLightlevel = (value) => {
        this.lightlevel = value;
        this.setValueToLocalStorage('lightlevel', value);
    }

    getLightlevel = () => {
        return this.lightlevel;
    }

    setRunonhealth = (value) => {
        this.runonhealth = value;
        this.setValueToLocalStorage('runonhealth', value);
    }

    getRunonhealth = () => {
        return this.runonhealth;
    }

    getDataIndex = () => {
        return this.dataIndex;
    }

    //Generate XML

    getXML = (indentation = '\t') => {
        var fileXMLString = '';

        fileXMLString += '\n' + indentation + '<flags>';
        fileXMLString += '\n' + indentation + indentation + '<flag summonable="' + Number(this.getSummonable()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag attackable="' + Number(this.getAttackable()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag hostile="' + Number(this.getHostile()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag illusionable="' + Number(this.getIllusionable()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag convinceable="' + Number(this.getConvinceable()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag pushable="' + Number(this.getPushable()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag canpushitems="' + Number(this.getCanpushitems()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag canpushcreatures="' + Number(this.getCanpushcreatures()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag targetdistance="' + this.getTargetdistance() + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag staticattack="' + this.getStaticattack() + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag hidehealth="' + Number(this.getHidehealth()) + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag lightcolor="' + this.getLightcolor() + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag lightlevel="' + this.getLightlevel() + '"/>';
        fileXMLString += '\n' + indentation + indentation + '<flag runonhealth="' + this.getRunonhealth() + '"/>';
        fileXMLString += '\n' + indentation + '</flags>';

        return fileXMLString;
    }

    setDefaultValue = () => {
        this.setSummonable(false);
        this.setAttackable(false);
        this.setHostile(false);
        this.setIllusionable(false);
        this.setConvinceable(false);
        this.setPushable(false);
        this.setCanpushitems(false);
        this.setCanpushcreatures(false);
        this.setTargetdistance(1);
        this.setStaticattack(90);
        this.setHidehealth(false);
        this.setLightcolor("0");
        this.setLightlevel(1);
        this.setRunonhealth(25);
    }

    loadXMLVariableFlag = (variableName, variableValue) => {
        if (variableName === 'summonable') {
            if (variableValue === '1') {
                this.setSummonable(true);
            } else {
                this.setSummonable(false);
            }
        } else if (variableName === 'attackable') {
            if (variableValue === '1') {
                this.setAttackable(true);
            } else {
                this.setAttackable(false);
            }
        } else if (variableName === 'hostile') {
            if (variableValue === '1') {
                this.setHostile(true);
            } else {
                this.setHostile(false);
            }
        } else if (variableName === 'illusionable') {
            if (variableValue === '1') {
                this.setIllusionable(true);
            } else {
                this.setIllusionable(false);
            }
        } else if (variableName === 'convinceable') {
            if (variableValue === '1') {
                this.setConvinceable(true);
            } else {
                this.setConvinceable(false);
            }
        } else if (variableName === 'pushable') {
            if (variableValue === '1') {
                this.setPushable(true);
            } else {
                this.setPushable(false);
            }
        } else if (variableName === 'canpushitems') {
            if (variableValue === '1') {
                this.setCanpushitems(true);
            } else {
                this.setCanpushitems(false);
            }
        } else if (variableName === 'canpushcreatures') {
            if (variableValue === '1') {
                this.setCanpushcreatures(true);
            } else {
                this.setCanpushcreatures(false);
            }
        } else if (variableName === 'targetdistance') {
            this.setTargetdistance(variableValue);
        } else if (variableName === 'staticattack') {
            this.setStaticattack(variableValue);
        } else if (variableName === 'hidehealth') {
            if (variableValue === '1') {
                this.setHidehealth(true);
            } else {
                this.setHidehealth(false);
            }
        } else if (variableName === 'lightcolor') {
            this.setLightcolor(variableValue);
        } else if (variableName === 'lightlevel') {
            this.setLightlevel(variableValue);
        } else if (variableName === 'runonhealth') {
            this.setRunonhealth(variableValue);
        }
    }

    setValueToLocalStorage = (key, value) => {
        localStorage.setItem(this.getDataIndex() + key, value);
    }

    getValueFromLocalStorage = (key) => {
        return localStorage.getItem(this.getDataIndex() + key);
    }

    loadValuesFromLocalStorage = () => {
        if (this.getValueFromLocalStorage('summonable') !== null) {
            if (this.getValueFromLocalStorage('summonable') === 'true') {
                this.setSummonable(true);
            } else if (this.getValueFromLocalStorage('summonable') === 'false') {
                this.setSummonable(false);
            }
        }

        if (this.getValueFromLocalStorage('attackable') !== null) {
            if (this.getValueFromLocalStorage('attackable') === 'true') {
                this.setAttackable(true);
            } else if (this.getValueFromLocalStorage('attackable') === 'false') {
                this.setAttackable(false);
            }
        }

        if (this.getValueFromLocalStorage('hostile') !== null) {
            if (this.getValueFromLocalStorage('hostile') === 'true') {
                this.setHostile(true);
            } else if (this.getValueFromLocalStorage('hostile') === 'false') {
                this.setHostile(false);
            }
        }

        if (this.getValueFromLocalStorage('illusionable') !== null) {
            if (this.getValueFromLocalStorage('illusionable') === 'true') {
                this.setIllusionable(true);
            } else if (this.getValueFromLocalStorage('illusionable') === 'false') {
                this.setIllusionable(false);
            }
        }

        if (this.getValueFromLocalStorage('convinceable') !== null) {
            if (this.getValueFromLocalStorage('convinceable') === 'true') {
                this.setConvinceable(true);
            } else if (this.getValueFromLocalStorage('convinceable') === 'false') {
                this.setConvinceable(false);
            }
        }

        if (this.getValueFromLocalStorage('pushable') !== null) {
            if (this.getValueFromLocalStorage('pushable') === 'true') {
                this.setPushable(true);
            } else if (this.getValueFromLocalStorage('pushable') === 'false') {
                this.setPushable(false);
            }
        }

        if (this.getValueFromLocalStorage('canpushitems') !== null) {
            if (this.getValueFromLocalStorage('canpushitems') === 'true') {
                this.setCanpushitems(true);
            } else if (this.getValueFromLocalStorage('canpushitems') === 'false') {
                this.setCanpushitems(false);
            }
        }

        if (this.getValueFromLocalStorage('canpushcreatures') !== null) {
            if (this.getValueFromLocalStorage('canpushcreatures') === 'true') {
                this.setCanpushcreatures(true);
            } else if (this.getValueFromLocalStorage('canpushcreatures') === 'false') {
                this.setCanpushcreatures(false);
            }
        }

        if (this.getValueFromLocalStorage('targetdistance') !== null) {
            this.setTargetdistance(this.getValueFromLocalStorage('targetdistance'));
        }

        if (this.getValueFromLocalStorage('staticattack') !== null) {
            this.setStaticattack(this.getValueFromLocalStorage('staticattack'));
        }

        if (this.getValueFromLocalStorage('hidehealth') !== null) {
            if (this.getValueFromLocalStorage('hidehealth') === 'true') {
                this.setHidehealth(true);
            } else if (this.getValueFromLocalStorage('hidehealth') === 'false') {
                this.setHidehealth(false);
            }
        }

        if (this.getValueFromLocalStorage('lightcolor') !== null) {
            this.setLightcolor(this.getValueFromLocalStorage('lightcolor'));
        }

        if (this.getValueFromLocalStorage('lightlevel') !== null) {
            this.setLightlevel(this.getValueFromLocalStorage('lightlevel'));
        }

        if (this.getValueFromLocalStorage('runonhealth') !== null) {
            this.setRunonhealth(this.getValueFromLocalStorage('runonhealth'));
        }
    }
}

export default FlagsData;
