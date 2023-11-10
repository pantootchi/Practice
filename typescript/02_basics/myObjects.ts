// const User = {
//     name: "patrisha",
//     email: "pat@risha.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// createUser({name: "pat", isPaid: false });

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}

// Type alias

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


// Read only
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCard?: number     //Optional
}

let myUser: User = {
    _id: "1245",
    name: "p",
    email: "p@p.com",
    isActive: false
}

myUser.email = "p@gmail.com"
// myUser._id = "1337"     //Won't allow you to edit readonly properties

type cardNumber = {
    cardnumber: string

}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {};