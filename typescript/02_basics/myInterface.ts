interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //1 way of adding a method to an interface object
    // startTrial:() => string;
    //another way of creating a method
    startTrial(): string,
    getCoupon(couponName: string, value: number): number
    
} 

//reopening of  the interface
interface User {
    githubToken: string,
}

//inheritance in interface
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const patrisha: Admin = {dbId: 22, email:"p@p.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrial: () => {
    return "trial started"
},
getCoupon: (name: "pat10", off:10) => {
    return off
}} 

patrisha.email = "pat@pat.com";

export{}
