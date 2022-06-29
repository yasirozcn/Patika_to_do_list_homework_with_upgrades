const button= document.getElementById("liveToastBtn");
const input=document.getElementById("task");
const list= document.getElementById("list");
const UL=document.getElementsByTagName("li");
let animation=[];
for(let i=0; i < UL.length;i++){
    animation.push(UL[i]); 
    UL[i].onclick=check;
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    UL[i].append(closeButton); 
    
}
// LOCALSTORAGE
//GET LOCALSTORAGE
function getStorage() {
    let toDo = JSON.parse(localStorage.getItem("todo"));
    return toDo;
}
//SET LOCALSTORAGE
function setStorage(value) {
    let str = JSON.parse(localStorage.getItem("todo"));
    let toDos;
    if (str == null) {
        toDos = [];
    } else {
        toDos = getStorage();
    }
    toDos.push(value);
    localStorage.setItem("todo", JSON.stringify(toDos));
}

function check(){
    this.classList.toggle("checked")
}


function removeButton(){
    this.parentElement.remove();  // burda maddeyi silmek için yanı çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık.
  }

button.onclick=addElement;
input.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addElement();
    }
})
function addElement(){
     
        
        let value=input.value.trim();
        
        if(value!="" && value!=" "){
           
            $(".success").toast("show")
            let newItem = document.createElement("li")
            newItem.onclick=check;
            newItem.append(value)
            list.appendChild(newItem);
            animation.push(newItem);
            addAnimation();
            input.value=""; 
            
            //------------------------------------------------
            
            let closeButton=document.createElement("span");
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;
            newItem.append(closeButton);


        }else{
            $(".error").toast("show")
        }
        
    
    
}
function addAnimation(){
    for(let i=0; i < animation.length ;i++){ 
        if(i%2==0){
            animation[i].classList.add("animated","bounceInLeft");
        }else{
            animation[i].classList.add("animated","bounceInRight");
        }
    }
}

addElement();
addAnimation();
check();
