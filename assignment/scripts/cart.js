console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
// I decided to make this function with 2 parameters so it could affect any array rather than just our basket
function addItem(array, item){
    if (Array.isArray(array) == false || typeof (item) !== 'string'){  //if the parameters array isn't and array and item isn't a string, return an error
        return 'Error: addItem() parameter 1 must be an array and parameter 2 must be a string';
    } else {    
        array.push(item);
        return true;
    }
}

//testing wrong and right data types with this new function
console.log(addItem(1, 'bread'));
console.log(addItem(basket, 1));
console.log(addItem(basket, 'Bread'));
console.log(basket);

