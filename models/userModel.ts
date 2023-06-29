import Users from '../data/users.json'
import { type Userstype } from '../data/user.type'
import { writeDataToFile } from '../utilis'


function getAll() {
    return new Promise ((resolve,reject)=>{
        resolve(Users)
    })
}

 function getOne(id:string) {
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
        writeDataToFile('./data/users.json', Users);
        resolve(newUser)
    })
}


function update(id:string, user) {
    return new Promise((resolve, reject) => {

        const index = Users.findIndex((user) => user.id === id)
        Users[index] = {id, ...user}

        writeDataToFile('./data/users.json', Users);

        resolve(Users[index])
    })
}

function remove(id:string) {
    return new Promise((resolve, reject) => {
        let users = Users.filter((p) => p.id !== id)

        writeDataToFile('./data/users.json', users);

        resolve(users)
    })
}


export {getAll, getOne, create, update, remove }