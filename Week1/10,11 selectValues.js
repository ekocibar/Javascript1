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



               // array way  // with <and> word
let vehicles2 =  "";
let list2 = [ "motorbike", "caravan", "bike" ];
for(let i = 0 ; i < list2.length ; i++){
    vehicles += ", " + list2[i];
    if(i == list2.length-2){
        vehicles += ", and" ;
    }
}
console.log("Amazing Joe's Garage, we service " + vehicles2);
