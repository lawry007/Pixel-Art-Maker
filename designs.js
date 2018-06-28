// Select color input
// Select size input
var height, width, color;


// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit", function (event) {
	event.preventDefault();
	height = $("#inputHeight").val();
	width = $("#inputWeight").val();
	makeGrid(height, width);
	console.log("height: " + height + ", width: " + width);
});

function makeGrid(x, y) {
	$("tr").remove();

	for (var i = 1; i <= x; i++) {
		
		$("#pixelCanvas").append("<tr id = row" + i +"></tr>");
		
		
		for (var j = 1; j <=y; j++){
			
			$("#row" + i).append("<td></td>");
		}
        
    }
	
	$("td").click(function (){
		
		color = $("#colorPicker").val();
		
		//var color1 = $(this).css("background-color: black");
		
		if ($(this).attr("style")){
			$(this).removeAttr("style");
		}else {
			
			$(this).attr("style", "background-color:"+color);
			
		}
		
		// $(this).each(function (1){
			// if (i === color1){
				
				
			// }
			
			
			
		// })
		
		
	
	});
    
	
    
}



