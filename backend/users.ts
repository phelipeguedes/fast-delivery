export class User {
    constructor(public username: string, public name: string, public password: string){}

    authenticationUser(user: User): boolean {
        return user.username === this.username && user.password === this.password;
    }
}

export const users: {[key: string]: User} = {
    "alice_freitas@email.com": new User("alice_freitas@email.com", "Alice Freitas", "123456"),
    "camila.barbosa@email.com": new User("camila.barbosa@email.com", "Camila Barbosa", "123456")
}
