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
