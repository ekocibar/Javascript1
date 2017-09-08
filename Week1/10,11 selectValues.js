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



               // array way

let list2 = [ "motorbike", "caravan", "bike" ];
for(let i = 0 ; i < list2.length ; i++){
    console.log("Amazing Joe's Garage, we service " + list2[i]);
}
