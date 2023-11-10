"use strict";
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    else {
        return id.toLowerCase();
    }
}
//Type Narrowing
function printAll(strs) {
    ///This doesn't handle empty strings correctly
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    else {
        return;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet))
        ;
}
