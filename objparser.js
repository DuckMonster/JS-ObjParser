var OBJ = {};
OBJ.onLoaded = null;
OBJ.load = function () {
	//REQUEST FILE
	var rawFile = new XMLHttpRequest();

	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status === 0) {
				var text = rawFile.responseText;
				OBJ.parse(text);
			}
		}
	}

	rawFile.open("GET", source, true);
	rawFile.send();
}

OBJ.parse = function (text) {
	var positions = [];
	var uvs = [];
	var normals = [];
	
	var lines = text.split("\n");

	for (var i = 0; i < lines; i++) {
		var params = lines.split(" ");
		
		if (params[0] === "v") { //POSITION
			positions.push(parseFloat(params[1]));
			positions.push(parseFloat(params[2]));
			positions.push(parseFloat(params[3]));
		}
		
		if (params[0] === "vt") { //UV
			uvs.push(parseFloat(params[1]));
			uvs.push(parseFloat(params[2]));
		}
		
		if (params[0] === "vn") { //NORMALS
			normals.push(parseFloat(params[1]));
			normals.push(parseFloat(params[2]));
			normals.push(parseFloat(params[3]));
		}
	}
}