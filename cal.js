let display = document.getElementById("display"); 
let history = document.getElementById("history"); 
let error = document.getElementById("error"); 
let currentValue = "0"; 
 
function appendValue(val){ 
  error.innerText =""; 
  if(currentValue ==="0"){ 
    if(val ==="."){ 
        currentValue ="0"; 
    }
   else if(val === "/" || val ==="*" || val ==="+" || val ==="-"){ 
    currentValue ="0" + val;
   }else{ 
    currentValue = val;
   }
  }else{ 
    currentValue =currentValue + val;
  } 
  display.innerText = currentValue; 
} 
 
 function clearScreen(){ 
    currentValue ="0"; 
    display.innerText="0"; 
    history.innerText=""; 
    error.innerText="";
 } 
  
function deleteOne(){ 
if(currentValue.length <=1){ 
    currentValue ="0"; 
}else{ 
    currentValue = currentValue.slice(0,-1);
} 
display.innerText = currentValue;
} 
 
function toPercent(){ 
    let num = parseFloat(currentValue); 
    if(isNaN(num))return; 
    currentValue =(num / 100).toString(); 
    display.innerText =currentValue;
} 
 
 function calculate(){ 
    let result =eval(currentValue); 
    history.innerText = currentValue;
    display.innerText = result; 
    currentValue = result.toString();
    }
    
