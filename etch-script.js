let btnCreate= document.getElementById("createGrid");
btnCreate.addEventListener("click", createGrid);

let btnClear= document.getElementById("clearGrid");
btnClear.addEventListener("click", clearGrid);

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
