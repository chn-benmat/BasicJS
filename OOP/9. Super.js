/*
super ->
        ใช้เพื่อเรียกเมทอดหรือคอนสตรักเตอร์ของคลาสหรืออ็อบเจ็กต์แม่ (base class) 
        ที่ถูกสืบทอดไปยังคลาสลูก (derived class) หรืออ็อบเจ็กต์ลูก
*/

class Teacher {
        #name
        #password
        #course
        constructor(name, password, couse) {
                this.#name = name
                this.#password = password
                this.#course = couse
        }
        showDetail() {
                console.log(`ชื่อคุณครู: ${this.#name} มีรหัสผ่าน: ${this.#password} วิชาที่สอน: ${this.#course}`);
        }
}

// สืบทอดคุณสมบัติมาจาก Teacher
class Student extends Teacher {
        #subjects
        constructor(name,subjects) {
                super(name)
                this.#subjects = subjects
                console.log(`ชื่อนักเรียน: ${name} วิชาที่เรียน: ${this.#subjects}`);
        }
}
class Score extends Student{
        #scores
        constructor(name,subjects,scores){
                super(name,subjects)
                this.#scores = scores
                console.log(`ได้คะแนน: ${this.#scores}`);
        }
}

const teacher = new Teacher("ที", 1243, "คณิต")
teacher.showDetail()
const std = new Student("เอน","วิทย์")
const score = new Score("แอล","อังกฤษ" , 77)