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
 
