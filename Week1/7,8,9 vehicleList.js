            // 7  \\

let list = ["motorbike", "caravan", "bike"];


            // 8 \\

console.log(list[2]);

            
            // 9  \\

function vehicle(color,code,age){
    if(code == 1 && age == 0){
            console.log('A ' + color + ' brand new ' + list[0]  );
    }else if(code == 1 && age !== 0){
            console.log('A ' + color + ' used  ' + list[0]  );
    }else if(code == 2 && age == 0){
        console.log('A ' + color + ' brand new  ' + list[1]  );
    }else if(code == 2 && age !== 0){
        console.log('A ' + color + ' used  ' + list[1]  );
    }else if(code == 3 && age == 0){
        console.log('A ' + color + ' brand new  ' + list[2]  );
    }else if(code == 3 && age !== 0){
        console.log('A ' + color + ' used  ' + list[2]  );
    }else{
        console.log('Unvalid code.');
    }
    return;    
}

vehicle("red", 1, 0);
vehicle("red", 2, 0);
vehicle("red", 1, 10);
vehicle("red", 2, 10);
vehicle("red", 3, 10);
vehicle("red", 4);
