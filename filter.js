


function evennumbers(elemts){
    return elemts%2==0;
}

console.log([2,3,4,5,6,7,8,9,10,11,12,13,14,15].filter(evennumbers));


function iseven(elem,index,array){
    console.log(elem ," : " ,index ,":",array);
    return elem % 2 == 0;
}

console.log([2,3,4,5,6,7,8,9,10,11,12,13,14,15].filter(iseven));





let result = [3,6,9,12].map(function (elem){
    return elem * elem;
})

console.log(result)