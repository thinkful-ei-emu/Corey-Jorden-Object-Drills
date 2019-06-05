/* eslint-disable no-console */
'use strict';

/*

const loaf = {
  flour: 300,
  water: 210,
  hydration () {
    return this.water / (this.flour * 100);
  }
};

//console.log(loaf);
//console.log(loaf.hydration());

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
    //console.log(obj[key]);
  }
}

//console.log(objTest(props));

/////////////////////////

const object = {
  meals: [
    'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'
  ]
};

//console.log(object.meals[3]);

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
    //console.log(obj[key]);
   
    if(obj[key].Boss === undefined){
      //console.log(`${obj[key].Job} ${obj[key].Name} doesn't report to anybody.`);
    } else {
      //console.log(`${obj[key].Job} ${obj[key].Name} reports to ${obj[key].Boss}.`);
    } 
  }
}

occupation(people);

/////////////////////////

let word = 'apple';

const deCoder = {
  'a': 2,
  'b': 3,
  'c': 4,
  'd': 5,
};

function decode(word){
  if(word[0] === 'a'){
    return word = deCoder['a'];
  }
  else {
    return '';
  }
}
console.log(decode(word));

/////////////////////////

*/


function createCharacter(Name, Nickname, Race, Origin, Attack, Defense){
return {
  name: Name,
  nickname: Nickname, 
  race: Race, 
  origin: Origin, 
  attack: Attack, 
  defense: Defense,
    describe: function() {
  console.log(`${this.name} is a ${this.race} from ${this.origin}.`);},

    evaluateFight: function(char1, char2) {
  if(attack > defense){
    // let x = 0;
    // let y = this.defense - this.attack;
    return `Your opponent takes ${this.x} damage and you receive ${this.y} damage`;
  } else if (defense > attack){
    return `Your opponent takes 0 damage.`;
  }
}
}
}
let Gandalf = createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth',10,6);
let Bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
let Frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
let Aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
let Legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
let Arwen = createCharacter('Arwen Undomiel', "arwen", "Half-Elf", "Rivendell", 50, 75);


let characters = [
  Gandalf,
  Bilbo,
  Frodo,
  Aragorn,
  Legolas,
  Arwen
];


console.log(characters);

let found = characters.find(function(element){
  if(element.nickname === 'aragorn'){
    return element.describe();
  }
})

let filtered = characters.filter(word => word.race === 'Hobbit');
let filteredAtk = characters.filter(word => word.attack > 5);
// let filtered = characters.filter(function(word){
//   if (word.race === 'Hobbit'){
//     return word.name;
//   }
// })

console.log(found);
console.log(filtered);
console.log(filteredAtk);
//evaluateFight(Bilbo, Frodo);