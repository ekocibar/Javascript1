 //          ####### 1 #######
 
function add(x,y,z){
    return x+y+z;
}

let x = add(1,2,3);
console.log(x);

 //          ####### 2 #######
 
 function colorCar(color){
    console.log("A " + color + " car")
    return;
}
let color = "red";

colorCar(color);
colorCar("blue");
colorCar(a = "white");
 
 //          ####### 3 #######
 
 function printObject(car){
    
    for(let c in car){
    console.log(c + " " + car[c]);    
    }
    return;
}

let car = {
        model: "VW",
        color: "red",
        year: 2016,
        goodConditon: true
    }
 
printObject(car);

 //          ####### 4 #######
 
 function vehicleType(color,code){
    if(code == 1){
        console.log('A ' + color + ' car.' );
    }else if( code == 2){
        console.log('A ' + color + ' motorbike');
    }else{
        console.log('Unvalid code.');
    }
    return;    
}

vehicleType("red", 1);
vehicleType("red", 2);
vehicleType("red", 3);
 
 //          ####### 5 #######
 
 console.log((3===3?"true":"false"));
 
 //          ####### 6 #######
 
 function vehicle(color,code,age){
    if(code == 1 && age == 0){
            console.log('A ' + color + ' brand new  car.' );
    }else if(code == 1 && age !== 0){
            console.log('A ' + color + ' used  car.' );
    }else if(code == 2 && age == 0){
        console.log('A ' + color + ' brand new motorbike');
    }else if(code == 2 && age !== 0){
        console.log('A ' + color + ' used  motorbike');
    }else{
        console.log('Unvalid code.');
    }
    return;    
}

vehicle("red", 1, 0);
vehicle("red", 2, 0);
vehicle("red", 1, 10);
vehicle("red", 2, 10);
vehicle("red", 3);

 //          ####### 7,8,9 #######
 
 function vehicleType(color,code,age){
   
    let list = {
    l1 : "motorbike", 
    l2 : "caravan", 
    l3 : "bike" 
}
 
    if(code == 1 && age == 0){
            console.log('A ' + color + ' brand new ' + list.l1 );
    }else if(code == 1 && age !== 0){
            console.log('A ' + color + ' used '  + list.l1);
    }else if(code == 2 && age == 0){
        console.log('A ' + color + ' brand new '  + list.l2);
    }else if(code == 2 && age !== 0){
        console.log('A ' + color + ' used '   + list.l2);
    }else if(code == 3 && age == 0){
        console.log('A ' + color + ' brand new '  + list.l3);
    }else if(code == 3 && age !== 0){
        console.log('A ' + color + ' used '   + list.l3);
    }else{
        console.log('UNVALID CODE.');
    }
    return;    
}


vehicleType("red", 1, 0);
vehicleType("red", 2, 0);
vehicleType("red", 3, 0);
vehicleType("red", 1, 10);
vehicleType("red", 2, 10);
vehicleType("red", 3, 10);
vehicleType("red", 4);
vehicleType("red", 1);


 //          ####### 10,11 #######

let list = {
    l1 : "motorbike", 
    l2 : "caravan", 
    l3 : "bike" 
}

let vehicles =  "";

for(let c in list){
    vehicles += ", " + list[c];
}

