function Queue() {
    this.dataStore = [];
    this.listSize = 0;
    
    this.empty = empty; // check the queue is null
    this.enqueue = enqueue; // into the queue
    this.dequeue = dequeue; // delete the queue
    
    this.toString = toString; // string the queue
    this.clear = clear; // clear the queue

    this.front = front; // lookup the front
    this.end = end; // lookup the end


}

// check the queue is null
function empty() {
    if(this.dataStore.length == 0) {
        return true;
    }
    return false;
}
// put the element into the queue, at the end of the queue
function enqueue(ele) {
    this.dataStore.push( ele );
}

// delete the element from the queue
function dequeue(ele) {
    if( this.empty() ) return 'this queue is empty';
    else this.dataStore.shift(ele); // delete the element
}
// string the queue
function toString() {
    return this.dataStore.join(",")
}
// clear the queue
function clear() {
    delete this.dataStore;
    this.dataStore = [];
}

// get the first element of the queue
function front() {
    if(this.empty()) return 'this queue is empty';
    else return this.dataStore[0];
}

// get the last element of the queue
function end() {
    if(this.empty()) return 'this queue is empty';
    else return this.dataStore[this.dataStore.length-1];
}

var arr = new Queue();
arr.enqueue("apple");
arr.enqueue("orange");
arr.enqueue("banana");
arr.enqueue("strawberry");

arr.dequeue("apple")

console.log(arr.dataStore);

console.log(arr.front());
console.log(arr.end());

console.log(arr.toString());
