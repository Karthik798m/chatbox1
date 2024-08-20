



function fun(){
    if(document.querySelector("input").value==''){
        document.querySelector(".chatlist").appendChild()
    }
    else{
        const a=document.createElement("li")
        document.querySelector(".chatlist").appendChild(a)
        a.classList.add("chat")


        const b=document.createElement("div")
        document.querySelector(".chat").appendChild(b)
        b.classList.add("my")




        if(document.querySelector(".chat").firstChild.className=='my'){
        b.innerHTML+='<p class="h">you</p>' +document.querySelector("input").value 
        }

        else if(document.querySelector(".chat").firstChild.className=='client'){
        b.innerHTML+='<p class="h">other</p>' +document.querySelector("input").value 
        }
        document.querySelector("input").value="";
        document.querySelector(".chatlist").lastChild.scrollIntoView();
        
        
    }
}

document.querySelector(".send").addEventListener("click",fun)
document.addEventListener('keypress',function(event){
   enter(event.key)
})

function enter(key){
    switch(key){
        case 'Enter':
            fun();
        break;    
    }
}