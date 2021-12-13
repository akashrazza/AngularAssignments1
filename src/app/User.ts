export class User{
    id : number = 0;
    firstName : string = '';
    lastName : string = '';
    email : string = '';
    city : string = ''
    constructor(id:number,firstName:string,lastName:string,email:string,city:string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.city = city;
    }
}