#!/bin/node

const fs = require('fs')
const path = require('path')


function nex(){
    let spells = []
    let dirs = fs.readdirSync(process.cwd())
    for(let dir of dirs){
        try{
            let pth = path.resolve(dir)
            let files = fs.readdirSync(dir)
            for(let file of files){
                try{
                    if(file.slice(0,3) === "spe" && file[file.length-1] === "n"){
                        let buf = fs.readFileSync(pth + "/" + file)
                        let obj = JSON.parse(buf.toString())
                        if(obj["compendium"] !== undefined && obj["compendium"]["spell"] !== undefined){
                            if(obj["compendium"]["spell"].constructor === Array){
                                spells = spells.concat(obj["compendium"]["spell"])
                            }else if(obj["compendium"]["spell"].constructor === Object){
                                spells.push(obj["compendium"]["spell"])
                            }
                        }
                    }
                }catch(e){
                    
                }
            }
        }catch(e){
            
        }
    }

    fs.writeFileSync("all_spells.json", JSON.stringify({"spells": spells }), (err) =>{
        if(err){
            
        }else{
            
        }
    })
}


nex()
