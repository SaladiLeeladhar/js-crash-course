/*
// arrays //
const fruits=['apples','mangoes','pears',];
fruits[3]='grapes';
fruits.push('oranges');
fruits.unshift('strawberries');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('pears'));
console.log(fruits);*/

/* 
const person = {
	firstname:'babbu',
	lastname:'saladi',
	age:30,
	hobbies: ['music','dance','movies'],
	address:{
		street:'rampuram',
		city:'vizag',
		state:'Ap'
	}

} 
person.email='babbu@gmail.com';
console.log(person);
*/
/*
const todos=[
   {
    id:1,
    task:'take out trash',
    isdone:true, 
   },
    {
    id:2,
    task:'meeting with gf',
    isdone:false, 
   },
    {
    id:3,
    task:'dentist appt',
    isdone:true, 
   },
];

  
  // for each,map,filter
   const todocompleted= todos.filter(function(todo){
   	return todo.isdone ===true;
   }).map(function(todo){
   	  return todo.task;
   });
   console.log(todocompleted);*/

  /*for(let i=0; i<todos.length; i++){
  	console.log(todos[i].task);}*/
  
  /* for(let todo of todos){
	console.log(todo.task)*/
  
  
  /*
const todoJSON=JSON.stringify(todos);
console.log(todoJSON)*/
// For
/*const x=24;

if(x===33){
	console.log('x is 33');
}else if(x > 33){
	console.log('x is greater than 33');
}else{
	console.log('x is less than 33')
}*/
/*const x=12;

const color= x < 25 ? 'red' : 'blue';
switch(color){
	case 'red':
	console.log('color is red');
	break;
	case 'blue':
	console.log('color is blue');
	break;
	default:
	console.log('color not matched')
	break;
}*/

/*const addnumbers=(num1,num2) => {
	returnnum1 + num2;
}
console.log(addnumbers(5,5));*/
// constructor function
/*
function Person( firstName, lastName,dob){
	this.firstName = firstName;
	this.lastName= lastName;
	this.dob = new Date(dob);
	
	
}

Person.prototype.getBirthYear = function(){
	return this.dob.getFullYear();
}*/
/*class Person{
	constructor( firstName, lastName,dob) {
	this.firstName = firstName;
	this.lastName= lastName;
	this.dob = new Date(dob);
}

getBirthYear(){
	return this.dob.getFullYear();
}
}
 
// instantiate object
const person1= new Person('john','doe','4-3-1998');
const person2= new Person('ibrahim','md','4-6-1998');
console.log(person2.getBirthYear());
	console.log(person1);*/

// const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.children[1].innerText =' babbu';
//ul.lastElementChild.innerHTML ='<h1>HELLO</h>';

//btn.style.background = 'red';
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout',(e) => {
	e.preventDefault();
	document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML ='<h1>HELLO</h1>';	
});