import { HashMap } from './hashmap.js';

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.capacity);
console.log(test.size / test.capacity);
console.log(test.length());
console.log('------');

test.set('jacket', 'olive');
test.set('kite', 'charcoal');
test.set('lion', 'goldenyellow');

console.log(test.get('lion'));
console.log('------');

// check that updating does not create new entries
console.log(test.capacity);
console.log(test.size / test.capacity);
console.log(test.length());
console.log('------');

test.set('moon', 'silver');

// check that capacity is doubled
console.log(test.capacity);
console.log(test.size / test.capacity);
console.log(test.length());
console.log('------');

test.set('jacket', 'brightorange');
test.set('kite', 'rainbow');
test.set('lion', 'albino');

// check that updating does not create new entries
console.log(test.capacity);
console.log(test.size / test.capacity);
console.log(test.length());
console.log('------');

// test other methods
console.log(test.has('lion'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.clear());
console.log(test.entries());
