import * as http from 'http'
import dotenv from 'dotenv'
import reqHandler from './routes';

dotenv.config()

const server = http.createServer(reqHandler);


server.listen(process.env.PORT || 3000);