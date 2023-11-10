const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val; 
}

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(3);
identityThree("3");
identityThree(true);

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "brand", type: 3})

// Generics in Array and Arrow Functions

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}

// Arrow function version
const getMoreSearchProducts = <T> (products: T[]): T => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex]
}

const getMoreMoreSearchProducts = (products: number[]): number => {
    // do some database operations
    const myIndex = 5;
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection: "c", username: "pat", password: "pass"});

 //Generic Classes

 interface Quiz {
    name: string,
    type: string
 }

 interface Course {
    name: string,
    author: string,
    subject: string
 }

 class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }

 }