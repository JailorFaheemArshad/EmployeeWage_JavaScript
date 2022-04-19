//Push Operation
const Student = ["bablu", "kiku", "Satish", "Jamie"];
Student.push("jack");

//Pop Operation
const Employee = ["akbar", "sagar", "adarsh", "Manoj"];
Employee.pop();


//Map Operation
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num)
 {
  return num * 10;
 }
 
//Find  Operation

const ages = [3, 10, 18, 20];

document.getElementById("demo").innerHTML = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}

//Filter Operation
const age = [32, 33, 16, 40];
const result = age.filter(checkAdult);

function checkAdult(age) 
{
  return age >= 18;
}