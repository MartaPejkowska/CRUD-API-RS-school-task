import * as User from '../models/userModel'
import { getReqData } from '../utilis'
import { v4 as uuidv4 } from 'uuid'
import http from 'http';
import { type Userstype } from '../data/user.type';




export async function getUsers(req:http.IncomingMessage,res:http.ServerResponse){
    try{
        const users= await User.getAll()

        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(users))
    }
    catch(error){
        console.log(error)
    }
}

export async function getOneUser(req:http.IncomingMessage,res:http.ServerResponse,id:string){
    try{
        const user= await User.getOne(id)

        if(!user){
            res.writeHead(404,{'Content-type':'application/json'})
            res.end(JSON.stringify({message:'User not found'}))
        }
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(user))
    }
    catch(error){
        console.log(error)
    }
}

export async function createUser(req:http.IncomingMessage,res:http.ServerResponse){
    try {
        const body = await getReqData(req)

        const { username, age, hobbies } = JSON.parse(body)

        const user = {
            id:uuidv4(),
            username,
            age,
            hobbies
        }

        if (!user.username || typeof user.username !=='string')
            {res.statusCode=400
            res.statusMessage = "Username is required and must be a string";

            res.end()}
        else if( !user.age || typeof user.age !=='number'){
            {res.statusMessage = "Age is required and must be a number";
            res.statusCode=400
            res.end("Age is required and must be a number")}
        }
        else if( !user.hobbies || typeof user.hobbies !=='object'){
            {res.statusMessage = "Hobbies are required and must be an array";
            res.statusCode=400
            res.end("Hobbies are required and must be an array")}
            }

        const newUser = await User.create(user)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newUser))

    } catch (error) {
        console.log(error)
    }
}

export async function updateUser(req:http.IncomingMessage,res:http.ServerResponse, id:string) {
    try {
        const user = await User.getOne(id)

        if(!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'User Not Found' }))
        } else {
            const body = await getReqData(req)

            const { username, age, hobbies } = JSON.parse(body)

            const UserData = {
                username: username || user['username'],
                age: age || user['age'],
                hobbies: hobbies || user['hobbies']
            }

            const updatedUser = await User.update(id, UserData)

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updatedUser))
        }


    } catch (error) {
        console.log(error)
    }
}


export async function deleteUser(req:http.IncomingMessage,res:http.ServerResponse, id:string) {
    try {
        const user = await User.getOne(id)

        if(!user) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'User Not Found' }))
        } else {
            await User.remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `User ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}