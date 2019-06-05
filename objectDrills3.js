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

const object = {
  meals: [
    'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'
  ]
};

console.log(object.meals[3]);

/////////////////////////

let people = [
  {Name: 'Bob',
    Job: 'Plumber'},
  {Name: 'Fred',
    Job: 'Architect',
    Boss: 'Bob'},
  {Name: 'Jenny',
    Job: 'Scientist',
    Boss: 'Bob'},
  {Name: 'Ted',
    Job: 'Host',
    Boss: 'Bob'},
  {Name: 'Spongebob',
    Job: 'Chef',
    Boss: 'Bob'}
];

function occupation(obj){
  for(let key in obj){
    console.log(obj[key]);
   
    if(obj[key].Boss === undefined){
      console.log(`${obj[key].Job} ${obj[key].Name} doesn't report to anybody.`);
    } else {
      console.log(`${obj[key].Job} ${obj[key].Name} reports to ${obj[key].Boss}.`);
    } 
  }
}

occupation(people);

/////////////////////////

let sentence = 'craft block argon meter bells brown croon droop';

let code = '';

let word = sentence.split(' ');

const deCoder = {
  'a': 2,
  'b': 3,
  'c': 4,
  'd': 5,
};

function decode(word){

  for(let i = 0; i < word.length; i++){
    if(word[i][0] === deCoder['a']) {code = Object.values('a');}
    
    if(word[i][0] === deCoder['b']) {}

    if(word[i][0] === deCoder['c']) {}

    if(word[i][0] === deCoder['d']) {

   } else {code = code + ' ';
  }
}
}