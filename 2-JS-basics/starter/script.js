
/*
var firstName = "Ganesha";
console.log(firstName)
var lastName = "Vinayaka";
var age = 28;

var agelimit = true;
console.log(agelimit)
var job;
console.log(job)
job = 'developer';
console.log(job)
*/

/*
 Variable Mutation and type coerction 
 */
/*
 var firstName = "Chitti";
var age = 40;
// type coerction 
console.log(firstName + " " + age);
var job, ismarried;
job = 'Developer';
ismarried = true;
console.log(firstName + ' is a ' + age + ' years old ' + job + ' .Is she married?' + ismarried);

// variable mutation
age = 'Twenty eight';
job = 'tester';
alert(firstName + ' is a ' + age + ' years old ' + job + ' .Is she married?' + ismarried);

var lastName = prompt('What is her last name?');
console.log(firstName + " " + lastName);
*/

// Basic operators
/*
var year, yearchitti, yeardheeju;
now = 2019;
agechitti = 28;
agedheeju = 29;

// Math Operators
yearchitti = now - agechitti;
yeardheeju = now - agedheeju;
console.log(yearchitti);
console.log(yeardheeju);
console.log( now + 2);
console.log( now - 2);
console.log( now * 2);
console.log( now / 10);


//Logical Operators

var agecompare = agechitti > agedheeju;
console.log(agecompare);

// typeof operator
console.log(typeof agecompare);
console.log(typeof now);
*/

// operator precedence
/*
var now = 2019;

var yeardheeju = 1990;
var fullage = 18 ;

// multiple operators
var isfullage = now - yeardheeju >= fullage;
console.log(isfullage);

// Grouping Operators
var agedheeju = now - yeardheeju;
var agechitti = 30;
var average = (agechitti + agedheeju) / 2;
console.log(average);

// Multiple assignments
x = y = (3 + 5) * 4 - 6; //8 * 4-6 //32 -6 // 26
console.log(x , y);

// more Operators
x *= 2; // same as x = x * 2
console.log(x);

x += 10; // same as x = x + 10
console.log(x);

x++; // which is same as x = x+1
console.log(x);

x--; // which is same as x = x+1
console.log(x);

*/

/* 
// first test program
var bmi;
markmass = 70;
johnmass = 100;
markheight = 180;
johnheight = 200;

bmimark = markmass / (markheight * markheight);
console.log(' Mark BMI is of ' + bmimark);

bmijohn = johnmass / (johnheight * johnheight);
console.log(' John BMI is of ' + bmijohn);

var bmicompare;

bmicompare = bmimark > bmijohn;
console.log(' Is mark\'s BMI higher than john\'s? ' +  bmicompare );
*/
/*
var firstName = 'Amma';
var civilstatus = 'single';

if (civilstatus === 'Married')
{
    console.log( firstName + ' is Married!');
}else{
    console.log(firstName + ' is Hoping to be married soon' );
}

var ismarried = true;

if (ismarried) {
    console.log( firstName + ' is Married!');
} else {
    console.log(firstName + ' is Hoping to be married soon' );
}
*/


/*
// 1st test using if else
var bmi;
markmass = 170;
markheight = 200;
johnmass = 100;
johnheight = 200;

bmimark = markmass / (markheight * markheight);
console.log(' Mark BMI is of ' + bmimark);

bmijohn = johnmass / (johnheight * johnheight);
console.log(' John BMI is of ' + bmijohn);

if(bmimark > bmijohn){
console.log('Mark\'s BMI is higher than John\'s');
}else{
console.log('John\'s BMI is higher than Mark\'s');  
}
*/

/*
// else if statment
var firstName = 'Dheeju';
var age = 32;

if (age < 20){
    console.log( firstName + " is a teenager");
} else if( age >= 20 && age < 30){
    console.log( firstName + ' is a Guy' );
} else{
    console.log( firstName + " is a Man");
}
*/


