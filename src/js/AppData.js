import MonsterData from './MonsterData.js'
import FlagsData from './FlagsData.js'
import ScriptData from './ScriptData.js'
import AttacksData from './AttacksData.js'
import DefensesData from './DefensesData.js'
import ElementsData from './ElementsData.js'
import ImmunitiesData from './ImmunitiesData.js'
import SummonsData from './SummonsData.js'
import VoicesData from './VoicesData.js'
import LootData from './LootData.js'
import IOData from './IOData.js'

class AppData {
    constructor() {
        this.monsterData = new MonsterData();
        this.flagsData = new FlagsData();
        this.scriptData = new ScriptData();
        this.attacksData = new AttacksData();
        this.defensesData = new DefensesData();
        this.elementsData = new ElementsData();
        this.immunitiesData = new ImmunitiesData();
        this.summonsData = new SummonsData();
        this.voicesData = new VoicesData();
        this.lootData = new LootData();
        this.ioData = new IOData();
    }

    getMonster = () => {
        return this.monsterData;
    }

    getFlags = () => {
        return this.flagsData;
    }

    getScript = () => {
        return this.scriptData;
    }

    getAttacks = () => {
        return this.attacksData;
    }

    getDefenses = () => {
        return this.defensesData;
    }

    getElements = () => {
        return this.elementsData;
    }

    getImmunities = () => {
        return this.immunitiesData;
    }

    getSummons = () => {
        return this.summonsData;
    }

    getVoices = () => {
        return this.voicesData;
    }

    getLoot = () => {
        return this.lootData;
    }

    getIO = () => {
        return this.ioData;
    }

    //Generate XML

    getXML = () => {
        var indentation = '\t';
        var fileXMLString = '';

        fileXMLString += '<?xml version="1.0" encoding="UTF-8"?>';
        fileXMLString += this.getMonster().getXML();
        fileXMLString += this.getFlags().getXML();
        fileXMLString += this.getScript().getXML();
        fileXMLString += this.getAttacks().getXML(indentation, indentation + indentation);
        fileXMLString += this.getDefenses().getXML(indentation, indentation + indentation);
        fileXMLString += this.getElements().getXML();
        fileXMLString += this.getImmunities().getXML();
        fileXMLString += this.getSummons().getXML(indentation, indentation + indentation);
        fileXMLString += this.getVoices().getXML(indentation, indentation + indentation);
        fileXMLString += this.getLoot().getXML(indentation, indentation + indentation);
        fileXMLString += '\n</monster>';

        return fileXMLString;
    }

    //Download

    downloadFile = () => {
        var a = document.createElement('a');
        a.href = 'data:text/plain;base64,' + btoa(this.getXML());
        a.textContent = 'download';
        a.download = this.getIO().getName() + ".xml";
        a.click();
    }

    setDefaultValue = () => {
        this.getMonster().setDefaultValue();
        this.getFlags().setDefaultValue();
        this.getScript().setDefaultValue();
        this.getAttacks().setDefaultValue();
        this.getDefenses().setDefaultValue();
        this.getElements().setDefaultValue();
        this.getImmunities().setDefaultValue();
        this.getSummons().setDefaultValue();
        this.getVoices().setDefaultValue();
        this.getLoot().setDefaultValue();
        this.getIO().setDefaultValue();
    }

