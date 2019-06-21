
// the fib num
function fib(num) {
    if(num <=1) return 1;
    else return fib(num-1) + fib(num-2);
}

console.log("fib the value",fib(10))


// the fib list
function fibList(num) {
    let array = [];
    if(num<=1) { return 1;}
    else {
        for (let index = 0; index < num; index++) {
            array.push(fib(index));
        }
    }
    return array;
}

console.log("fibList the value",fibList(10))