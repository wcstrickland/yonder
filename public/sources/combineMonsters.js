#!/bin/node

const fs = require('fs')
const path = require('path')


function nex(){
    let monsters = []
    let dirs = fs.readdirSync(process.cwd())
    for(let dir of dirs){
        try{
            let pth = path.resolve(dir)
            let files = fs.readdirSync(dir)
            for(let file of files){
                try{
                    if(file.slice(0,3) === "bes" && file[file.length-1] === "n"){
                        let buf = fs.readFileSync(pth + "/" + file)
                        let obj = JSON.parse(buf.toString())
                        if(obj["compendium"] !== undefined && obj["compendium"]["monster"] !== undefined){
                            if(obj["compendium"]["monster"].constructor === Array){
                                monsters = monsters.concat(obj["compendium"]["monster"])
                            }else if(obj["compendium"]["monster"].constructor === Object){
                                monsters.push(obj["compendium"]["monster"])
                            }
                        }
                    }
                }catch(e){
                    console.log(e)
                }
            }
        }catch(e){
            console.log(e)
        }
    }

    fs.writeFileSync("monsters.json", JSON.stringify({"monsters": monsters }), (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log("great success")
        }
    })
}


nex()
