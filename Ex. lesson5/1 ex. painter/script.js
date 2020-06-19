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
  const palette = document.querySelector("#palette");
  const editorArea = document.querySelector("#editorArea");

  editorArea.addEventListener("click", handleClick);
  palette.addEventListener("click", currentColor);

  function currentColor(event) {
    if (event.target.tagName !== "TD") return;
    const defaultColor = document.getElementById(palette.dataset.color);
    defaultColor.innerText = "";
    event.target.innerText = "@";
    palette.dataset.color = event.target.id;
  }

  function handleClick(event) {
    let currentColor = palette.dataset.color;
    if (event.target.tagName !== "TD") return;

    event.target.style.backgroundColor = currentColor;
  }
}
document.addEventListener("DOMContentLoaded", createEditArea());
document.addEventListener("DOMContentLoaded", painting());