console.log("Amazing Joe's Garage, we service " + vehicles); 
 
 
 //          ####### 12 #######
 
 let obj1 = {
        a: 1, 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
    
let obj2 = {
        a: '1', 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
    


function compare1(obj1, obj2){
    
    for(let c in obj1){
        for(let k in obj2){
            if(c == k && obj1[c] == obj2[k]){
                console.log( c + " : " + obj1[c] + " in OBJECT1 and " +  k + " : " + obj2[k] + " in OBJECT2 are same \n The line above compared by '=='");
                
            }
        }
    }
}

function compare2(obj1, obj2){
    
    for(let c in obj1){
        for(let k in obj2){
            if(c === k && obj1[c] === obj2[k]){
                console.log( c + " : " + obj1[c] + " in OBJECT1 and " +  k + " : " + obj2[k] + " in OBJECT2 are same \n The line above compared by '==='");
                
            }
        }
    }
}


compare1(obj1,obj2);
compare2(obj1,obj2);


/*
          OUTPUT
a : 1 in OBJECT1 and a : 1 in OBJECT2 are same 
 The line above compared by '=='
b : this is the letter b in OBJECT1 and b : this is the letter b in OBJECT2 are same 
 The line above compared by '=='
b : this is the letter b in OBJECT1 and b : this is the letter b in OBJECT2 are same 
 The line above compared by '==='  
 */
 
 //          ####### 13 #######

function foo(func) {
        return func(); 
    }
    
function bar() {
        console.log('Hello, I am bar!');
    }
    
foo(bar);
 
 //          ####### 14 #######
 
 let x = [1,2,3];
let y = [1,2,3];
let z = y;



console.log(x == y);    //false
console.log(x === y);   //false
console.log(z == y);    //true
console.log(z === y);   //true
console.log(z == x);    //false


if (x.join('|') === y.join('|')) {
	console.log('The arrays are equal.');
} else {
	console.log('The arrays are NOT equal.');
}

if (x.join('|') === z.join('|')) {
	console.log('The arrays are equal.');
} else {
	console.log('The arrays are NOT equal.');
}


        // ANOTHER WAY //

function arraysAreIdentical(x, y){
    if (x.length !== y.length){ 
        console.log(' "FROM FUNCTION" The arrays are NOT equal.');
        return;
    }
    for (var i = 0, len = x.length; i < len; i++){
        if (x[i] !== y[i]){
            console.log('"FROM FUNCTION" The arrays are NOT equal.');
            return;
        }
    }
    console.log('"FROM FUNCTION" The arrays are equal.'); 
    return;
}

arraysAreIdentical(x, y);
arraysAreIdentical(x, z);
arraysAreIdentical(z, y);


/*              OUTPUT
false
false
true
true
false
The arrays are equal.
The arrays are equal.
"FROM FUNCTION" The arrays are equal.
"FROM FUNCTION" The arrays are equal.
"FROM FUNCTION" The arrays are equal.
*/
 
 //          ####### 15 #######
 
 var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2; 
// the order is important!! case o3 = 02---> o3 is equal to defined o2
//                          case o2 = 03---> o2 is equal to undefined o3


console.log(JSON.stringify(o1) === JSON.stringify(o2));  //true
console.log(JSON.stringify(o2) === JSON.stringify(o3));  //true
console.log(JSON.stringify(o1) === JSON.stringify(o3));  //true

var o2 = { foo: 'bar', moo: 'car' };

console.log(JSON.stringify(o2) === JSON.stringify(o3));  //false, o3 did not change
//      CHANGING o2 DOESN'T CHANGE o3   \\




var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

var o3 = { foo: 'bar', moo: 'car' };
console.log(JSON.stringify(o2) === JSON.stringify(o3));  //false, o2 did not change
//      CHANGING o3 DOESN'T CHANGE o2   \\




var o1 = { foo: 'bar' };
var o2 = { foo: 'bar' };
var o3 = o2;

var o1 = { foo: 'bar', moo:'car' };
console.log(o1 == o3);  //false, o2 did not change
//      CHANGING o1 DOESN'T CHANGE o3   \\
 
 /*          ####### TASKS DONE ABOVE #######
 
 +1 Create a function that takes 3 arguments and returns the sum of the three arguments.
 +
 +2 Create a function named colorCar that receives a color, and prints out, "a red car" for example. (Hint: put it in your file and run it like before.)
 +
 +3 Create an object and a function that takes the object as a parameter and prints out all of its names and values.
 +
 +4 Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints "a blue motorbike" for example when called as vehicleType("blue", 2)
 +
 +5 Can you write the following without the if statement, but with just as a single line with console.log(...);?
 +
 +if (3 == 3) {
 +    console.log("true")
 +} else {
 +    console.log("false")
 +}
 +6 Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"
 +
 +7 Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
 +
 +8 How do you get the third element from that list?
 +
 +9 Change the function vehicle to use the list of question 5. So that vehicle("green", 3, 1) prints "a green new caravan".
 +
 +10 Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)
 +
 +11 What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 8?
 +
 +12 Create a function that takes two objects as parameters and compares them. You will actually need to write two functions — one that compares with == and one that compares with ===. Remember that objects can have objects inside of them so you'll need to find a way to compare every element of every object (types and values). For example:
 +
 +    var obj1 = {
 +        a: 1, 
 +        b: 'this is the letter b', 
 +        c: { foo: 'what is a foo anyway', 
 +             bar: [1,2,3,4]
 +        }
 +    }
 +    
 +    var obj2 = {
 +        a: '1', 
 +        b: 'this is the letter b', 
 +        c: { foo: 'what is a foo anyway', 
 +             bar: [1,2,3,4]
 +        }
 +    }
 +In our example we'll say that `obj1 == obj2` is `true` and `obj1 === obj2` is `false`. Make sure you can see why before you write any code!
 +
 +Note: give this exercise your best shot but don’t spend more than, say, one hour on it.
 +
 +13 We saw that we can pass functions as arguments to other functions. Your task is to write a function that takes another function as an argument and runs it.
 +    function foo(func) {
 +        // What to do here? 
 +    }
 +    
 +    function bar() {
 +        console.log('Hello, I am bar!');
 +    }
 +    
 +    foo(bar);
 +    
 +14 Write some code to test two arrays for equality using == and ===. Test the following:
 +    var x = [1,2,3];
 +    var y = [1,2,3];
 +    var z = y;
 +What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
 +
 +Don't cheat! Seriously - try it first.
 +Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. Press the Run button in the upper right corner to run the code.
 +
 +More insights from this Stack Overflow question.
 +  
 +15 Take a look at the following code:
 +     var o1 = { foo: 'bar' };
 +     var o2 = { foo: 'bar' };
 +     var o3 = o2;
 +Show that changing `o2` changes `o3` (or not) and changing ~~`o2` changes `o3`~~ `o1` changes `o3`(or not). 
 +
 +Does the order that you assign (`o3 = o2` or `o2 = o3`) matter? {Jim Cramer: ???}
 
 */
 
