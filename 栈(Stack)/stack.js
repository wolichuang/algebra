function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.listSize = listSize; // get the stack of length
    this.pos = pos; // return the pos

    this.push = push; //  push the element into the stack
    this.peek = peek; // get the element of the stack first
    this.pop = pop; // return the stack of first element
    this.clear = clear; // clear the stack
    
}

// get listSize
function listSize() {
    return this.dataStore.length;
}
// get the position
function pos() {
    return this.top;
}

// push the element into the stack with the top pos ++
function push(ele) {
    this.dataStore[this.top++] = ele;
}
// get the top of the stack
function peek() {
    if (this.top > 0) return this.dataStore[--this.top]
    else return "Empty"
}
// get the stack first element, the top pos --
function pop() {
    return this.dataStore[--this.top];
}
// clear the stack
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}


//初始化一个栈
// var stack = new Stack();
// //入栈
// stack.push('Apple');
// stack.push('Banana');
// stack.push('Pear');
// console.log( stack.peek() );    // Pear

// use the stack
function isPalindrome(word) {
    let stack = new Stack();
    var _temp = '';
    // check the l e v e l= l e v e l
    // create the string with the stack of pop()  temp == word
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        stack.push(element);
    }
    while(stack.pos() > 0) {
        _temp+=stack.pop();
    }
    if(word == _temp){
        return true;
    }else{
        return false;
    }
}

console.log( isPalindrome('level') )    // true
console.log( isPalindrome('1001') )     // true
console.log( isPalindrome('word') )     // false

// translate the
function translateTypes(num, type) {
    let stack = new Stack();
    while(num>0) {
        stack.push(num % type);
        num = Math.floor(num /= type);
    }

    var str = "";
    while(stack.pos() > 0) {
        str+=stack.pop();
    }
    return str;
}

console.log(translateTypes(125,8)) // 175




