function  is_integer(value){
    if(typeof(value) == "number"){
        console.log(true);
    }
    else{
        console.log(false)
    }
}
is_integer(10);


let arr = []

function add_all(arr){
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
   sum = sum +arr[i]; 
}

console.log(sum)
}

add_all([4,5,7,6,9,5,8,10]);


/*Given a javascript array of objects having a 
radius property as shown [{radius: 5}, {radius: 9}, {radius: 2}], 
write a comparator function to sort it.*/
function sorting(a,b){
    return(a.radius-b.radius)
}
let abArray = [{radius: 5}, {radius: 9}, {radius: 2}];
let sortedarray = abArray.sort(sorting);
console.log(sortedarray);
/*Write a javascript function named length_of_array, which takes an array as argument and
 returns the number of elements in that array (as opposed to what is given by the length
 property of the array). Remember undefined can also be an element if it is explicitly set
 at some index, e.g. x[5] = undefined;. This undefined should be counted, but elements which
  are not present in the array (as arrays can be sparse), should not be counted.*/


function length_of_array(...args){
    let l = args.length
    console.log(l)

}
length_of_array(2,3,4,5,6,);

