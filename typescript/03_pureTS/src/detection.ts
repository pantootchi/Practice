function detectTypes(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase()
    } else {
        return val + 3
    }
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID");
        return
    } else {
        return id.toLowerCase();
    }
}

//Type Narrowing

function printAll(strs: string | string[] | null) {
    ///This doesn't handle empty strings correctly
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    } else {
        return 
    }
}

// Instaneof

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

//Type Predicates (as) with Type Assertion (is)

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish (pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish food"
    } else {
        pet
        return "Bird food"
    }

}

// Discriminated Union

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number,
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    } else if (shape.kind === "rectangle") {
        return shape.length * shape.width
    } else {
        return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
            // default should never run
        default:
            const _defaultForShape: never = shape
            return _defaultForShape;
    }
}