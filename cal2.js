let first =""; 
let second =""; 
let operator =""; 

function num(n){ 
    if(operator ==""){ 
        first +=n; 
        document.getElementById("display").value=first;
    }else{ 
        second +=n; 
        document.getElementById("display").value =first + operator +second;
    }
} 
 
function op(o){ 
    operator =0; 
    document.getElementById("display").value =first + operator;
} 
 
function clearBox(){ 
    first = ""; 
    second = ""; 
    operator = ""; 
    document.getElementById("display").value ="";
} 
 
function equal(){ 
    let ans = 0; 
    let a =Number(first); 
    let b =Number(second); 
     
    if(operator =="+"){ 
        ans=a+b;
    } 
    if(operator =="-"){ 
        ans=a-b;
    } 
     if (operator =="/"){ 
        if(b ==0){ 
            ans="Can't divide by 0"; 
        }else{ 
            ans=a/b;
        }
     } 
     document.getElementById("display").value = ans; 
     first =ans.toString(); 
     second =""; 
     operator ="";
}