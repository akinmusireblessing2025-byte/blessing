function calculateTotal(){ 
    let name = document.getElementById("studentName").value; 
    let math = document.getElementById("math").value; 
    let english = document.getElementById("english").value; 
    let biology = document.getElementById("biology").value; 
    let physics = document.getElementById("physics").value; 
    let chemistry = document.getElementById("chemistry").value; 
 
    let total = parseFloat(math) + parseFloat(english) + parseFloat(biology) + parseFloat(physics) + parseFloat(chemistry); 
    let average = total / 5;  

      alert(average);
    if(average >= 40){ 
        alert("passed");
    } 
    else if(average >=50){ 
        alert("passed");
    } 
    else if(average >=60){ 
        alert("passed");
    } 
    else{ 
       alert("failed");
    }  
     
    document.getElementById("result").innerHTML= 
    "<b>Student:<b>"+ name + "<br>" +
    "<b>Math:<b>" + math + "<br>" + 
    "<b>English:<b>" + english + "<br>" + 
    "<b>Biology:<b>" + biology + "<br>" + 
    "<b>Physics:<b>" + physics + "<br>" + 
    "<b>Chemistry:<b>" + chemistry +"<br>" +
    "<b>Total:<b>" + total + "<br>" + 
    "<b>average:</b>" + average.toFixed(2); 
}
     
    
