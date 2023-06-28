import {Users} from '../data/users'


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

export {getAll, getOne}