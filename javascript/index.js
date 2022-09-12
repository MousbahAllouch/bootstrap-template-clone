

let navButton1= document.getElementById("navbar-button1");
let navButton2= document.getElementById("navbar-button2");
let navButton3= document.getElementById("navbar-button3");


// here if the user go over the button it's color changed to #1abc9c
navButton1.onmouseover = function(){
    navButton1.style.color="#1abc9c"
};
navButton2.onmouseover = function(){
    navButton2.style.color="#1abc9c"
};
navButton3.onmouseover = function(){
    navButton3.style.color="#1abc9c"
};

function submitting(){
    let fullName=document.getElementById("full-name").value
    let email=document.getElementById("email").value
    let phoneNumber=document.getElementById("phone-number").value
    let message=document.getElementById("message").value

    // to check the lenght of fullName
    if(fullName.length>5){
        console.log(fullName)
    }
    
}