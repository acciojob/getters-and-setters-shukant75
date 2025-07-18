//complete this code
class Person {
	constructor(name,age){
		this._name= name;
		this._age= age;
	}
	get name(){
		return this._name;
	}
		get age(){
			return this._age;
		}
	set age(age) {
     return this._age = age;
  }
}

class Student extends Person {
 study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {teach() {
    console.log(`${this.name} is teaching`);
  }
 }
const person = new Person("John", 25);
console.log(person.name);
person.age = 30;
console.log(person.age); // Output: 30

// Student instance
const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

// Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output:
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
