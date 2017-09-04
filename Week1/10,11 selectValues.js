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
