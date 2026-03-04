#!/usr/bin/env node
const {Command}=require("commander");

const program=new Command()
program
.command("greet <name>")
.action((name)=>{
    console.log(`Hello ${name}`)
})



program
.command("add <n1> <n2>")
.action((n1,n2)=>{
    console.log(Number(n1)+Number(n2))
})

program
.command("subtract <n1> <n2>")
.action((n1,n2)=>{
    console.log(Number(n1)-Number(n2))
})

program
.command("divide <n1> <n2>")
.action((n1,n2)=>{
    if(n2==0){
        console.log("undefined")
    }
    else{
    console.log(Number(n1)/Number(n2))}
})

program
.command("multiply <n1> <n2>")
.action((n1,n2)=>{
    console.log(Number(n1)*Number(n2))
})

program.parse()