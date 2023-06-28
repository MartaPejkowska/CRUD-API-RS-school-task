import {Users} from './data/users'
import { getUsers } from './controllers/userController';
import { getOneUser } from './controllers/userController';

function reqHandler(req:any,res:any){
    const url = req.url;

    try{

        if (url === '/api/users' && req.method ==='GET') {

            getUsers(req,res)

        }

        if(url.match(/\/api\/users\/([0-9]+)/) && req.method ==='GET'){
            const id=req.url.split('/')[3]

            getOneUser(req,res,id)

            const result = Users.find(user => user.id === id);
            res.statusCode=200;
            res.end(result)

            // if(!result){
            //     res.statusCode=404
            //     res.end('User not found')

            //     }
            }
        }
        catch{
            res.statusCode=500
        }
    }

export default reqHandler