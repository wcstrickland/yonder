
const fs = require('fs')

let classJson = fs.readFileSync('./all_Classes.json')
classJson = JSON.parse(classJson)
let classes = classJson["classes"]

let classObject = {
    "Cleric": {"autolevel":[]},
    "Barbarian": {"autolevel":[]},
    "Paladin": {"autolevel":[]},
    "Sorcerer": {"autolevel":[]},
    "Rogue": {"autolevel":[]},
    "Bard": {"autolevel":[]},
    "Fighter": {"autolevel":[]},
    "Druid": {"autolevel":[]},
    "Ranger": {"autolevel":[]},
    "Warlock": {"autolevel":[]},
    "Wizard": {"autolevel":[]}
}

function addToClass(fromObj, targetObj){
    for(let key of Object.keys(fromObj)){
        if(key === "name"){
            continue
        }
        if(key === "autolevel"){
            for(let thing of fromObj["autolevel"]){
                let combinedTxt = ""
                if(thing["feature"] && thing["feature"]["text"]){
                    combinedTxt = thing["feature"]["text"].join("_ _ _ _")
                    //thing.feature["text"] = combinedTxt
                    targetObj["autolevel"].push(thing)
                }
            }
            continue
        }
        targetObj[key] = fromObj[key]
    }
}

for (let cla of classes) {
    switch (cla.name) {
        case "Cleric":
            addToClass(cla,classObject.Cleric)
            break
        case "Barbarian":
            addToClass(cla,classObject.Barbarian)
            break
        case "Paladin":
            addToClass(cla,classObject.Paladin)
            break
        case "Sorcerer":
            addToClass(cla,classObject.Sorcerer)
            break
        case "Rogue":
            addToClass(cla,classObject.Rogue)
            break
        case "Bard":
            addToClass(cla,classObject.Bard)
            break
        case "Fighter":
            addToClass(cla,classObject.Fighter)
            break
        case "Druid":
            addToClass(cla,classObject.Druid)
            break
        case "Ranger":
            addToClass(cla,classObject.Ranger)
            break
        case "Warlock":
            addToClass(cla,classObject.Warlock)
            break
        case "Wizard":
            addToClass(cla,classObject.Wizard)
            break
        default:
            break;
    }
}

let resultString = JSON.stringify(classObject)
fs.writeFileSync("./new_classes.json", resultString)
