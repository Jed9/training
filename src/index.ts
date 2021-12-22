import { Server } from "./server";
import { IUser } from "./interfaces/user";
import { Website } from "./website";


import { Euler001 } from './euler/euler001'
const euler = new Euler001();
euler.run();



export var myportfolio = new Website();

var server = new Server();

server.run()



let joe: IUser = {
    name: "joe",
    surname: "",
    birthdate: new Date("1973-03-10 09:30"),
    email: ""
}

// myportfolio.addUser(joe);
// myportfolio.addUser(pietie);

let lysvanusers = myportfolio.listUsers();

console.log(lysvanusers);

console.log("Test 2")

