// Select color input
// Select size input
// Select Canvas area

// Model


const gridHeight = () => document.querySelector("#inputHeight").value;

const gridWidth = () => document.querySelector("#inputWidth").value;

const getColor = () => document.querySelector("#colorPicker").value;
const makeTable = () => document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()

//  Controller
document.querySelector("#btn").addEventListener("click", (e) => {
  e.preventDefault()
  // assigning gridHeight and gridWidth functions to variables
  let height = gridHeight();
  let width = gridWidth();
  makeGrid()
  // On submit, removing the previous table
  makeTable().firstChild.remove()
  makeGrid(height, width);

});
//  View
function makeGrid(col, row) {
  // looping through the inputs and make table row and cells
  for (let i = 0; i < gridWidth(); i++) {
    let table = makeTable().insertRow(i)
    for (let j = 0; j < gridHeight(); j++) {
      let cellTable = table.insertCell(j)
      //  create another event listener on the cell to change background color
      cellTable.addEventListener("mouseover", (e) => {
        cellTable.style.backgroundColor = getColor();
      })
    }
  }
}
