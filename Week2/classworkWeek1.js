console.log("Hello Wrold");

let enes = {
    dateOfBirth : "8/8/1988",
    placeOfBirth : "Turkey",
    livingPlace : "Den Haag",
    pets : false, 
    kids : null,
    hobbies : ["football", "watchingTV", "coding"]
    
    
};

console.log(enes.dateOfBirth);
console.log(enes['placeOfBirth']);

console.log(enes.name);  // not defined in an object // it says undefined
console.log(name);      // not defined variable, // it shows nothing, may throw an exeption in node

let x = 'dateOfBirth';
console.log(enes[x]);

delete enes.pets;       // it deletes a property of the object

console.log(enes.pets);

typeof(null);


        // IF STATEMENT //

     // CLASSROOM EXERCISE //

let q = true;
let y = 2;
let z = false;
let k = 5;

console.log("HERE IS THE EXERCISE BELOW ");

if(typeof q === typeof y){
    console.log("q and y are same ");
    
}else {
    console.log("q and y are not same type");
}
    

if(typeof q === typeof z){
    console.log("q and z are same type");
}else{
    console.log("q and z are not same type");
}


if(typeof y === typeof z){
    console.log("y is equal to z");
}else{
    console.log("y and z are not same type");
}


if(k<5){console.log("k is less than 5");}
else if(k===5){ console.log("k is 5");}
else{console.log("k is greater than 5");}



        // SWITCH STATEMENT //

let o = 'Hello';

switch(o){
    case 'hi':
        console.log("Hi");
    case 'Hello':
        console.log("O is Hello");
    case "hhh":
        console.log("hhh this line printed because 'break' did not initialized");     // this line will be printed because break did not initialized !!!!!!!!!
        break;
    case "sdf":
        console.log("sdf");
        break;
        
    default:
        console.log("Nothing matched");
        }



        // FOR LOOP //

for ( i=0; i<10; i = i+3){
    for(j=0; j<3; j++){
    console.log(i + 1 + " Hello j is eual to " + j);
        }
}


let students = [ "a", "b", "c", "d"];

for(students of students){
    console.log(students);
}


let car = {
    model : "VW",
    year: 1999,
    color: "red"
}

for(let c in car){
        
    console.log(c);    // shows the keys in the object
    console.log(car[c]);    // shows the values in the object
    
    
}


        // FUNCTION //

function add(m,n){
    console.log("10");
    return m+n;
}
    let b = add(2,2);
    
    console.log(b);
 

 
