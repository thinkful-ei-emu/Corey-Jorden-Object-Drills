/* eslint-disable no-console */
'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return this.water / (this.flour * 100);
  }
};

console.log(loaf);
console.log(loaf.hydration());

///////////////////////

const props = {
  foo: 'oof',
  bar: 'drunk',
  fum: 'fee',
  quux: 'duck',
  spam: 'gross'
};

function objTest (obj) {
  for(let key in obj){
    console.log(obj[key]);
  }
}

console.log(objTest(props));

/////////////////////////