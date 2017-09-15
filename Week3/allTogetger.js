        //####  1  ####
console.log("\t#### 1 ####\n\n");
/*Open a new js file and start by declaring in array with 
in there 10 strings. These strings should be of book 
title's you have read (or made up) and be lowercase without 
spaces or special characters so that you can use these 
later as Id's. (Example: Harry Potter's - The Chamber of 
Secrets -> harry_potter_chamber_secrets).*/

let bookNames = ["a_game_of_thrones", 
                 "a_clash_of_kings", 
                 "a_storm_of_swords", 
                 "a_feast_for_crows", 
                 "a_dance_with_dragons", 
                 "the_winds_of_winter", 
                 "a_dream_of_spring", 
                 "the_fellowship_of_the_ring", 
                 "the_two_towers", 
                 "the_return_of_the_king"];



        //####  2  ####
console.log("\t#### 2 ####\n\n"); 
/*Create a basic html file called inxed.html and use it to 
load the js file, confirm the console.log show the array. 
(This is for debugging and making sure everything is in 
order. Delete it later when you're done :)) */

//console.log(bookNames);



        //####  3  ####
console.log("\t#### 3 ####\n\n");
/*Make a function (or functions) that generate a ul with 
li elements for each book ID in the array using a for loop.*/
/*
function makeList() {
    let list = document.createElement("ul");    // Create an <ul> element
    
    document.body.appendChild(list);            // Append LIST to <body>
    for(let i = 0; i < bookNames.length; i++){
    let item = document.createElement("li");    // Create an <ul> element
    list.appendChild(item);                     // Append the item to <li>
    item.innerHTML = bookNames[i];   
    item.setAttribute("id", bookNames[i]);      // set id's
    
    }
}
makeList();
*/

       //####  4  ####
console.log("\t#### 4 ####\n\n");
/*Make an object containing information for each book. Each
item (object) in this object should have the book ID you 
thought up in point 1 as a key, and it should have at least 
the following fields: title, language and author.*/

let bookInfo ={
    a_game_of_thrones: {
        title: "a_game_of_thrones",
        language: "English",
        author: "George R.R. Martin"
    },
    a_clash_of_kings: {
        title: "a_clash_of_kings",
        language: "English",
        author: "George R.R. Martin"
    },
    a_storm_of_swords: {
        title: "a_storm_of_swords",
        language: "English",
        author: "George R.R. Martin"
    },
    a_feast_for_crows: {
        title: "a_feast_for_crows",
        language: "English",
        author: "George R.R. Martin"
    },
    a_dance_with_dragons: {
        title: "a_dance_with_dragons",
        language: "English",
        author: "George R.R. Martin"
    },
    the_winds_of_winter: {
        title: "the_winds_of_winter",
        language: "English",
        author: "George R.R. Martin"
    },
    a_dream_of_spring: {
        title: "a_dream_of_spring",
        language: "English",
        author: "George R.R. Martin"
    },
    the_fellowship_of_the_ring: {
        title: "the_fellowship_of_the_ring",
        language: "English",
        author: "J. R. R. Tolkien"
    },
    the_two_towers: {
        title: "the_two_towers",
        language: "English",
        author: "J. R. R. Tolkien"
    },
    the_return_of_the_king: {
        title: "the_return_of_the_king",
        language: "English",
        author: "J. R. R. Tolkien"
    }
   
};

        //####  5  ####
console.log("\t#### 5 ####\n\n");
/*Now change the function you used to display the book ID's
in a list to take the actual information about the book 
from the object and display that. Make sure you choose the
right html elements for each piece of info, for instance, a 
heading for the title. */

function newList(bookInfo) {
       
    for(i in bookInfo){
        let list = document.createElement("h1");
        list.innerHTML = bookInfo[i].title;
        document.body.appendChild(list);
        
        let ulEl = document.createElement("ul");   // Create an <ul> element
        document.body.appendChild(ulEl);
            
        let liElemenet1 = document.createElement("li");
        liElemenet1.innerHTML = bookInfo[i].author;
        ulEl.appendChild(liElemenet1);
        liElemenet1.setAttribute("id", i);
        //console.log(i);
        
        let liElemenet2 = document.createElement("li");
        liElemenet2.innerHTML = bookInfo[i].language;
        ulEl.appendChild(liElemenet2);
    }
}
newList(bookInfo);    
    
        //####  6  ####
console.log("\t#### 6 ####\n\n");
/*Beautify your html page with css, add sources and alts to 
each of the images. */

/*
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body{
    padding: 2%;
    margin: 3%;
    text-align:center;
    max-width: 80%;
    margin: auto;
    background-color:beige;
    
}
h1{
    color: brown;
    text-transform: uppercase;
    background-color: aliceblue;
    width: 70%;
    margin: auto;
    margin-top: 10%;
    
    
}

li{
    font-size: 1.3em;
    width: 30%;
    margin: auto;
}
*/

        //####  7  ####
console.log("\t#### 7 ####\n\n");
/*Download book covers for each book, construct a new 
Object which has as keys the bookId's again, and as value 
the path to the image source (e.g. {"harry_potter_blabla":
"./img/harry_potter_blabla.jpg", ...}). Now loop over these 
entries (hint: Object.keys(objectName) gives you an array 
containing the keys). Then write a function which places an 
image at the corresponding li element. Remember that 
Objects are not ordered, so you cannot guarantee that the
first key is the first li element. (Hint: you could give 
each li item an id tag by modifying the function you made 
before) */ 

let bookCover ={
    a_game_of_thrones: './img/1.jpg',
    a_clash_of_kings:'./img/2.jpg' ,
    a_storm_of_swords: './img/3.jpg',
    a_feast_for_crows: './img/4.jpg',
    a_dance_with_dragons: './img/5.jpg',
    the_winds_of_winter: './img/6.jpg',
    a_dream_of_spring: './img/7.jpg',
    the_fellowship_of_the_ring: './img/8.jpg',
    the_two_towers: './img/9.jpg',
    the_return_of_the_king: './img/10.jpg' 
   
};
let imgKey = Object.keys(bookCover);

function addPicturesToList(imgKey){
     for(i of imgKey){
          let img = document.createElement('img');
          img.setAttribute('src',bookCover[i]);
          console.log(bookCover[i]);
          img.setAttribute('alt',i);
          img.setAttribute("width", "228px");
          img.setAttribute("height", "304px");
          document.getElementById(i).appendChild(img);
     
     }
}

addPicturesToList(imgKey);
