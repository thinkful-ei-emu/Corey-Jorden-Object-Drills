'use strict';

const data = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

function makeStudentsReport(data) {

  const newArry = [];
  let student;
  
  for(let i = 0; i < data.length; i++){
    student = data[i];
    //console.log(data);
    newArry.push(`${student.name}: ${student.grade}`);
  }
  return newArry;
}
let output = makeStudentsReport(data);
console.log(output);

/////////////////////////

function enrollInSummerSchool(students) {
  let update = [];
  for (let i = 0; i < students.length; i++){
    update.push({
      name: students[i].name,
      status: 'In Summer school',
      course: students[i].course,
    })
  }
  return update;
}

/////////////////////////

function findById(items, idNum) {
  for(let i = 0; i < items.length; i++){
    if (items[i].id === idNum){
      return items[i];
    }
  }
}

/////////////////////////

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  if(Object.keys(object).length !== expectedKeys.length) {
    return false;
  }

  for(let i = 0; i < expectedKeys.length; i++){
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    }
    return true;
  }
}