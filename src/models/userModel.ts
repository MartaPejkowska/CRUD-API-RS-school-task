import Users from '../data/users.json'
import { type Userstype } from '../data/user.type'
import { writeDataToFile } from '../utilis'

import { cwd } from 'node:process';
import path from 'node:path';

const pathTofile=path.resolve('src','data','users.json')

function getAll() {
    return new Promise ((resolve,reject)=>{
        resolve(Users)
    })
}

type GetOne = (id: string) => Promise<Userstype>;

 function getOne(id:string): Promise<any>|undefined {
    return new Promise((resolve,reject)=>{
        const user=Users.find((user)=>user.id===id)
        resolve(user)
    })
}

function create(user:Userstype) {
    return new Promise((resolve,reject)=>{

        const newUser:Userstype={
            id:user.id,
            username:user.username,
            age:user.age,
            hobbies:user.hobbies
        }

        Users.push(newUser)

        writeDataToFile(pathTofile, Users);
        resolve(newUser)
    })
}


function update(id:string, user:any) {
    return new Promise((resolve, reject) => {

        const index = Users.findIndex((user) => user.id === id)
        Users[index] = {id, ...user}

        writeDataToFile(pathTofile, Users);

        resolve(Users[index])
    })
}

function remove(id:string) {
    return new Promise((resolve, reject) => {
        let users = Users.filter((p) => p.id !== id)

        writeDataToFile(pathTofile, users);

        resolve(users)
    })
}


export {getAll, getOne, create, update, remove }