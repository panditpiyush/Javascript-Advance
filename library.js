export let message = "Library Message";

export function user() {
    console.log("User Function");
}

export function user(mess) {
    console.log("User Function " + mess);
}

//Creating Class 
export class test {
    //Creating Constructor
    constructor() {
        console.log("Hello I am Class");
    }

    //Creating Method 
    ClassMethod = function () {
        console.log("I am Class Method");
    }
}

test1 = new class {

}

//Different method to export 
export { message, user, test };