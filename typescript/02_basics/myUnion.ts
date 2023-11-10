let score: number | string = 33;

score = 44;
score = "55";

type User = {
    name: string
    id: number
}

type Admin = {
    username: string,
    id: number
}

let pat: User | Admin = {name: "pat", id: 69};

pat = {username: "palfonso", id: 69}

// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }

// getDbId(3);
// getDbId("3");

function getDbId(id: number | string) {
    // id.toLowerCaser() won't be allowed because it knows that parameter will either be number or string

    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        id + 2;
    }
}

// Array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data4: (number| string)[] = [1, 2, 3, "4"]; //Allows combination of strings and numbers

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
// seatAllotment = "crew" won't be allowed

export{}