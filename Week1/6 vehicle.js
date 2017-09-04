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
