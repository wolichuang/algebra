// max
Array.prototype.max = function() {
    var max = this[0];
    var length = this.length;
    for(var i = 0;i<length; i++) {
        if(max < this[i]) {
            max = this[i]
        }
    }
    return max;
}
// min
Array.prototype.min = function() {
    var min = this[0];
    var length = this.length;
    for (let i = 0; i<length; i++) {
        if(min > this[i]) {
            min = this[i];
        }
    }
    return min;
}

Array.prototype.min = function() {
    return Math.min.apply({},this)
}

Array.prototype.max = function() {
    return Math.max.apply({},this)
}

var min = (arr) => arr.sort((a,b) => a-b).slice(0,1);
var max = (arr) => arr.sort((a,b) => b-a).slice(0,1);

var arr =[12,3,65,8,2,12]; // 全局变量

console.log("最小值:",arr.min());
console.log("最大值：",arr.max());




var min = Math.min(...arr)

console.log(min);

var min =  Math.min.apply(Math,arr);

console.log(min);