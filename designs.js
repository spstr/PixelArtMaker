/**
* Pixel Art Lab implementation by Silvia
* 
*/
$(document).ready(function() {
	
/**
* @description The function that creates the grid. It reads the values from the two inputs and uses them as dimensions for the grid
* 
*/	
function makeGrid() {



//global variables
  const gridRows = $("#inputHeight").val();
  const gridCols = $("#inputWidth").val();
  
  var stringToAppend = '';
  
  gridtable.children().remove();

  
  //add rows dependent on grid height
  for ( let n = 0; n < gridRows; n++) {
	stringToAppend += '<tr>';
	
	for (let m = 0; m < gridCols; m++) {
    stringToAppend += "<td></td>";
	}
  stringToAppend += '</tr>';
    
  }
  
  //add columns dependent on grid width
  $('#pixelCanvas').append(stringToAppend);
}

//Listener for the "submit" button. When clicked triggers the makeGrid function

 $("#makegridsub").click(function(document) {
  document.preventDefault();
  makeGrid();
});

//Listener for the click on table cells. It changes the color of the clicked cell according to the selected one in the color box
$("table").on("click", "td", function() {
  var color = $("#colorPicker").val();
  $(this).css("background-color", color);
});

});