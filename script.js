// const years = [1990, 1998, 1997];

// // ES5
// var ages = years.map(function (el) {
// 	return 2019 - el
// });

// console.log(ages);

// // ES6

// let ages6 = years.map(el => 2019 - el);
// console.log(ages6);

// ages7 = years.map((el, i) => `Age element ${i + 1}: ${2019 - el}`);
// console.log(ages7);

// ages8 = years.map((el, index) => {
// 	const now = new Date().getFullYear();
// 	const age = now - el;
// 	return `Age Element ${index + 1}: ${age}`
// });
// console.log(ages8);


	// Arrays
//const boxes = document.querySelectorAll(".box")

// // ES5
// const boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur) {
// 	cur.style.backgroundColor = 'dodgerblue'
// });



// ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

// for (var i = 0; i < boxesArr5.length; i++) {

// 	if (boxesArr5[i].className === 'box blue') {
// 		continue;
// 	}

// 	boxesArr5[i].textContent = "I'm blue"
// }


// for (var cur of boxesArr6) {
// 	if (cur.className.includes('blue')) {
// 		continue;
// 	}

// 	cur.textContent = "I've changed to blue"
// }

// function addFourAges (a, b, c, d) {
// 	return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// //ES6 spread operator
// const sum3 = addFourAges(...ages);
// console.log(sum3)

// let familySmith = ['John', 'Jane', 'Mark'];
// let familyMiller = ['Mary', 'Bob', 'Ann'];

// let bigFamily = [...familySmith, ...familyMiller]
// console.log(bigFamily);

//ES5

// function isFullAge5() {
// 	// console.log(arguments);
// 	var argsArr = Array.prototype.slice.call(arguments);
// 	var date =  new Date()
// 	argsArr.forEach(function(cur) {
// 		console.log(date.getFullYear() - cur <= 18)
// 	});
// }

// isFullAge5(1990, 2005, 1965)

//ES6

// function isFullAge6(...years) {
// 	var date =  new Date()
// 	years.forEach(cur => console.log((date.getFullYear() - cur) >= 18));
// }
// isFullAge6(1990, 2005, 1965, 1997)


// ES6 classes

// class Person6 {
// 	constructor(name, yearOfBirth, job) {
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge() {
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age)
// 	}

// 	static greeting() {
// 		console.log('hey there!!')
// 	}
// }

// const john6 = new Person6('John', 1990, 'teacher');
// john6.calculateAge
// Person6.greeting();

// Subclass ES6

class Person6 {
	constructor(name, yearOfBirth, job) {
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		var age = new Date().getFullYear() - this.yearOfBirth;
		console.log(age)
	}

}

class Athlete6 extends Person6 {
	constructor(name, yearOfBirth, job, olympicGames, medals) {
		super(name, yearOfBirth, job);
		this.olympicGames = olympicGames;
		this.medals = medals;
	}

	wonMedals() {
		this.medals++;
		console.log(this.medals);
	}

}

const johnAthlete6 = new Athlete6('John', 1997, 'swimmer', 3, 15);

johnAthlete6.wonMedals();
johnAthlete6.calculateAge();

