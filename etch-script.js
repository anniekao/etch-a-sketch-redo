let btnCreate= document.getElementById("createGrid");
btnCreate.addEventListener("click", createGrid);

let btnClear= document.getElementById("clearGrid");
btnClear.addEventListener("click", clearGrid);

let btnBlack= document.getElementById("blackCursor");
btnBlack.addEventListener("click", changeToBlack);

function createGrid (){
  size = prompt("How many rows do you want?");
  i = 0;
  x = size * size;

  document.documentElement.style.setProperty("--columns-row", size);

    for (i; i < x; i++) {
      let newDiv = document.createElement("div");
      let grid = document.getElementById("grid");
      newDiv.className = "gridDiv";
      grid.appendChild(newDiv);
    }
}

function clearGrid(){
    grid.innerHTML = "";
}
function changeToBlack(){
  let gridDiv = document.getElementById("grid");

  gridDiv.onmouseover = function(event) {
    let target = event.target;
    target.style.background="black";
  }

  gridDiv.onmouseout = function(event) {
    let target = event.target;
    target.style.background="";
  }
}

function black(element){
  this.style.backgroundColor = "black";
}
