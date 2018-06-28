
//create variables for the height, width and color
let height, width, color;

//create a click event that will use the height and width submitted by the user in the form to call makeGrid()

$("#sizePicker").on("submit", function (event) {
	
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	
	//pass the value of the width and height to the make grid()
	
	makeGrid(height, width);
	console.log("height: " + height + ", width: " + width);
});

// this creates the grid 
function makeGrid(x, y) {
	//remove existing table in the form and create a new one when the submit event occurs 
	
	$("tr").remove();
	
	for (let i = 1; i <= x; i++) {
		
		$("#pixelCanvas").append("<tr id = row" + i +"></tr>");
		
		
		for (let j = 1; j <=y; j++){
			
			$("#row" + i).append("<td></td>");
		}
        
    }
	
	
	//Selects the color in the color picker and fill each table data <td> with it 
	
	$("td").click(function (){
		
		color = $("#colorPicker").val();
		
		// this condition checks if there is a color in a table data<td> and removes it if double clicked or fills it if it is empty
		
		if ($(this).attr("style")){
			
			$(this).removeAttr("style");
			
		}else {
			
			$(this).attr("style", "background-color:"+color);
			
		}
			
	});
    
}



