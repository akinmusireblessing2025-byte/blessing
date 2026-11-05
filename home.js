function Doregister(){ 
 var name = document.getElementById("name").value; 
 var email = document.getElementById("email").value; 
 var pass = document.getElementById("pass").value; 
  
 if(name =="" || email == "" || pass ==""){ 
    alert("fill all fields"); 
    return;
 } 

localStorage.setItem("myName",name); 
localStorage.setItem("myEmail",email); 
localStorage.setItem("myPass",pass); 
alert("Account created"); 
window.location.href ="best.html"; 
} 
   
function Dologin(){ 
    var email = document.getElementById("loginEmail").value; 
    var pass = document.getElementById("loginPass").value; 
     
    if(email == localStorage.getItem("myEmail")&& pass == localStorage.getItem("myPass")) { 
     localStorage.setItem("isLogin","yes");  
     window.location.href ="final.html";
    }else{ 
        alert("Wrong email or password");
    }
} 
 
 function loadDashboard(){ 
    if(localStorage.getItem("isLogin")!= "yes"){ 
        window.location.href ="best.html";
    } 
    document.getElementById("welcome").innerText = "Hello" + localStorage.getItem("myName"); 
    showBooking();
 }
 
function bookTable(){ 
    var date = document.getElementById("date").value; 
    var time = document.getElementById("time").value; 
    if(date =="" || time ==""){ 
        alert("Choose date and time"); 
        return;
    } 
    var old = localStorage.getItem("bookingList"); 
    if (old == null) old=""; 
    localStorage.setItem("bookinglist",old + date + "at"+ time + ",");  
    alert("Booked!"); 
    showBooking();
}  

 
function Dologout(){ 
    localStorage.setItem("isLogin","no");  
    alert("you have successfully logout");
    window.location.href ="flavour.html";
}
 
