let vehicles2 =  "";
let list2 = [ "motorbike", "caravan", "bike" ];

for(let i = 0 ; i < list2.length ; i++){
    vehicles2 += ", " + list2[i];
    if(i == list2.length-2){
        vehicles2 += ", and" ;
    }
}
console.log("Amazing Joe's Garage, we service " + vehicles2);
