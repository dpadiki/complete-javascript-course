
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







/*if (scorejohn > scoremike){
    console.log(' John\'s team with score ' + scorejohn);
}else if (scoremike > scorejohn){
    console.log(' Mike\'s team with score ' + scoremike);
}else {
    console.log( ' It\'s an draw');
}
*/



























