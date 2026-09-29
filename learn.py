# x=1 
# while x<=5: 
    # print("hello world" + str(x)) 
    # x+=1
    # if x == 4 or x == "4": 
    #   break 
    #    
        # 
        # x =[1,2,3,4,5] 
        # for y in x:  
            # if y == 4: 
                # continue 
            # print(y)   
            #   
               
math = input("enter math")  
english = input("enter english") 
biology = input("enter biology") 
chemistry = input("enter chemistry") 
physics = input("enter physics") 

if int(math) <= 100 and int(english) <= 100 and int(biology) <= 100 and int(chemistry) <= 100 and int(physics) <= 100:
    all = int(math) + int(english) + int(biology) + int(chemistry) + int(physics)
    cgpa = int(all) / 5                                                      
    print("Your cgpa is: " + str(cgpa))
else:
    print("The score must not be more than 100") 
        