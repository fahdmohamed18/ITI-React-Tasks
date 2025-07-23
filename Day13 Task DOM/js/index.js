var element = document.getElementById("demo");
console.log(element)

var elements = document.getElementsByClassName("item")
console.log(elements)



var input = document.getElementsByName("Name");
console.log(input)

var Tag = document.getElementsByTagName("p")
console.log(Tag);

var Elem = document.querySelectorAll(".top")
console.log(Elem)


var elemnets = document.querySelectorAll("h2.test");

function sayHello(userName){
  console.log("hi ya : " + userName)
}

for(var i = 0 ; i < elemnets.length ; i ++){
  elemnets[i].addEventListener("click",function(){
        sayHello("fahd")
  })
}




var div = document.createElement("div");
var p = document.createElement("p");

p.innerHTML="fofaa hello";
div.appendChild(p);
document.body.appendChild(div);
p.style.cssText = `
color : black;
font-size : 18px;
background-color : aqua;
`;
var button = document.createElement("button")
button.innerHTML="click here";
document.body.appendChild(button);

button.addEventListener("click" , function(){
  p.style.color="white";
})

function changeText() {
    document.getElementById("title").innerText = "You clicked the button!";
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;
  if (task) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = task + '<button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Delete</button>';
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}


let count = 0;
function increase() {
    count++;
    document.getElementById("counter").innerText = count;
    }

    function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
    }