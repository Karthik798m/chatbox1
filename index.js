



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
        b.classList.add("client")




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

document.querySelector('.mbtn').addEventListener('click',function(){
    document.querySelector('.chats').classList.toggle("slide")
    document.querySelector('.chats>ul').classList.toggle("fade")

})

function swap() {
    var x = document.querySelector(".slideicon");
    if (x.attributes.src.value === "./arrow-bar-left.svg") {
      x.setAttribute('src',"./arrow-bar-right.svg");
    } else {
      x.setAttribute('src','./arrow-bar-left.svg');
    }
  }
  document.querySelector('.mbtn').addEventListener('click',swap)