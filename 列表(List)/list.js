/* list */
function List() {
    this.listSize = 0; // 数组的长度
    this.pos = 0; // 指针的位置
    this.length = length; 
    this.dataStore = [];

    this.append = append; // add the element
    this.insert = insert; // insert the element to the array of any position
    this.find = find; // find the element
    this.remove = remove; //  remove the element
    this.toString = toString; // format the array to string
    this.clear = clear; // clear the array
    this.has = has; // check the element where in the array

    this.front = front; // fixed the pos to the top
    this.end = end; // fixed the pos to the bottom
    this.prev = prev; // the pos where the current -1
    this.next = next; // the pos where the current +1
    this.move = move; // the pos move

    this.currPos = currPos; // return the current position
    this.currElement = currElement; // return the current element


}
// array length
function length() {
    return this.listSize;
}

// string array
function toString() {
    return this.dataStore.join(",");
}

// append element
function append(ele) {
    this.dataStore[this.listSize++] = ele;
}

// insert element where the second element's after
function insert(ele, after) {
    var insertPos = this.find( after );
    if(insertPos > -1) {
        this.dataStore.splice( insertPos+1 , 0 , ele); // splice (pos,index, ele)
        this.listSize++;
        return true;
    }
    return false;
}

// find element
function find(ele) {
    let array = this.dataStore;
    for (let index = 0; index < array.length; index++) {
        if(array[index] == ele) {
            return index;
        }
    }
    return -1;
}

// remove element
function remove(ele) {
    var foundAt = this.find(ele);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

// clear array
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

//  array has ele
function has(ele) {
    if(this.dataStore.indexOf(ele) > -1) return true;
    // return this.dataStore.includes( ele );
    return false;
}


// front the pos
function front() {
    this.pos = 0;
}
// end the pos
function end() {
    this.pos = this.listSize - 1;
}
// prev the pos
function prev() {
    if(this.pos > 0) {
        this.pos--;
    }else{
        console.log("the current pos is front");
    }
}
// next the pos
function next() {
    if(this.pos < this.listSize - 1) {
        ++this.pos;
    }else{
        console.log("the current pos is end");
    }
}
// move the pos
function move(position) {
    if(position > 0 && position < this.listSize -1) {
        this.pos = position;
    }else{
        console.log("the pos Index -1");
    }
}

// get the currPos
function currPos() {
    return this.pos
}
// get the currElement
function currElement() {
    return this.dataStore[this.pos];
}

var arr = new List();
arr.append("banana");
arr.append("apple");
arr.append("orange");

arr.insert("strawberry","apple");
console.log(arr.toString());
console.log(arr.has("apple"))

arr.move(2)
arr.end()
console.log(arr.currPos())
console.log(arr.currElement())
