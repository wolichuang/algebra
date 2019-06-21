/* the num of the count */
function numOfCount(str) {
    return str.split('').reduce((first,key) => {
        if(first[key]) {
            first[key]++
        }else{
            first[key] = 1;
        }
        return first;
    },{})
}

console.log(numOfCount('abcdaabc'));