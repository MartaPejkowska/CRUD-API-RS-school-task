import Users from '../data/users2.json'
import { type User } from '../data/user.type'
import { writeDataToFile } from '../utilis'


function getAll() {
    return new Promise ((resolve,reject)=>{
        resolve(Users)
    })
}

 function getOne(id:string) {
    return new Promise((resolve,reject)=>{
        const user=Users.find((user:User)=>user.id===id)
        resolve(user)
    })
}

function create(user:User) {
    return new Promise((resolve,reject)=>{
        const newUser={
            id:user.id,
            username:user.username,
            age:user.age,
            hobbies:user.hobbies

        }

        Users.push(newUser)
        writeDataToFile('./data/users2.json', Users);
        resolve(newUser)
    })
}

export {getAll, getOne, create }