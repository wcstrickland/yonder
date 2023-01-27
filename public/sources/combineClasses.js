#!/bin/node

const fs = require('fs')
const path = require('path')


function nex(){
    let classs = []
    let dirs = fs.readdirSync(process.cwd())
    for(let dir of dirs){
        try{
            let pth = path.resolve(dir)
            let files = fs.readdirSync(dir)
            for(let file of files){
                try{
                    if(file.slice(0,3) === "cla" && file[file.length-1] === "n"){
                        let buf = fs.readFileSync(pth + "/" + file)
                        let obj = JSON.parse(buf.toString())
                        if(obj["compendium"] !== undefined && obj["compendium"]["class"] !== undefined){
                            if(obj["compendium"]["class"].constructor === Array){
                                classs = classs.concat(obj["compendium"]["class"])
                            }else if(obj["compendium"]["class"].constructor === Object){
                                classs.push(obj["compendium"]["class"])
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

    fs.writeFileSync("all_classs.json", JSON.stringify({"classs": classs }), (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log("great success")
        }
    })
}


nex()
