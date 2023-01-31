#!/bin/node

const fs = require('fs')
const path = require('path')


function nex(){
    let items = []
    let dirs = fs.readdirSync(process.cwd())
    for(let dir of dirs){
        try{
            let pth = path.resolve(dir)
            let files = fs.readdirSync(dir)
            for(let file of files){
                try{
                    if(file.slice(0,3) === "ite" && file[file.length-1] === "n"){
                        let buf = fs.readFileSync(pth + "/" + file)
                        let obj = JSON.parse(buf.toString())
                        if(obj["compendium"] !== undefined && obj["compendium"]["item"] !== undefined){
                            if(obj["compendium"]["item"].constructor === Array){
                                items = items.concat(obj["compendium"]["item"])
                            }else if(obj["compendium"]["item"].constructor === Object){
                                items.push(obj["compendium"]["item"])
                            }
                        }
                    }
                }catch(e){
                    
                }
            }
        }catch(e){
            
        }
    }

    fs.writeFileSync("all_items.json", JSON.stringify({"items": items }), (err) =>{
        if(err){
            
        }else{
            
        }
    })
}


nex()
