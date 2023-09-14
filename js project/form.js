
 let form=document.querySelector("#form")
 let username=document.querySelector("#username")
 let email=document.querySelector("#email")
 let password=document.querySelector("#password")
 let Conf_password=document.querySelector("#conf_password")

 form.addEventListener("submit",(e)=>{
    if(!validateinput()){
        e.preventDefault()
        console.log(e)
    }
 })
 function validateinput(){
    let user_value= username.value.trim();
    let email_value=email.value.trim();
    let password_value=password.value.trim();
    let Confpassword_value=Conf_password.value.trim();
    let success=true;
    //alert("hi")
    if(user_value===""){
        success=false;
        seterror(username,"username is required");
    }
    else{
        success=true;
        setsuccess(username)
    }
    if(email_value===""){
        success=false;
        seterror(email,"email in required")
    }
    else if(!validateEmail(email_value)){
        success=false;
        seterror(email,"Plz enter vaild email id!")
    }
    else{
        success=true;
        setsuccess(email)
    }
    if(password_value===""){
        success=false;
        seterror(password,"password in required")
    }
    else if(password_value.length<8){
        success=false;
        seterror(password,"Password must have 8 character!")
    }
     else if(password_value.length>10){
        success=false;
        seterror(password,"Password must have 10 character!")
    }  
    else{
        success=true;
        setsuccess(password)
    }
    if(Confpassword_value===""){
        success=false;
        seterror(Conf_password," password is required")
    }
    else if(Confpassword_value!=password_value){
        success=false;
        seterror(Conf_password,"confirm password doesn't match")
    }
    else{
        success=true;
        setsuccess(Conf_password)
    }
 }
  function seterror(element,message){
    let input_group=element.parentElement;
    let errorElement=input_group.querySelector("#result");
    errorElement.innerHTML=message;
    input_group.classList.add('error');
    input_group.classList.remove('success');
  }
  function setsuccess(element){
    let input_group=element.parentElement;
    let successElement = input_group.querySelector("#result")
    successElement.innerHTML="";
    input_group.classList.add('success');
    input_group.classList.remove('error');
  }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };