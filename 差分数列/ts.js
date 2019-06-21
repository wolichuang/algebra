// 差分数列:1, 1, 2, 4, 7, 11, 16, … 求 第 n 项, 求前 n 项和.	

//  找递推关系
//	第 0 项和第 1 项，相差0 => fn( 0 ) + 0 = fn( 1 )
//	第 1 项和第 2 项，相差1 => fn( 1 ) + 1 = fn( 2 )
//	第 2 项和第 3 项，相差2 => fn( 1 ) + 2 = fn( 2 )
//	…
//	第 n-1 项和第 n 项，相差n-1 => fn( n -1 ) + n -1 = fn( n )

// 第 n 项的值
function ts(num) {
    if (num == 0) return 1;
    return ts(num-1) + (num-1)
}
// 前 n 想的值
function ls(num) {
    if(num == 0) return 1;
    let array = [];
    for(let i = 0;i < num; i++) {
        array.push(ts(i)) // put the every num value
    }
    return array;
}
// 前 n 项的和
function sum(num) {
    if(num == 0) return 1;
    return sum(num-1) + ts(num);
}

console.log(ts(4))
console.log(ls(5))
console.log(sum(4))