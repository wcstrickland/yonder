import React from 'react';
import './SheetSection.css';
import RollerButton from '../RollerButton/RollerButton'

function SheetSection(props) {

    function extractRoll(sectionString) {
        const result = {}
        const damageArr = []
        const re = /\+(\d{1,2}) to hit/
        let toHit = sectionString.match(re)
        if (toHit !== null) {
            result["toHit"] = toHit[1]
        }
        const damRe = /\((\d{1,2})d(\d{1,2})\+?(\d{0,2})\)/g
        let damages = sectionString.matchAll(damRe)
        for (const e of damages) {
            if (e !== null) {
                damageArr.push({ "num": e[1] ?? "", "sides": e[2] ?? "", "mod": e[3] ?? "" })
            }
        }
        if(damageArr.length>0){
            result["damageArr"] = damageArr
        }
        return result
    }

    function extractDamageNumbers(data){
        let returnValue = ""
        let returnList = []
        if(Object.keys(extractRoll(data)).length>0){
            if(extractRoll(data)["damageArr"] && extractRoll(data)["damageArr"].length>0){
                for (const dam of extractRoll(data)["damageArr"]) {
                    returnList.push(makeDamageRollButton(dam["sides"], dam["num"], dam["mod"]))
                }
            }
        }
        if(returnValue === ""){
            console.log(returnList)
            return returnList
        }else{
            return returnValue
        }
    }

    function makeDamageRollButton(sides, num, mod){

        return(
            <RollerButton sides={sides} number={num} mod={mod} />
        )
    }



    // the value passed from the parent. Might be a nested object might be the end of the line
    let data = props.value
    // placeholder value will be checked later. if the data is not nested but is an array of strings we join them and assign to this variable
    let strData = ""

    // switch for determining if we need to recurse further
    let isTerminal = true

    // if nested data our values will be stored here
    const subProperties = []

    // data that is an array (nested)
    if (data !== undefined && data.constructor === Array) {
        // nested so we need to recurse
        isTerminal = false
        // for every 'thing' in the nested data
        for (let i = 0; i < data.length; i++) {
            // if data is an array, but just of strings it means it is not nested data -> join strings and write to strData var
            if (data.constructor === Array && data.every(x => typeof x === 'string' || x instanceof String)) {
                strData = data.join("-----")
                // Done no recurse
                isTerminal = true
            } else {
                // this is an array but not just of strings we will make an object we will pass to a recursive child element as props
                let valToAdd = {}
                // the property is the 'thing' in data that we are on in the loop. we go over its keys to access the object with the first key. god this is messy
                valToAdd["property"] = data[i][Object.keys(data[i])[0]]

                // the value is the first value of the 'Thing' we are on
                valToAdd["value"] = Object.values(data[i])[1]

                // check to see if the value is an array of strings if so joinem up
                if (valToAdd["value"].constructor === Array && valToAdd["value"].every(x => typeof x === 'string' || x instanceof String)) {
                    valToAdd["value"] = valToAdd["value"].join("----")
                }

                // boolean is this a data structure rather than a primitive. Just realized its never checked. afraid to remove it TODO
                valToAdd["children"] = data[i].constructor === Array

                // push the object into the subproperties
                subProperties.push(valToAdd)
            }
        }
        // this data is nested but its an object "yay"
    } else if (data !== undefined && data.constructor === Object) {
        // not done keep recursing
        isTerminal = false
        // make an object
        let valToAdd = {
            // this data is the child of a parent but is an object not an array the 'property' is just the first value hopefully name 'value' is 2 hopefully text
            // this is likely to break
            "property": Object.values(data)[0],
            "value": Object.values(data)[1],
            "children": Object.values(data)[1].constructor === Array || Object.values(data)[1].constructor === Object
        }
        subProperties.push(valToAdd)
    }

    // if terminal lets render the data or the str data if we needed to join an array of strings
    // else recurse child elements
    function renderResult() {
        if (isTerminal) {
            if (strData.length > 0) {
                return (
                    <>
                        {strData}
                        {extractDamageNumbers(strData)}
                    </>
                )
            }

            return (
                <>
                    {data}
                    {extractDamageNumbers(data)}
                </>
            )
        }
        return subProperties.map(sp => <SheetSection property={sp.property} value={sp.value} children={sp.children} />)
    }

    let result = renderResult()

    return (
        <>
            <article>
                <header>{props.property}</header>
                {result}
            </article>
        </>
    );
}

export default SheetSection;