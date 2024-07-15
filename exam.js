var email = document.getElementById("field1")
var err1 = document.getElementById("err1")
var phno = document.getElementById("field2")
var err2 = document.getElementById("err2")
var pwd = document.getElementById("field3")
var err3 = document.getElementById("err3")
var regex = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
function validateEmail(){
    if(email.value.trim()==''){
        err1.innerText="Field cannot be empty"
        email.style.border='1px solid red'
        return false
    }
    else if(!email.value.match(regex)){
        err1.innerText="Email is not in correct format";
        email.style.border='1px solid red';
        return false

    }
    else{
        err1.innerText="";
        email.style.border='1px solid green';
        return false
    }
}
function validateNumber(){
    if(phno.value.numbers){
        err2.innerText="Field cannot be empty";
        phno.style.border='1px solid red';
        return false
    }
    else if(phno.value.length<5){
        err2.innerText="phno is should be 10 numbers";
        phno.style.border='1px solid red';
        return false;
    }
    else if(phno.value.length=10){
        err2.innerText=""
        return false
    }
    else{
        phno.style.border='1px solid red'
        err2.innerText=""
        return false
    }
    
        
    
}