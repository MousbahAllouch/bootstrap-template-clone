

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

    let emailValidation=false;
    let phoneNumberValidation=false;
    let fullNameValidation=false;
    let messageValidation=false
    
    for (let i=0;i<email.length;i++){

        // to check the email (contain "@" and have more than 3 char befor "@")
        if(email[i]=="@"){
            let resOfEmail=email.slice(i);
            if(i>2 && resOfEmail.length>5){
                emailValidation=true;
            }
        }

        // here to check phone number 
        if(i==3){
            let strPhoneNumber=phoneNumber;
            strPhoneNumber= strPhoneNumber.substring(0,4);
            if(strPhoneNumber=="+961"){
                phoneNumberValidation=true;
            }
            if(phoneNumberValidation && phoneNumber[4]=="3" && phoneNumber.length==11){
                continue;
            }
            else if(phoneNumberValidation && phoneNumber[4]!="3" && phoneNumber.length==12){
                continue;
            }
            else{
                phoneNumberValidation=false;
            }
        }


    }
    
    
    // to check the lenght of fullName
    if(fullName.length>5){
        fullNameValidation=true
    }

    // to check the lenght of message
    if(message.length>100){
        messageValidation=true
    }

    if(emailValidation && fullNameValidation && phoneNumberValidation && messageValidation){
       console.log("done") 
    }
    else{
        
    }
    

    
}