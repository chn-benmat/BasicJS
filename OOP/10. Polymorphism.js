/*
Polymorphism ->
        เป็นหลักการใน Object-Oriented Programming (OOP) ที่อนุญาตให้ Object หรือ Instance 
        ของคลาสสามารถทำหน้าที่แทน Object ของคลาสอื่นๆ ได้, ซึ่งทำให้โค้ดมีความยืดหยุ่นและสามารถใช้ฟังก์ชันที่เหมือนกันได้โดยทั่วไป

Overiding Method -> 
        เป็นหลักการที่ให้ความยืดหยุ่นในการเขียนโปรแกรมแบบ Object-Oriented Programming (OOP) 
        โดยทำให้คลาสลูก (sub-class) สามารถเขียนทับ (override) เมทอดที่ถูกสร้างขึ้นในคลาสแม่ (base class) ได้

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

class Student extends Teacher {
        #subjects
        constructor(subjects,name) {
                super(name)
                this.#subjects = subjects
        }
        // Overiding Method
        showDetail(){
                console.log(`นักเรียนชอบเรียนวิชา ${this.#subjects} นี้`);
        }
}
const teacher = new Teacher("ที", 1243, "คณิต")
teacher.showDetail()
const std = new Student("วิทย์","เอน")
std.showDetail()