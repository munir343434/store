const itemincreased=(itemincreased,price)=>{
    var interval=document.getElementById(itemincreased);
    var price=document.getElementById(price);
    console.log(price);
    if(interval.value<=0){
        interval.value=0;
    }
    else if(interval.value>=1 && interval.value<=5) {
        interval.value=interval.value-1;
        
        // interval.style.color="000";
         price.innerHTML=parseInt(price.innerHTML)+60+'$';
    }
    

 
    else if(interval.value=5){
        interval.value=5;
         interval.style.background="red";
        interval.style.color="#fff";
        // price.innerHTML=parseInt(price.innerHTML)+60+'$';
    }
    
    //  else{
        interval.value=parseInt(interval.value)+1;
        
        
    //  }
}