    loadDataFromXMLToTable = (sector, variableName, variableValue, preSector) => {
        if (sector === 'monster') {
            this.getMonster().loadXMLVariableMonster(variableName, variableValue);
        } else if (sector === 'health') {
            this.getMonster().loadXMLVariableHealth(variableName, variableValue);
        } else if (sector === 'look') {
            this.getMonster().loadXMLVariableLook(variableName, variableValue);
        } else if (sector === 'targetchange') {
            this.getMonster().loadXMLVariableTargetchange(variableName, variableValue);
        } else if (sector === 'strategy') {
            this.getMonster().loadXMLVariableStrategy(variableName, variableValue);
        } else if (sector === 'flag') {
            this.getFlags().loadXMLVariableFlag(variableName, variableValue);
        } else if (sector === 'event') {
            this.getScript().loadXMLVariableEvent(variableName, variableValue);
        } else if (sector === 'attack') {
            this.getAttacks().loadXMLVariableAttack(variableName, variableValue);
        } else if (sector === 'defenses') {
            this.getDefenses().loadXMLVariableDefenses(variableName, variableValue);
        } else if (sector === 'defense') {
            this.getDefenses().loadXMLVariableDefense(variableName, variableValue);
        } else if (sector === 'element') {
            this.getElements().loadXMLVariableElement(variableName, variableValue);
        } else if (sector === 'immunity') {
            this.getImmunities().loadXMLVariableImmunity(variableName, variableValue);
        } else if (sector === 'summons') {
            this.getSummons().loadXMLVariableSummons(variableName, variableValue);
        } else if (sector === 'summon') {
            this.getSummons().loadXMLVariableSummon(variableName, variableValue);
        } else if (sector === 'voices') {
            this.getVoices().loadXMLVariableVoices(variableName, variableValue);
        } else if (sector === 'voice') {
            this.getVoices().loadXMLVariableVoice(variableName, variableValue);
        } else if (sector === 'item') {
            this.getLoot().loadXMLVariableItem(variableName, variableValue);
        } else if (sector === 'attribute') {
            if (preSector === 'attack') {
                this.getAttacks().loadXMLVariableAttribute(variableName, variableValue);
            } else if (preSector === 'defense') {
                this.getDefenses().loadXMLVariableAttribute(variableName, variableValue);
            }
        }
    }

