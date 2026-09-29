function doRegister(){ 
var fullname = document.getElementById("regName").value; 
var username = document.getElementById("regUser").value; 
var email = document.getElementById("regEmail").value; 
var phone = document.getElementById("regPhone").value; 
var password = document.getElementById("regPass").value; 
var confirm = document.getElementById("regConfirm").value; 
var address = document.getElementById("regAddress").value;   
var gender = document.getElementById("regGender").value; 
var country = document.getElementById("regCountry").value;
 
if(fullname == "" || username =="" || email =="" || phone == "" || password == "" || confirm == "" || address =="") { 
    alert("fill all fields required"); 
    return;
} 
 
if(email.includes("@") == false){ 
 alert("Email must have  @"); 
 return;
} 
 
if (phone.length!=11){ 
    alert("phone must be 11 number"); 
    return;
} 
if(password!= confirm){ 
    alert("password does not match confirm password");
}
if(password.length!=8){ 
    alert("password must be 8 character only. Example:emmy@123"); 
    return;
}
 
var users = localStorage.getItem("users"); 
if(users == null){ 
    users = [];
} else{ 
    users = JSON.parse(users);
}
 
var newUser = { 
    fullname:fullname,
    username:username, 
    email:email, 
    phone:phone,  
    gender:gender,
    country:country, 
    password:password 

}; 
 
users.push(newUser); 
localStorage.setItem("users", JSON.stringify(users)); 
 
alert("register successfully!Go login now"); 
window.location.href ="login1.html";
} 
 
function doLogin(){ 
    var email = document.getElementById("logEmail").value; 
    var password = document.getElementById("logPass").value; 
     
    var users = localStorage.getItem("users"); 
    users =JSON.parse(users); 
     
    var loginOk = false; 
     
    users.forEach(function(u){ 
        if(u.email == email && u.password == password){ 
        localStorage.setItem("currentUser",JSON.stringify(u)); 
        alert("Welcome " + u.fullname); 
        window.location.href = "dashboard.html"; 
        loginOk = true;
        }
    });  
     
    if(loginOk == false){ 
        alert("Email or password not correct"); 
    } 
}
    
function logOUt(){ 
    var current =JSON.parse(localStorage.getItem("currentUser")); 
    document.getElementById("profile").innerHTML = 
    "Fullname:" + current.fullname + "<br><br>" + 
    "Username:" + current.username + "<br><br>" + 
    "Email:" + current.email + "<br><br>" + 
    "Phone:" + current.phone + "<br><br>" +  
    "Gender:" + current.gender + "<br><br>" +
    "Country:" + current.country;
} 
function logOUt(){ 
    localStorage.removeItem("currentUSer"); 
    window.location.href ="login1.html";
}