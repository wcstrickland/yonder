const fs = require('fs')

const argOne = process.argv[2];
let dataFromJson = JSON.parse(fs.readFileSync(argOne).toString())

function dfs(obj){
    for(let ea in dataFromJson){
        helper(obj[ea])
    }
}

function helper(ob){
    for(let chld in ob){
        if(ob[chld].constructor !== String){
            if(ob[chld].constructor === Array && ob[chld].every(x => typeof x === "string")){
                let joinText = ob[chld].join("_")
                ob[chld] = joinText
            }
            helper(ob[chld])
        }
    }
}

dfs(dataFromJson)
fs.writeFileSync("./temp", JSON.stringify(dataFromJson))