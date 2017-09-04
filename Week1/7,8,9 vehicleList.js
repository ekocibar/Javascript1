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
