 function email(){
    const mail = document.getElementById("email").value;
    if(mail.includes(".") && mail.includes("@")){
        document.getElementById("email").style.color="green"; 
       document.getElementById("screen").innerHTML="valid email";
    }

    else{
        document.getElementById("screen").innerHTML="invalid email";
         document.getElementById("email").style.color="red"; 
    }
 }

 function pwd(){
    const pwd = document.getElementById("pwd").value;
 
    if(pwd.length < 8){
        document.getElementById("pwd_screen").innerHTML='invalid password';
        document.getElementById("pwd").style.color="red";
 }
 else{
    document.getElementById("pwd_screen").innerHTML="valid password";
    document.getElementById("pwd").style.color="green";
 }
}

   function con_pwd(){
          const pwd = document.getElementById("pwd").value;
          const con_pwd  = document.getElementById("con_pwd").value;

          if(pwd===con_pwd){
            document.getElementById("pd_screen").innerHTML="match pwd";
          }

          else{
            document.getElementById("pd_screen").innerHTML="Not Matched ";
          }
   }

   function num(){
      const num = document.getElementById("num").value;
        document.getElementById("num_screen").innerHTML=num;
      if(num.startsWith("+234")){
           document.getElementById("num_screen").innerHTML="format correct";
      }
      else{
        document.getElementById("num_screen").innerHTML="Advisable to use Nigeria format";
      }
   }
  
  
   