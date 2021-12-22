import { IUser } from './interfaces/user'
import { v4 as uuidv4 } from 'uuid';

export class Website {
    users: IUser[] = [];

    addUser = async (user: IUser) => {

        if (user.name === "") { throw new Error('Username cant be empty'); }

        if (!user.id) {
            user.id = uuidv4()
        }
        this.users.push(user);
        console.log(`${new Date().toISOString()} System added a new user ${user.name} ${user.surname}`);

        return true
    }

    listUsers = () => {
        return this.users;
    }

    deleteUser = (id:string) => {

    }
}