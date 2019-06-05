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

