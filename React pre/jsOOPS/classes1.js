class person{
  constructor(name,age,gender){
    this.Name=name,
    this.Age=age,
    this.Gender=gender
  }
}

class Teacher extends person{
    constructor(name,age,class_Strength){
        super(name,age);
        this.ClassStrength=class_Strength;
    }
}
class Student extends Teacher{
    constructor(name,age,cgpa){
        super(name,age)
        this.CGPA=cgpa
    }
}

let person1=new person('adam','20','male')
let Teacher1=new Teacher('steve',40,80)
let Student1=new Student('Mark',20,9.5)

console.log(person1)
console.log(Teacher1)
console.log(Student1)


