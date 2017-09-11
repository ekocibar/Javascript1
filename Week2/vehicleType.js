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
