function sapin(size) {

}

function addSpace() {
	let newSpace = document.createElement("span");
	newSpace.classList.add("cube", "spaceCube");
	addCubeToLastLine(newSpace);
}

function addTree() {
	let newTree = document.createElement("span");
	newTree.classList.add("cube", "treeCube");
	addCubeToLastLine(newTree);
}

function addTrunk() {
	let newTrunk = document.createElement("span");
	newTrunk.classList.add("cube", "trunkCube");
	addCubeToLastLine(newTrunk);
}

function addLineBreak() {
	let lastLine = document.getElementsByClassName("treeLine");
	lastLine = lastLine[lastLine.length - 1];
	let lastTreeCube = lastLine.getElementsByClassName("treeCube");
	if (lastTreeCube[0] && lastTreeCube[0].classList.contains("topTreeCube") == false) {
		lastTreeCube = lastTreeCube[lastTreeCube.length - 1];
		lastTreeCube.classList.add("lastTreeCube");
	}

	let newLine = document.createElement("div");
	newLine.classList.add("treeLine");
	let sapinContainer = document.getElementById("sapinContainer");
	sapinContainer.appendChild(newLine);
}

function addCubeToLastLine(elt) {
	let lastLine = document.getElementsByClassName("treeLine");
	lastLine = lastLine[lastLine.length - 1];
	if (lastLine.classList.contains("firstTreeLine") == true && elt.classList.contains("treeCube") == true)
		elt.classList.add("topTreeCube");
	else if (lastLine.classList.contains("treeLine"))
		if (lastLine.getElementsByClassName("treeCube").length == 0 && elt.classList.contains("treeCube") == true)
			elt.classList.add("firstTreeCube");
	lastLine.appendChild(elt);
}


addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addLineBreak();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addTrunk();
addLineBreak();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addSpace();
addTrunk();