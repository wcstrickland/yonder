
const fs = require('fs')

let dataFromJson = JSON.parse(fs.readFileSync(process.argv[2]).toString())

for(let e in dataFromJson){
    let autolevel = dataFromJson[e]["autolevel"]
    for(let al of autolevel){
        if(al["slots"] !== undefined){
            delete autolevel[al]
        }
    }
}
 