/*
var firstName = 'Dheeju';
var age = 16;

// ternary operator
age >= 18 ? console.log( firstName + ' drinks beer')
: console.log( firstName + ' drinks Juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);

//switch statment
var job = 'Trainer';

switch (job){
    case 'teacher':
    console.log( firstName + ' teaches in the school');
    break;
    case 'Engineer':
    console.log( firstName + ' works for IT ');
    break;
    case 'driver':
    console.log( firstName + '  drives uber in Almere');
    break;
    default:
    console.log( firstName + ' Enjoys life');
}

switch (true){
    case age < 20:
    console.log( firstName + " is a teenager");
     break;
    case age >= 20 && age < 30:
    console.log( firstName + " is a Guy");
     break;
    default:
    console.log( firstName + " is a Man");
}


var weight;
weight = 23;

if (weight || weight === 0){
      console.log('variable is defined');
} else {
    console.log('variable is not defined');
}

// Equality operators
if (weight == 23){ // == is called strict equality operator
    console.log('the == operator does type coresion');
}
*/

/*
//coding challendge 2

var scorejohn = ( 189 + 120 + 103)/3;
var scoremike = ( 116 + 94 + 123)/3;
var scoremary = ( 197 + 137 +105)/3;

console.log( scorejohn, scoremike , scoremary);

if (scorejohn > scoremike && scorejohn > scoremary){
    console.log(' John\'s team with score ' + scorejohn);
} else if (scoremike > scorejohn && scoremike > scoremary){
    console.log(' Mike\'s team with score ' + scoremike);
} else if (scoremary > scorejohn && scoremary > scoremike){
    console.log(' Mary\'s team with score ' + scoremary);
} else{
    console.log(' It\'s an draw');
}

// my second commit haha

*/



/*
if (scorejohn > scoremike){
    console.log(' John\'s team with score ' + scorejohn);
}else if (scoremike > scorejohn){
    console.log(' Mike\'s team with score ' + scoremike);
}else {
    console.log( ' It\'s an draw');
}
*/


//functions
/*
function carmodel(Modelname){
return Modelname;
}

var whichcar = carmodel("Tesla");
console.log(whichcar);

function calculateage(birthyear){
    return 2019 - birthyear;
}

var agedheeju = calculateage(1990);
console.log(agedheeju);
*/

/*
function calculateage(birthyear){
    return 2019 - birthyear;
}
var age = calculateage(1990);
console.log ( 'The age is' + age );

function yearsuntilretirement(year, firstName){
    var age = calculateage(year)
    var retirement = 65 - age;
    if(retirement > 0){
    console.log( firstName + ' is about to retire in ' + retirement + ' years');
    } else {
    console.log( firstName + ' is retired');
    }
}

    yearsuntilretirement(1990, 'Dheeraj');
    yearsuntilretirement(1991, 'usha');
    yearsuntilretirement(1945, 'india');
*/

// function statements and expressions
// function expression function whatdoyoudo(job, firstname)

// Function Expression
/*
var whatdoyoudo = function(job, firstname){

switch (job) {
 case 'teacher':
  return firstname + ' Teaches kids how to code'
 case 'driver':
  return firstname + ' drivers the car'
  case 'IT':
  return firstname + ' works as IT engineer'
  default:
  return firstname + ' Does something else.'
}
}
console.log(whatdoyoudo('IT', 'Dheeraj'));
*/

//Arrays

/*
var names = ['Dheeju', 'graham', 'Bert', 'Arie'];
var years = Array(1990, 1991, 1992);

console.log( names);
console.log( names.length);

//mutate array data
names[2] = 'froklage';
names[names.length] = 'Jansen';
console.log( names);

//Different Data types

var dheeju = [ 'padiki', 'dheeraj', 1990, 'designer', false];
dheeju.push('blue');
dheeju.unshift('Mr');

console.log(dheeju);

dheeju.pop();
dheeju.shift();
console.log(dheeju);

console.log(dheeju.indexOf(1990));

var isdesigner = dheeju.indexOf('designer') === -1 ?
'Dheeju not a designer' : 'Dheeju is a Designer';
console.log(isdesigner);

*/
/*
//Arrays assignment

function tipcaluculator(bill){
    var percentage;
        
    switch (bill) {
        case bill <50:
         percentage = 0.2;
         break;
        case bill >= 50 && bill < 200:
         percentage = 0.15;
         break;
        default:
         percentage = 0.1;
        }
        return percentage * bill;
}

    var bills = [124, 48, 68]
    var tips = [ tipcaluculator(bills[0]) ,
                 tipcaluculator(bills[1]) ,
                 tipcaluculator(bills[2]) ]
    var finalvalues = [ bills[0] + tips[0],
                        bills[1] + tips[1],
                        bills[2] + tips[2]]
    console.log(tips, finalvalues);
    
*/

