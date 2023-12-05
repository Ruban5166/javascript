function printnum(upto,filter){
 for (i=0; i < upto;i++){
    if(filter(i)){
        console.log(i)
            }
        }
        
    }

function oddnum(n){
    return (n%2!=0);
}

printnum(10,oddnum);




[1,3,5,7,9,11,13,15].forEach(function(i){console.log(i)})



function outer(){
    let scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
console.log(outer())
