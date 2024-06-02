// Create default array
const defaultArray = [12, 3, 7, 75, 9, 43, 22, 19];

function displayArray(arr) {
	let $arrayContainer = $("<div></div>").addClass("array-container");
	for (i of arr) {
		let $value = $("<p></p>").text(i);
		let $element = $("<div></div>").addClass("array-element");
		$arrayContainer.append($element.append($value));
	}
	$("section.animation-zone").append($arrayContainer);

	$arrayContainer.css(
		"left", $(window).width() / 2 - $arrayContainer.width() / 2 + "px"
	);
    
    return $arrayContainer;
}

let $container = displayArray(defaultArray);
let miliseconds = {value: 500};

function getArrayValue() {
    return $container;
}

function getTimeout() {
    return miliseconds;
}

