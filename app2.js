let count=0;
let value=document.querySelector("#value");
let btns=document.querySelectorAll("button");
btns.forEach(function(item){
    item.addEventListener("click",function(e){
     

    var  styles= e.currentTarget.classList;
       if(styles.contains("i1")){
        count=count-1;

       }
        if(styles.contains("i3")){
        count=count+1;
        
       }
       if(styles.contains("i2")){
        count=0;
        

       }
       if(count>0)
       {
        value.style.color="green"

       }
       if(count<0)
       {
        value.style.color="red"
        
       }
       if(count==0)
       {
        value.style.color="black"
        
       }

        value.textContent=count;



    })

});


