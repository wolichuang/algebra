function unique(arr) {
	var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
    	if(result.indexOf(arr[i])==-1){
    		result.push(arr[i]);
    	}
    }
    return result;
}
var arr = [1,2,3,4,5,2,2,2,'test','king','test'];
console.log(unique(arr));

function unique1(arr){
	var obj = {},result = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		if(!obj[arr[i]]){
			 obj[arr[i]] = true;
			 result.push(arr[i]);
		}
	}
	return result;
}
console.log(unique1(arr));

function unique2(arr){
	arr.sort();
	var result =[];
	for (var i = arr.length - 1; i >= 0; i--) {
		if(arr[i]!=result[result.length-1]){
			result.push(arr[i]);
		}
	}
	return result;

}

console.log(unique2(arr));

// new Set 无法去重对象数组
let tempArr = new Set([1,2,3,3,4,4,5]) // => {1,2,3,4,5} //并且已有元素是添加不进去的： 
tempArr.add(3) // => {1,2,3,4,5} 
tempArr.add(6) // => {1,2,3,4,5,6}

// Lodash 去重对象数组
// import _ from 'lodash'; 
// var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]; 
// _.uniqWith(objects, _.isEqual); 
//=> [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]