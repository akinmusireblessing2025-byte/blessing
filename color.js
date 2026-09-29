function email(){ 
    const email= document.getElementById("email").value;
    if(email.includes("@") && (".")){
        document.getElementById("emmy1").innerHTML="valid email"; 
        document.getElementById("email").style.color="red";

    } 
    else{  
        document.getElementById("emmy1").innerHTML="invalid email";
        document.getElementById("email").style.color="blue";
    } 
} 
    function password(){  
        const pwd= document.getElementById("password").value;
        if(pwd.length > 8){ 
            document.getElementById("emmy4").innerHTML="correct"; 
            document.getElementById("password").style.color="red";
        } 
        else{ 
            document.getElementById("emmy4").innerHTML="incorrect"; 
            document.getElementById("password").style.color="blue";
        }
    } 
      
    function password2(){ 
        const pwd2= document.getElementById("password2").value; 
        const pwd=  document.getElementById("password").value;  
""
        if(pwd===pwd2){ 
            document.getElementById("emmy5").innerHTML="matched";
        } 
        else{ 
            document.getElementById("emmy5").innerHTML="not matched";
        }
        
    } 
    function Submit(){ 
        const sub= document.getElementById("Submit").value; 
        if(email +pwd + pwd2===sub){ 
            document.getElementById("emmy6").innerHTML=" registered succesful"; 
        } 
         else{ 
            document.getElementById("emmy6").innerHTML="Not registered suuccesful"
         }
    } 
    
    function number(){ 
        const num= document.getElementById("number").value; 
        if(num.startsWith(+234)){ 
            document.getElementById("emmy3").innerHTML="correct";
        } 
        else{ 
            document.getElementById("emmy3").innerHTML="incorrect";
        }
    }
