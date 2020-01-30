'use strict';

/*********************************
 *  Functions are objects
 ********************************/

// Function Declaration
// The function itself is an object
let report1 = function(val) {
  console.log(val);
}

// Function Expression
let report2 = new Function("val", "console.log(val);");

report1("expression");
report2("constructor");

// Assign a property
report1.userName = "Jürgen";
console.log('Username:', report1.userName);

// Objects are passed around by reference.
// The reference is copied.
let report3 = report1;
console.log('Username of report3:', report3.userName);
report3.userName = "Steve";
console.log('Username of report1:', report1.userName);

// Add a function 
report3.showUser = function() {
  console.log(this.userName);
}
report3.showUser();
report1.showUser();

