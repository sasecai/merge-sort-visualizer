// Create default array
const defaultArray = [12, 3, 7, 75, 9, 43, 22, 19];
let $container = displayArray(defaultArray);
let miliseconds = {value: 500};

/**
 * @public 
 * @returns {Jquery Object} A container with an array that can be animated
 */
function getArrayValue() {
    return $container;
}

/**
 * @public 
 * @returns {Javascript Object} An object containing the value for the animation miliseconds
 */
function getTimeout() {
    return miliseconds;
}

