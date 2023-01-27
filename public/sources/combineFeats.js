#!/bin/node

const fs = require('fs')
const path = require('path')


function nex(){
    let feats = []
    let dirs = fs.readdirSync(process.cwd())
    for(let dir of dirs){
        try{
            let pth = path.resolve(dir)
            let files = fs.readdirSync(dir)
            for(let file of files){
                try{
                    if(file.slice(0,3) === "fea" && file[file.length-1] === "n"){
                        let buf = fs.readFileSync(pth + "/" + file)
                        let obj = JSON.parse(buf.toString())
                        if(obj["compendium"] !== undefined && obj["compendium"]["feat"] !== undefined){
                            if(obj["compendium"]["feat"].constructor === Array){
                                feats = feats.concat(obj["compendium"]["feat"])
                            }else if(obj["compendium"]["feat"].constructor === Object){
                                feats.push(obj["compendium"]["feat"])
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

    fs.writeFileSync("all_feats.json", JSON.stringify({"feats": feats }), (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log("great success")
        }
    })
}


nex()
