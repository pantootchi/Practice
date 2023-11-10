// const user: string[] = ['hc'];
let user: [string, number, boolean]; //enforces the pattern and order of the array

user = ["pat", 69, false];

let rgb: [number, number, number] = [255, 123, 112]; 

type User = [number, string]

const newUser: User = [112, "example@email.com"]

// newUser[1] = "hc.com" overrites the variable's properties
// newUser.push(true) for some reason is allowed

export{};
