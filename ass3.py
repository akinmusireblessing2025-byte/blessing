yoruba = { 
    "Christianity":7000000, 
    "islam":3000000, 
    "Traditional":1000000 

}, 
igbo = { 
    "Christianity":500000, 
    "Traditional":3000000
}, 
hausa = { 
    "Christianity":300000, 
    "islam":150000, 
    "Fulani":{ 
     "Christianity":200000, 
     "islam":1000000
    }
} 

 
country = [yoruba,igbo,hausa,hausa["Fulani"]]
   
total_Christianity = 0 
total_islam = 0
total_Traditional = 0 
 
for group in country:    
    if "Christianity" in group:
        if total_Christianity == 0: 
            total_Christianity = group["Christianity"] 
    else: 
        total_Christianity = total_Christianity + group["Christianity"]  
         
    
if "islam" in group:
    if total_islam == 0:
        total_islam = group["islam"] 
    else: 
        total_islam = total_islam + group["islam"] 
          

if "Traditional" in group:
    if total_Traditional == 0: 
        total_Traditional = group["Traditional"] 
    else: 
        total_Traditional = total_Traditional + group["Traditional"] 
         
ratio = total_islam / total_Christianity 
print("Ratio Islam to Christianity:"+ratio) 

total_population = total_Chritianity + total_islam + total_Traditional 
print("Total Population:"+total_population) 
 
print("Christianity %:"+(total_Christianity / total_population) * 100) 
print("Islam %:"+(total_islam / total_population) * 100) 
print("Traditional %:"+ (total_Traditional / total_population) * 100)   
 
print("Continue with Christianity because it is the majority with 59%")   
print(" ")

