// function constructor

/*
var John = {
     name: 'John',
     yearOfBirth: 1990,
     job: 'teacher'
};

var Person = function( name, yearOfBirth, job){
this.name = name;
this.yearOfBirth = yearOfBirth;
this.job = job;
}

Person.prototype.calculateAge = function(){
     console.log(2019 - this.yearOfBirth);

Person.prototype.lastName = 'Padiki';

}

var john = new Person('john', 1990, 'software');
var usha = new Person('Usha', 1991, 'salesforce');
var dhruva = new Person('Dhruva', 2019, 'Richie');

john.calculateAge();
usha.calculateAge();
dhruva.calculateAge();

console.log(dhruva.lastName);
console.log(usha.lastName);


var Vehicle = function(mileage, yearofMaking, speed){

     this.mileage = mileage;
     this.yearofMaking = yearofMaking;
     this.speed = speed;
     
}


Vehicle.prototype.model = 'Automatic';
var tesla = new Vehicle(25, 2018, 60);

console.log(tesla.mileage);
console.log(tesla.speed);
console.log(tesla.model);

*/

//object.create
/*
var personProto = {
     calculateAge: function(){
          console.log(2019 - yearofBirth);
     }
}

var usha = Object.create(personProto)

usha.name = 'usha';
usha.yearofBirth = 1991;
usha.job = 'salesforce';

var dheeraj = Object.create(personProto)
*/

//primitives and objects
/*
//primitives
var a = 25;
var b = a;

a = 66;
console.log(a , b);

//objects
var obj1 = {
     name: 'Dheeraj',
     age: 28,
};

var obj2 = obj1;
obj1.age = 55;
console.log(obj1,obj2);

//functions
var age = 30;
var obj = {
     name: 'Dheeraj',
     city: 'kakinada'
};

function change(a,b){
     a = 40;
     b.city = 'vizag';
}
change(age, obj);
console.log(age);
console.log(obj.city);

*/

// passing functions as arguments

/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr, fn){
     var arrRes = [];
     for (var i = 0; i < arr.length; i++){
            arrRes.push(fn(arr[i])); 
     }
     return arrRes;
}


function calculateAge(el){
     return 2019 - el;
}

function isFullAge(el){
     return el >= 18;
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
console.log(ages);
console.log(fullAges);

*/

//function calling function
/*
function interviewQuestion(job){
     if (job === 'designer'){
          return function(name){
               console.log(name + ' Can you explain what UX design is?');
          }
     } else if (job === 'teacher') {
          return function(name){
               console.log('What subject do you Teach?' + name);
          }
     } else {
          return function(name) {
               console.log('Hello' + name + 'What do you do?');
          }
     }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Dhruva');
designerQuestion('Dheeraj');

interviewQuestion('designer')('Usha');

*/

// (function (goodLuck){
//      var score = Math.random() * 10;
//      console.log(score >= 5);
// }) (5);

//console.log(score);

//closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement';
     return function (yearOfBirth){
          var age = 2019 - yearOfBirth;
          console.log((retirementAge - age) + a);
     }
}

var retirementIndia = retirement(60);

retirementIndia(1990);

retirement(65)(1990);
*/
// test 1

/*
function interviewQuestion(job){
     return function(name){
          if (job === 'designer'){
               console.log(name + ' Can you explain what UX design is?');
               
          } else if (job === 'teacher') {
               console.log('What subject do you Teach?' + name);
               
          } else {
               console.log('Hello' + name + 'What do you do?');
          }
     }
}
     
     
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('Dhruva');
designerQuestion('Dheeraj');

*/

// bind call and apply

/*
var Dheeraj = {
name: 'Dheeraj',
age: 29,
job: 'Software engineer',
presentation: function(style, timeOfDay){
     if (style === 'formal'){
          console.log('Good ' + timeOfDay + ' Ladies and Gentleman I\'m  ' + this.name + ' I\'m a ' + this.job + ' I\'m ' + this.age + ' Years old' + ' Have a nice ' + timeOfDay);
          }else if (style === 'friendly'){
          console.log('Hey! What\'s up I\' m ' + this.name + ' I\'m a ' + this.job + ' I\'m ' + this.age + ' Years old' + ' Have a nice ' + timeOfDay);
          }
     }
};

var usha = {
     name:'usha',
     age:27,
     job: 'Salesforce Developer'
};

Dheeraj.presentation('formal', 'morning');
Dheeraj.presentation.call(usha,'friendly', 'evening');
//Dheeraj.presentation.apply[usha,'friendly', 'evening'];
var DheerajFriendly = Dheeraj.presentation.bind(Dheeraj, 'friendly');

DheerajFriendly('Afternoon');
*/

//challenge 2
/*
(function(){
     function Question (question, answers, correct){
          this.question = question;
          this.answers = answers;
          this.correct = correct;
     }
     
     Question.prototype.displayQuestion = 
          function() {
          console.log(this.question);
          for(i =0;i < this.answers.length; i++){
               console.log(i + ':' + this.answers[i]);
          }
     }
     
     Question.prototype.checkAnswer =
     
     function(ans){
     if (ans === this.correct){
          console.log('Correct Answer!');
     }else{
          console.log('Wrong answer. Try Again');
     }
     }
     
     
     var q1 = new Question('Is Javascript the Coolest programming language?', 
     ['yes', 'no'],
     0 );
     
     var q2 = new Question('What is the name of the course\'s teacher',
     ['john','usha','jonas'],
     2);
     
     var q3 = new Question('What does best describe coding?',
     ['boring','hard','fun','idious'],
     2);
     
     var questions = [q1, q2, q3];
     
     var n = Math.floor(Math.random()* questions.length);
     
     questions[n].displayQuestion();
     
     var answer = parseInt(prompt('Please select the correct option below'));
     
     questions[n].checkAnswer(answer);
})()
*/
//expert level


(function(){
     function Question (question, answers, correct){
          this.question = question;
          this.answers = answers;
          this.correct = correct;
     }
     
     Question.prototype.displayQuestion = 
          function() {
          console.log(this.question);
          for(i =0;i < this.answers.length; i++){
               console.log(i + ':' + this.answers[i]);
          }
     }
     
     Question.prototype.checkAnswer =
     function(ans){
     if (ans === this.correct){
          console.log('Correct Answer!');
     }else{
          console.log('Wrong answer. Try Again');
     }
     }
     
     
     var q1 = new Question('Is Javascript the Coolest programming language?', 
     ['yes', 'no'],
     0 );
     
     var q2 = new Question('What is the name of the course\'s teacher',
     ['john','usha','jonas'],
     2);
     
     var q3 = new Question('What does best describe coding?',
     ['boring','hard','fun','idious'],
     2);
     
     function nextQuestion(){

          var questions = [q1, q2, q3];

          function score(){
               var sc = 0;
          }
     
          var n = Math.floor(Math.random()* questions.length);
          
          questions[n].displayQuestion();
          
          var answer = prompt('Please select the correct option below');
          
          if (answer !== 'exit' ){
               questions[n].checkAnswer(parseInt(answer));
               nextQuestion();
          }
     }
     nextQuestion();
})()