//objects and properties

/*
var dheeju = {
    firstName: 'Dheeraj',
    lastName: 'Padiki',
    DOB: 1990,
    family: ['usha', 'Rajani', 'raghu', 'Dhruva'],
    Ismarried: false,
    job: 'software'
}
console.log(dheeju.firstName);
console.log(dheeju['lastName']);
var x = 'lastName';
console.log(dheeju[x]);

//new object syntax
var usha = new Object()
usha.firstName = "Usha";
usha.lastName = "Padiki";
usha.DOB = 1991;
console.log(usha);
*/
/*
var dheeju = {
    firstName: 'Dheeraj',
    lastName: 'Padiki',
    DOB: 1991,
    family: ['usha', 'Rajani', 'raghu', 'Dhruva'],
    Ismarried: false,
    job: 'software',
    Calcage: function(){
        this.age =  2019 - this.DOB;
    }
}
dheeju.Calcage()
console.log(dheeju)
*/

//Challenge 4
/*
var mark = {
    fullname: 'Mark',
    mass: 100,
    height: 1.76,
    markbmi: function(){
    this.bmi = this.mass / (this.height*this.height)
    return this.bmi;
    }
   }

var john = {
    fullname: 'john',
    mass: 90,
    height:1.80,
    johnbmi: function(){ 
        this.bmi = this.mass / (this.height*this.height)
        return this.bmi;
    }    
}

mark.markbmi()
john.johnbmi()

console.log(mark, john);


if(mark.markbmi > john.johnbmi){
    console.log('The BMI of ' + mark.fullname + ' is greater than ' + john.fullname)
} else if (john.johnbmi > mark.markbmi) {
    console.log('The BMI of ' + john.fullname + ' is greater than ' + mark.fullname)
} else {
    console.log('The BMI of ' + john.fullname + ' is equal to ' + mark.fullname)
}

*/

/*
//loops & iterations
//for loop
for (i = 1; i <= 20; i += 2){
    console.log(i);
}

var dheeju = ['dheeraj', 'padiki', 1990, 'developer',false];
for (var i = 0; i < dheeju.length; i++){
console.log(dheeju[i]);
}

//while loop
var i = 0;
while (i < dheeju.length){
    console.log(dheeju[i]);
    i++;
}
*/


// continue and break statements

/*
var dheeju = [ 'dheeraj', 'usha', 1990, 'kakinada'];

for (var i = 0; i < dheeju.length; i++){
    if(typeof dheeju[i] !== 'string')continue ; 
    console.log(dheeju[i]);
}

for (var i = 0; i < dheeju.length; i++){
    if(typeof dheeju[i] !== 'string') break ; 
    console.log(dheeju[i]);
}

//looping backwards
for (var i = dheeju.length - 1; i >= 0; i--) {
    console.log(dheeju[i]);
}
*/

// coding challenge 5

/*
var john = {
    fullname: 'john Smith',
    bills: [124,48,268,180,42],
    calctip: function(){
        this.tips = [];
        this.finalvalue = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if (bill < 50){
                percentage = 0.5;
            }else if (bill >= 50 && bill < 200){
                percentage = 0.2;
            }else{
                percentage = 0.1;
            }

            this.tips[i] = bill * percentage;
            this.finalvalue[i] = bill + bill * percentage;
        }
    }
}

var Mark = {
    fullname: 'Mark Miller',
    bills: [77,375,110,45],
    calctip: function(){
        this.tips = [];
        this.finalvalue = [];

        for (var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            if (bill < 100){
                percentage = 0.2;
            }else if (bill >= 100 && bill < 300){
                percentage = 0.1;
            }else{
                percentage = 0.25;
            }

            this.tips[i] = bill * percentage;
            this.finalvalue[i] = bill + bill * percentage;
        }
    }
}

john.calctip();
Mark.calctip();
console.log(john, Mark);

function calcAverage(tips){
    var sum = 0;
    for (i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum /tips.length;
}

john.average = calcAverage(john.tips);
Mark.average = calcAverage(Mark.tips);

console.log(john, Mark);

*/














