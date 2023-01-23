import React, { useState } from 'react';
import StatLine from '../StatLine/StatLine';
import './CharSheet.css';
import SkillCheckList from '../SkillCheckList/SkillCheckList'
import CombatStats from '../CombatStats/CombatStats';
import OutComeModal from '../OutComeModal/OutComeModal'
import bob from '../../resource/json/bob.json'
import CharacterDetail from '../CharacterDetail/CharacterDetail';

export default function CharSheet(props) {

    function parseCharacterSheet(charSheet) {
        const abilityModifiers = {
            "1": -5,
            "2": -4,
            "3": -4,
            "4": -3,
            "5": -3,
            "6": -2,
            "7": -2,
            "8": -1,
            "9": -1,
            "10": 0,
            "11": 0,
            "12": 1,
            "13": 1,
            "14": 2,
            "15": 2,
            "16": 3,
            "17": 3,
            "18": 4,
            "19": 4,
            "20": 5,
            "21": 5,
            "22": 6,
            "23": 6,
            "24": 7,
        }

        let statline = []
        statline.push({ "stat": "str", "statModifier": abilityModifiers[charSheet.str.toString()], "statValue": charSheet.str })
        statline.push({ "stat": "dex", "statModifier": abilityModifiers[charSheet.dex.toString()], "statValue": charSheet.dex })
        statline.push({ "stat": "con", "statModifier": abilityModifiers[charSheet.con.toString()], "statValue": charSheet.con })
        statline.push({ "stat": "int", "statModifier": abilityModifiers[charSheet.int.toString()], "statValue": charSheet.int })
        statline.push({ "stat": "wis", "statModifier": abilityModifiers[charSheet.wis.toString()], "statValue": charSheet.wis })
        statline.push({ "stat": "cha", "statModifier": abilityModifiers[charSheet.cha.toString()], "statValue": charSheet.cha })

        let combatStats = {
            "ac": charSheet.ac,
            "hp": charSheet.hp,
            "maxHp": charSheet.hp,
            "speed": charSheet.speed,
            "prof": charSheet.prof,
            "initiative": charSheet.initiative
        }
        let actions = charSheet.action
        let name = charSheet["name"]
        let skills = charSheet.skills

        return { "statLine": statline, "combatStats": combatStats, "actions": actions, "name": name, "skills": skills}
    }

    let character = parseCharacterSheet(bob)

    const [modalVisible, setModalVisible] = useState(false)

    function closeModal() {
        setModalVisible(false)
    }


    return (
        <>
            <StatLine stats={character["statLine"]} />
            <CombatStats stats={character["combatStats"]} />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div className='grid' style={{ width: "75%" }}>
                    <div>
                        <SkillCheckList skills={character["skills"]} profBonus={character["combatStats"]["prof"]}/>
                    </div>
                    <div>
                        <CharacterDetail entity={bob}/>
                    </div>
                </div>
            </div>
            {modalVisible && <OutComeModal closeModal={closeModal} />}
        </>
    );
}
