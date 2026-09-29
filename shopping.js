function calculate(){ 
    let Productname = document.getElementById("Productname").value; 
    let Productprice = Number(document.getElementById("Productprice").value); 
    let Quantity = Number(document.getElementById("Quantity").value); 
     
    if (Productname ==""){ 
        alert("Please enter product name"); 
        return;
    } 
      
    if(Productprice <=0){ 
        alert("Please enter valid price"); 
        return;
    } 

    if(Quantity <=0){ 
        alert("Quantity cannot be 0");  
        Quantity = 1;  
        document.getElementById("Quantity").value =1;
    }
 
 
    let subtotal = Productprice * Quantity; 
    let discount = 0; 
    let total = subtotal; 
 
 
    if(subtotal > 2000){ 
        discount = subtotal * 0.10; 
        total = subtotal - discount;
    } 
     
 
   document.getElementById("result").innerHTML=`
   <h2>Receipt</h2> 
   <p><b>Product:<b>${Productname}</p>  
   <p><b>Price * Qty:<b>${Productprice} * ${Quantity}</p> 
   <p><b>Subtotal:</b>${subtotal.toFixed(2)}</p> 
   <p><b>Discount:</b>${discount.toFixed(2)}</p> 
   <p><b><Total to pay:</b>${total.toFixed(2)}<p>
   `;
    }