let arr = [3,5,7,2,8,1000,10];

function findLargestElement(arr){
    if(arr.length=== 0){
        return undefined;
    }else{
        return Math.max(...arr);
    }
}

console.log(findLargestElement(arr))


//Math.max -> JavaScript function

//Use "let" or "const" for modern JavaScript. Use const when you don’t plan to reassign the variable, and "let" when you do. Avoid "var" in new code.