var OBJ = {};
function parseObj(source) {
	//REQUEST FILE
	var rawFile = new XMLHttpRequest();
	
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status === 0) {
				var text = rawFile.responseText;
				alert(text);
			}
		}
	}
	
	rawFile.open("GET", source, true);
	rawFile.send();
}