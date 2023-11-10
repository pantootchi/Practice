"use strict";
// class User {
//     public email: string
//     private  name: string
//     readonly city: string = "Riverside"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
// const pat = new User("pat@pat.com", "patrisha")
// pat.city = "Riverside";
// production grade level code
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1;
        this.city = "Riverside";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
