let name1="ayo"; 
let con=name1.slice(0,1); 
//console.log(con); 
let turn=con.toUpperCase(); 
//console.log(turn); 
let name2="akinbami"; 
let sec=name2.slice(0,1); 
//console.log(sec); 
let sec1=sec.toUpperCase(); 
//console.log(sec1); 
let subothers=name1.slice(1,3); 
//console.log(turn+subothers); 
let subothers1=name2.slice(1,8); 
//console.log(sec1+subothers1);
let add = sec1+subothers1;
let add2  = turn+subothers;

let empty=" ";
let sumName  = add+empty+add2;
console.log(sumName);  
           
let email="EOBI5538@GMAIL.COM"; 
let x=email.toLowerCase(); 
console.log(x); 
let pwd="1234ku0u0u9i09mmmmik56"; 
let checkpwd=pwd.length;
if (checkpwd < 10){ 
    console.log("password must be more than 10 character");
}
else{ 
    console.log("succesful");                                                                           
}