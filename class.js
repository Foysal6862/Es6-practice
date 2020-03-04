class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school="kollimunnisa school";
    }
}
const Student1=new Student(12, "shuvo");
const Student2=new Student(16, "kona");
console.log(Student1, Student2);
console.log(Student1.name, Student2.name);