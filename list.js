const inputBox = document.getElementById("input-box");    //marked the element by id stored in a variables
const listCont = document.getElementById("list");

function addTask(){                           // created a function for add the task and displaying the task in window
    if(inputBox.value === ''){                  //if box is empty it will show alert mesg
        alert("We must add the task")
    }else{
        let li = document.createElement("li");      //have created the element and stored in a varable in li
        li.innerHTML=inputBox.value;                //targeted that element in inputbox
        listCont.appendChild(li);                   //stores that element in that var decalred on the top
        let span = document.createElement("span")    // creating a croxx mark  element
        span.innerHTML = "\u00d7";                  //code for cross element
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listCont.addEventListener("click",function(e){      //on click event to target the element 
    if(e.target.tagName === "LI"){                  //if we target the tag name li then it will click on check image
        e.target.classList.toggle("check");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){       // if we click on cross mark it is used to remove the task!!
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listCont.innerHTML);    // used to store the data in local storage to save the data in case of refresh 
}

function showTask(){
    listCont.innerHTML = localStorage.getItem("data");   //used to store the data in case of closing the window
}

showTask();