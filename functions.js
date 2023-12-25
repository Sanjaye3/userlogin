


console.log("day1");



// conditional statements => it is used to perform actions based on different condition


// if(condition){
// //block of code to be executed

// }
// else{
//     // block of code to be executed
// }

 
let name = "akash";

if(name == "akashh"){
    console.log("the name is correct");
}
else{
    console.log("the name is not correct");
}

// if(condition){
// //block of code to be executed

// }
//  else if(condition){
//     // block of code to be executed, if the if condition is false and else if condition is true
//  }
// else{
//     // block of code to be executed
// }


if(name == "akashh"){
    console.log("the name is correct");
}
else if (name == "akash"){
    console.log("the name is correct from else if condition");
}
else{
    console.log("the name is not correct");
}


// functions are reusable block of code that perform a specific task or a group of task


function example() {
    // block of code to be executed

    console.log("hello everyone");
}

example()


example()


example()



function greet(nnm){
    console.log("hello" + " " + nnm);
}

greet("akash")
greet("balaji")


function sum(n1,n2){
    console.log(n1+n2);
}

sum(1,2)