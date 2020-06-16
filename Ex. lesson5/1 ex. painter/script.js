function createEditArea(editorAreaHeight = 50, editorAreaWidth = 70) {
  let editorArea = document.querySelector("#editorArea");
  let table = document.createElement("table");
  table.cellPadding = 0;
  table.cellSpacing = 0;
  table.id = "editorArea";
  for (let rowNumber = 0; rowNumber < editorAreaHeight; rowNumber++) {
    let row = table.insertRow(-1);
    for (let cellNumber = 0; cellNumber < editorAreaWidth; cellNumber++) {
      row.insertCell(-1);
    }
  }
  editorArea.append(table);
}

function painting() {
  let palette = document.querySelector("#palette");
  let editorArea = document.querySelector("#editorArea");

  editorArea.addEventListener("click", click);
  palette.addEventListener("click", selectColor);

  function selectColor(event) {
    if (event.target.tagName !== "TD") return;
    let defaultColor = document.getElementById(palette.dataset.color);
    defaultColor.innerText = "";
    event.target.innerText = "@";
    palette.dataset.color = event.target.id;
  }

  function click(event) {
    let selectColor = palette.dataset.color;
    if (event.target.tagName !== "TD") return;

    event.target.style.backgroundColor = selectColor;
  }
}
document.addEventListener("DOMContentLoaded", createEditArea());
document.addEventListener("DOMContentLoaded", painting());
