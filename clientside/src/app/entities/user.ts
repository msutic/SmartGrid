export class User {
    name: string;
    lastName: string;
    email: string;
    birthDate: Date;
    address: string;
    username: string;
    password: string;
    // add user type and profile picture

    constructor(name: string, lastName: string, email: string, birthDate: Date, addres: string, username: string, password: string){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.birthDate = birthDate;
        this.address = addres;
        this.username = username;
        this.password = password;
    }
}
