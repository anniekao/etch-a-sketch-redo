let btnCreate= document.getElementById("createGrid");
btnCreate.addEventListener("click", createGrid);

let btnClear= document.getElementById("clearGrid");
btnClear.addEventListener("click", clearGrid);

let btnBlack= document.getElementById("blackCursor");
btnBlack.addEventListener("click", changeToBlack);

let btnColor= document.getElementById("technicolorCursor");
btnColor.addEventListener("click", changeToTechnicolor);

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
  gridDiv.onmouseover= function(event) {
    let target = event.target;
    target.style.background="white";
  }

}
function changeToBlack(){
  gridDiv = document.getElementById("grid");

  gridDiv.onmouseover = function(event) {
    let target = event.target;
    target.style.background="black";
  }
}

function changeToTechnicolor() {
  gridDiv = document.getElementById("grid");

  gridDiv.onmouseover = function(event) {
    let target = event.target;
    let color = "rgb("+ generateColor() + "," + generateColor() + "," + generateColor() +  ")";
    target.style.background= color;
  }
}

function generateColor() {
  return Math.floor(Math.random()*256)
}
