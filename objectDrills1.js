'use strict';
/*
function createMyObject(){
  const newObj = {
    foo: 'bar',
    answerToTheUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      console.log('hello');
    }
  };
}
// console.log(createMyObject);

*/

/////////////////////////

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

/////////////////////////

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person;
}

////////////////////////

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};
  
function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

