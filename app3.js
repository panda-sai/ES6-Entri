class Person{

    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    walk(){
        console.log("Walking")
    }

    run(){
        console.log("Running")
    }

    eat(){
        console.log(this.name +" is eating")
    }
}

class Student extends Person{
    constructor(name, age, gender,rollno)
    {
        super(name,age,gender)
        this.rollno = rollno
    }

    read()
    {
        console.log("reading")
    }

}

let person1 = new Person('VB',23,'Male')
let person2 = new Person('Ram',40,'Male')

let s1 = new Student('VB',23,'Male',34)
s1.read()

s1.run()

console.log(person1.name)
console.log(person2.name)

person1.eat()
person2.eat()