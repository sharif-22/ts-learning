/** used Better Comments for better readable in vsCode
 * * Name: Better Comments
 * * Id: aaron-bond.better-comments
 * * Description: Improve your code commenting by annotating with alert, informational, TODOs, and more!
 * * Version: 3.0.2
 * * Publisher: Aaron Bond
 * * VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
 *
 */

//? Typescript features
// ------------------------------------------------------------------
//* 1- Define a strict type
//* 2 - Use the same type throughout coding.

// let's set some variables with some types

let isDeveloper: boolean = true;

//// ====================STRINGS AND NUMBERS=================
const authorName: string = "Sharif";
let age: number = 22;

//! age = "55"; here we can't assign the age to string "55"
//! ok incase i need to accept both number && string then how can i do..?

let ageBe: number | string;
ageBe = "25";
ageBe = 98;
//// ====================STRINGS AND NUMBERS=================

//// [[[[[[[[[[[[[[[[[[[[[[-------ARRAYS---------]]]]]]]]]]]]]]]]]]]]]]

const skills: string[] = ["Javascript", "Typescript", "React"];

// skills.push(5); //->warning!
skills.push("TailwindCss");

// ok incase i need to accept both number && string then how can i do..?
const someNumbers: (string | number)[] = ["one", 2, "three", "4", 5];

//// [[[[[[[[[[[[[[[[[[[[[[-------ARRAYS---------]]]]]]]]]]]]]]]]]]]]]]

//// {{{{{{{{{{{{{{{{{{{{{{{-------OBJECTS-------}}}}}}}}}}}}}}}}}}}}}}}

const looselyTypedUser = {
  name: "string",
  age: 22,
  isDeveloper: true,
};

//* in objects we dont need to prefix the types is optional but can able to add new property to obj
// looselyTypedUser.id = 55; //->warning!

//! but not prefixing the type is not fair variable assignment in TYPESCRIPT let's fix the TYPES to next obj

const typedUser: {
  name: string;
  age: number;
  isDeveloper: boolean;
} = { age: 22, isDeveloper: true, name: "Sharif" };
//   { isDeveloper: true, name: "Sharif" }; // -> warning

/**
 * here in above example i assigned all the property with their respected TYPE values
 * here the problem is we can able to add new property to typedUser and ommit(unassigne) some property
 * so we can use ? optional chaining
 *
 * in javascript we can add new property and reassign new values etccc
 * */

const optionalChainedUser: {
  name: string;
  age: number;
  isDeveloper?: boolean;
} = { age: 22, name: "Sharif" };

// //-----------------ANY ----------------
// just assign a variable like js is consider as ANY type for string, number, boolean
// for arr :any []
