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
