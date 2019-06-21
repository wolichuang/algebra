// the foo num
function foo(num) {
    if( num<=1 ) return 1;
    else return num * foo(num-1);
}

console.log("this is the foo", foo(5))

// the foo list
function fooList(num) {
    var array = [];
    if( num<1 ) return 1;
    else {
        for (let index = 0; index < num; index++) {
            array.push(foo(index));
        }
    }
    return array;
}
console.log("this is the foo list", fooList(6))

// 1-100 of sum
function sum(num) {
    if(num<=1) return 1;
    else return num + sum(num-1);
}
console.log("this is the sum 1 - 100", sum(100))