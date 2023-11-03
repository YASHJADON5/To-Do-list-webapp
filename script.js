const inputBox=document.querySelector("#input-box");
const listContainer=document.querySelector('.task-container');

function addTask (){

    if(inputBox.value === ""){
        alert("You must have write something!")
    }
    else{
        
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        let cross=document.createElement("span");
        cross.innerHTML="\u00d7"
        li.appendChild(cross);
        saveData();
    }
    
    inputBox.value="";

}


listContainer.addEventListener('click', (e)=>{
   
    if(e.srcElement.tagName=== "LI"){
        
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.srcElement.tagName === "SPAN"){
        
        e.target.parentElement.remove();
        saveData();

    }

    console.log(e);

},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();

