"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var pat = { name: "pat", id: 69 };
pat = { username: "palfonso", id: 69 };
// function getDbId(id: number | string) {
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }
// getDbId(3);
// getDbId("3");
function getDbId(id) {
    // id.toLowerCaser() won't be allowed because it knows that parameter will either be number or string
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
