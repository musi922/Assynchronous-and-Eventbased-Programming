class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;  
    }

    static fullname() {
        return `Richard 20`;
    }

    get totalAge() {
        return `${this.age}`;
    }

    get studentAge() {
        return this.age;
    }
}

class Student extends Person {
    constructor(name, age, studentLastName) {
        super(name, age);  
        this.studentLastName = studentLastName;
    }

    static fullDetails() {
        return `Student Richard Musime, Age: 40`;
    }
}


var person1 = new Person("Richard", 20);
console.log(Person.fullname());
console.log(person1.totalAge);

var student1 = new Student("Richard", 40, "Musime");
console.log(Student.fullDetails());
console.log(student1.studentAge);
console.log(student1.studentLastName);
