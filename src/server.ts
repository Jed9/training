import { Console } from 'console';
import http from 'http';
import { myportfolio } from './index'
import { IUser } from './interfaces/user';

export class Server {
    run = () => {
        const hostname = '127.0.0.1';
        const port = 3000;

        const server = http.createServer( async (req, res) => {

            console.log("server url:", req.url)
            if (req.url === '/register') {

                let newuserdata: IUser = {
                    name: "pietie",
                    surname: "",
                    birthdate: new Date("1983-03-10 09:30"),
                    email: ""
                }

                const addeduser = await myportfolio.addUser(newuserdata).catch( (err:Error) => {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(`ERROR ${err.message}`);               
                    return;
                })
                
                if (addeduser) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('REGISTERING NEW USER');               
                    return;
                }
                
            }

            if (req.url === '/list') {
                const list = myportfolio.listUsers();
                const listtext = JSON.stringify(list)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`USERS LIST: ${listtext}`);
                return;
            }

            if (req.url === '/gallery') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('THIS IS GALLERY PAGE');    
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello World');
        });

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    }
}