    parseXMLFile = () => {
        var itemsXMLString = [];

        this.getIO().getFileText().split('\n').forEach(line => {
            itemsXMLString.push(line.replace(/\t/g, ''));
        });

        var parseSectors = [];
        itemsXMLString.forEach(line => {
            let startSign = line.search('<');
            if (startSign >= 0) {
                if (line.substring(startSign + 1, startSign + 2) === '/') {
                    let endSign = (startSign + 1) + line.substring(startSign + 1, line.length).search('>');
                    if (endSign >= 0) {
                        if (parseSectors[parseSectors.length - 1] === line.substring(startSign + 2, endSign - 1)) {
                            if (parseSectors[parseSectors.length - 1] === 'attack') {
                                this.getAttacks().addToAttacks();
                                this.getAttacks().setDefaultTableValue();
                            } else if (parseSectors[parseSectors.length - 1] === 'defense') {
                                this.getDefenses().addToDefenses();
                                this.getDefenses().setDefaultTableValue();
                            } else if (parseSectors[parseSectors.length - 1] === 'summon') {
                                this.getSummons().addToSummons();
                                this.getSummons().setDefaultTableValue();
                            } else if (parseSectors[parseSectors.length - 1] === 'voice') {
                                this.getVoices().addToVoices();
                                this.getVoices().setDefaultTableValue();
                            } else if (parseSectors[parseSectors.length - 1] === 'item') {
                                this.getLoot().addToLoot();
                                this.getLoot().setDefaultTableValue();
                            }
                            parseSectors = parseSectors.splice(0, parseSectors.length - 1);
                        }
                    }
                } else if (line.substring(startSign + 1, startSign + 2) === '?') {
                    //ignore
                } else if (line.substring(startSign + 1, startSign + 2) === '!') {
                    //ignore
                } else {
                    let nextSign = line.substring(startSign + 1, line.length - 1).search(' ');
                    let endSign = line.substring(startSign + 1, line.length - 1).search('>');
                    if (nextSign && nextSign < endSign) {
                        parseSectors.push(line.substring(startSign + 1, (startSign + 1) + line.substring(startSign, line.length - 1).search(' ') - 1));
                        let isStartComment = line.search('<!--');
                        let isEndComment = line.search('-->');
                        //let commentText = '';
                        let prePreparedText = '';
                        if (isStartComment !== -1 && parseSectors[parseSectors.length - 1] === 'item') {
                            prePreparedText = line.substring(line.substring(startSign, line.length - 1).search(' '), isStartComment - 2);
                            this.getLoot().setCommentCheckbox(true);
                            this.getLoot().setComment(line.substring(isStartComment + 4, isEndComment - 2));
                        } else {
                            prePreparedText = line.substring(line.substring(startSign, line.length - 1).search(' '), line.length - 1);
                        }
                        let preparedText = '';
                        let startNewString = false;
                        for (let i = 1; i < prePreparedText.length; i++) {
                            if (prePreparedText.substring(i, i + 1) === '"') {
                                if (!startNewString) {
                                    startNewString = true;
                                    preparedText += prePreparedText.substring(i, i + 1);
                                } else {
                                    startNewString = false;
                                    preparedText += prePreparedText.substring(i, i + 1);
                                }
                            } else if (prePreparedText.substring(i, i + 1) === ' ' && !startNewString) {
                                //ignore
                            } else {
                                preparedText += prePreparedText.substring(i, i + 1);
                            }
                        }
                        while (preparedText !== '') {
                            let findNextValue = preparedText.search('=');
                            if (findNextValue !== -1) {
                                let variableName = preparedText.substring(0, findNextValue);
                                let firstQuote = preparedText.search('"');
                                let secondQuote = (firstQuote + 1) + preparedText.substring(firstQuote + 1, preparedText.length).search('"');
                                let variableValue = preparedText.substring(firstQuote + 1, secondQuote);

                                this.loadDataFromXMLToTable(parseSectors[parseSectors.length - 1], variableName, variableValue, parseSectors[parseSectors.length - 1]);

                                preparedText = preparedText.substring(secondQuote + 1, preparedText.length);
                            } else if (preparedText.search('/>') !== -1) {
                                if (parseSectors[parseSectors.length - 1] === 'attack') {
                                    this.getAttacks().addToAttacks();
                                    this.getAttacks().setDefaultTableValue();
                                } else if (parseSectors[parseSectors.length - 1] === 'defense') {
                                    this.getDefenses().addToDefenses();
                                    this.getDefenses().setDefaultTableValue();
                                } else if (parseSectors[parseSectors.length - 1] === 'summon') {
                                    this.getSummons().addToSummons();
                                    this.getSummons().setDefaultTableValue();
                                } else if (parseSectors[parseSectors.length - 1] === 'voice') {
                                    this.getVoices().addToVoices();
                                    this.getVoices().setDefaultTableValue();
                                } else if (parseSectors[parseSectors.length - 1] === 'item') {
                                    this.getLoot().addToLoot();
                                    this.getLoot().setDefaultTableValue();
                                }
                                parseSectors = parseSectors.splice(0, parseSectors.length - 1);
                                break;
                            } else if (preparedText.search('>') !== -1) {
                                break;
                            } else {
                                break;
                            }
                        }
                    } else {
                        if (endSign) {
                            parseSectors.push(line.substring(startSign + 1, endSign - 1));
                        }
                    }
                }
            }
        });
    }

    getLineMonstersXML = () => {
        return '<monster name="' + this.getMonster().getName() + '"  file="' + this.getIO().getName() + '.xml"  />';
    }

    loadValuesFromLocalStorage = () => {
        this.getMonster().loadValuesFromLocalStorage();
        this.getFlags().loadValuesFromLocalStorage();
        this.getScript().loadValuesFromLocalStorage();
        this.getAttacks().loadValuesFromLocalStorage();
        this.getDefenses().loadValuesFromLocalStorage();
        this.getElements().loadValuesFromLocalStorage();
        this.getImmunities().loadValuesFromLocalStorage();
        this.getSummons().loadValuesFromLocalStorage();
        this.getVoices().loadValuesFromLocalStorage();
        this.getLoot().loadValuesFromLocalStorage();
        this.getIO().loadValuesFromLocalStorage();
        //Update file name
        if (!this.getIO().getOwnNameCheckbox()) {
            this.getIO().setName(this.getMonster().getName());
        }
    }
}

export default AppData;
