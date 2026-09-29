function submit(){ 
    var fullname = document.getElementById("emmy1").value; 
    var Email = document.getElementById("emmy2").value; 
    var phonenumber = document.getElementById("emmy3").value;  

    if(fullname == ""|| Email == ""|| phonenumber == "" ){ 
        document.getElementById("screen").innerHTML="All fields are required";
    } 
    else{document.getElementById("screen").innerHTML="my name is"+" " + fullname + " " + "and my email is "+" "+ Email +" "+ "contact my phone number" + " "+phonenumber + " ";
    }
}