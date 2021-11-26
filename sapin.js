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
	let newLine = document.createElement("div");
	newLine.classList.add("treeLine");
	let sapinContainer = document.getElementById("sapinContainer");
	sapinContainer.appendChild(newLine);
}

function addCubeToLastLine(elt) {
	let lastLine = document.getElementsByClassName("treeLine");
	lastLine = lastLine[lastLine.length - 1];
	lastLine.appendChild(elt);
}

addSpace();
addTree();
addTrunk();
addLineBreak();
addSpace();
addTree();
addTree();
addTree();
addTrunk();
addLineBreak();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTrunk();
addLineBreak();
addTree();
addSpace();
addTree();
addTree();
addTree();
addTree();
addTree();
addTree();
addTrunk();