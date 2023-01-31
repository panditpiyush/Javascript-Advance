import { message, user as us, test } from "./library.js";
import * as yahoo from "./library.js";
console.log(message);
console.log(yahoo.message);

us();
user("Hello");

let a = new test();