import fs from 'fs'
import http from 'http';

function writeDataToFile(filename:string, data:any) {
    fs.writeFileSync(filename, JSON.stringify(data,null,2), 'utf8')
}

function getReqData(req:http.IncomingMessage) :Promise<string>{
    return new Promise((resolve, reject) => {
        try {
            let body = ''

            req.on('data', (chunk:Buffer) => {
                body += chunk.toString()
            })

            req.on('end', () => {
                resolve(body)
            })
        } catch (error) {
            reject(error)
        }
    })
}

export { writeDataToFile, getReqData }