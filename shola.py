school=input("Did you go to school") 
course=input("Did you study DE") 
graduated=input("Did you graduated") 
inducted=input("Were you induced") 


if school=="yes" and course=="yes" and graduated=="yes" and inducted=="yes":
    print("congratulations,you are a Data Engineer") 
elif school=="yes" and course=="yes" and graduated=="yes" and inducted!="yes": 
    print("You are a graduate,but not a Data  Engineer") 
elif school=="yes" and graduated !="yes" and course=="yes" and inducted!="yes": 
     print("you did not graduate")  
else:
    print("you are an illiterate") 
    