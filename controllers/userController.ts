import * as User from '../models/userModel'

export async function getUsers(req:any,res:any){
    try{
        const users= await User.getAll()

        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(users))
    }
    catch(error){
        console.log(error)
    }
}

export async function getOneUser(req:any,res:any,id:string){
    try{
        const user= await User.getOne(id)
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(user))
    }
    catch(error){
        console.log(error)
    }
}