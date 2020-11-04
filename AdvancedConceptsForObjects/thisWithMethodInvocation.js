const name = 'global';

const obj1 = {
  name: 'obj1',
  fun1: function () {
    console.log('From fun1 in obj1 --');
    console.log('this:', this);
    console.log('this.name:', this.name);
  },
};

obj1.fun1();
console.log('------------');

const obj2 = {
  name: 'obj2',
  fun2: obj1.fun1,
};

obj2.fun2();
console.log('------------');

const fun3 = function () {
  console.log('From fun3 --');
  console.log('this:', this);
  console.log('this.name:', this.name);
};

// Function fun3 is bound to the global object
//this.fun3();

const obj3 = {
  name: 'obj3',
  fun3: fun3,
};

console.log('------------');
obj3.fun3();

// Define an object inside an object
const obj4 = {
  name: 'obj4',
  obj5: {
    name: 'obj5',
    fun5: function () {
      console.log('From obj5 fun5 --');
      console.log('this:', this);
      console.log('this.name:', this.name);
    },
  },
};

console.log('------------');
obj4.obj5.fun5();

// The binding becomes the function because functions are objects!!!
const fun6 = function () {
  console.log('fun6');
};

fun6.name = 'fun6';
fun6.fun7 = function () {
  console.log('From fun7 in fun6 --');
  console.log('this:', this);
  console.log('this.name:', this.name);
};

console.log('------------');
fun6.fun7();
