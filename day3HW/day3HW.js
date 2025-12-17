//q1
function processStr(s) {
    if (typeof s !== 'string') return '';
    return s.replaceAll('-', ' ').trim().toLowerCase();   
}

console.log(processStr(" Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array "))


//q2
const result = null || 'default';
console.log(result);
const andResult = true && 'value';
console.log(andResult);
// return default and value, |
// || return the first truthy value, if no truthy, return the last value. 
// && return the first falsy value, if no falsy, return the last value 
// falsy values: false, 0, "", null, undefined, NaN

//q3
const arr1 = [10, 20, 30, 40]
console.log(arr1.slice(1, 3))
//q4
//splice will modify the original array, return te deleted part
const arr2 = [1, 2, 3, 4]
arr2.splice(1, 2)
console.log(arr2)

