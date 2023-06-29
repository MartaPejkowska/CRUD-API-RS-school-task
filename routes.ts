import { createUser, getUsers, updateUser, deleteUser } from './controllers/userController';
import { getOneUser } from './controllers/userController';

function reqHandler(req:any,res:any){
    const url = req.url;

    try{

        if (url === '/api/users' && req.method === 'GET') {
            getUsers(req,res)

        }

        else if (url.match(/\/api\/users\/([0-9]+)/) && req.method ==='GET'){
            const id=req.url.split('/')[3]

            getOneUser(req,res,id)
            }

        else if (url === '/api/users' && req.method === 'POST') {
            createUser(req, res);
        }

        else if (url.match(/\/api\/users\/([0-9]+)/) && req.method ==='PUT'){
            const id = req.url.split('/')[3];
            updateUser(req,res,id)
        }
        else if (req.url.match(/\/api\/users\/\w+/) && req.method === 'DELETE') {
            const id = req.url.split('/')[3];
            deleteUser(req, res, id);
        }

        else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Route not found" }));
        }

    }
    catch{
        res.statusCode=500
    }
    }


export default reqHandler