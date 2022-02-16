let age = 21
let names = ['tony', 'liz']
let bob = {name: 'Bob', age:21, hasFelony:true}
let jon = {name: 'Jon', age:24, hasFelony:false}
let sally = {name: 'Sally', age:17, hasFelony:false}

function canVote(person){
if(person.age >= 18 && !person.hasFelony){
    console.log(`${person.name} can vote`)
} else{
    console.log(`${person.name} can not vote`)
}}

canVote(bob)
canVote(jon)
canVote(sally)