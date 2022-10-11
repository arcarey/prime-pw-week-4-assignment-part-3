console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem(array, item){
    if (array.isArray === false || item.isString === false){
        return 'Error: addItem parameter 1 must be an array and parameter 2 must be a string'
    }         //if the parameters array isn't and array and item isn't a string, return an error
    
}