let obj1 = {
        a: 1, 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
    
let obj2 = {
        a: '1', 
        b: 'this is the letter b', 
        c: { foo: 'what is a foo anyway', 
             bar: [1,2,3,4]
        }
    }
    


function compare1(obj1, obj2){
    
    for(let c in obj1){
        for(let k in obj2){
            if(c == k && obj1[c] == obj2[k]){
                console.log( c + " : " + obj1[c] + " in OBJECT1 and " +  k + " : " + obj2[k] + " in OBJECT2 are same \n The line above compared by '=='");
                
            }
        }
    }
}

function compare2(obj1, obj2){
    
    for(let c in obj1){
        for(let k in obj2){
            if(c === k && obj1[c] === obj2[k]){
                console.log( c + " : " + obj1[c] + " in OBJECT1 and " +  k + " : " + obj2[k] + " in OBJECT2 are same \n The line above compared by '==='");
                
            }
        }
    }
}


compare1(obj1,obj2);
compare2(obj1,obj2);


/*
          OUTPUT
a : 1 in OBJECT1 and a : 1 in OBJECT2 are same 
 The line above compared by '=='
b : this is the letter b in OBJECT1 and b : this is the letter b in OBJECT2 are same 
 The line above compared by '=='
b : this is the letter b in OBJECT1 and b : this is the letter b in OBJECT2 are same 
 The line above compared by '==='  
 */
