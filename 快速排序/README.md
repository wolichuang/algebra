# 快速排序

> 快速排序 是分而治之 的思想，将大的数组分解，逐层往下递归。快速排序的算法核心在于选择一个基准**(pivot)**，将经过比较交换的数组按基准分解为两个数区进行后续递归。试想如果对一个已经有序的数组，每次选择基准元素时总是选择第一个或者最后一个元素，那么每次都会有一个数区是空的，递归的层数将达到 **n**，最后导致算法的时间复杂度退化为 **O(n²)**。因此**pivot**的选择非常重要。

```
var quickSort = function(arr) {
    if(arr.length <=1 ) {return arr;}
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i< arr.length;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));

}
```
