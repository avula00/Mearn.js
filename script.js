// const {add,sub,div,mul} = require("./math")
// console.log(add(5,6))
// console.log(sub(5,6))
// console.log(div(5,6))
// console.log(mul(5,6))

const fs = require('fs')
const path =require("path")

// write
// read
// copy
// append
// delete
// rename
// fs.writeFile("hye.txt","hill how are you??",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("done")
//     }
// })

// fs.readFile("hye.txt",(err,data)=>{
//     if(err){
//         console.error(err.message)

//     }else{
//         console.log(data)
//     }
// })

// fs.appendFile("hye.txt","hi i am fine",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("done")
//     }
// })


// fs.rename("hye.txt","hi.txt",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("done")
//     }
// })

// fs.copyFile("hye.txt","./copy/copy.txt",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("done")
//     }
// })

// fs.unlink("hi.txt",(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log("data")
//     }
// })

// fs.rmdir("./copy",{recursive:true},(err)=>{
//     if(err){
//         console.error(err.message);
    
//     }else{
//         console.log("done");
//     }
// })
console.log(__filename)
console.log(__dirname)
console.log(path.parse(__filename).ext)
