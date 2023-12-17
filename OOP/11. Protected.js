/*
Protected -> 
        ในภาษาโปรแกรมมิ่งหลักๆ ใช้เพื่อระบุสิทธิ์การเข้าถึงของสมาชิก (properties หรือ methods) 
        ในคลาสให้เป็น "protected". นั่นหมายความว่าสมาชิกที่ถูกประกาศเป็น protected สามารถเข้าถึงได้จากคลาสที่สืบทอด (sub-class) 
        แต่ไม่สามารถเข้าถึงจากภายนอกคลาสได้
*/

// Protected
class User {
        _name
        #password

        constructor(name, password) {
                this._name = name;
                this.#password = password;
        }

        getPassword() {
                return this.#password;
        }

        showDetail() {
                console.log(`ชื่อคุณครู: ${this._name} มีรหัสผ่าน: ${this.#password}`);
        }
}

class Teacher extends User {
        #course
    
        constructor(name, password, course) {
            super(name, password);
            this.#course = course;
        }
    
        // Overriding Method
        showDetail() {
            console.log(`ชื่อคุณครู: ${this._name} สอนวิชา ${this.#course}`);
        }
    }
    

class Student extends User {
        #subjects
        constructor(name, subjects) {
                super(name)
                this.#subjects = subjects

        }
        // Overiding Method
        showDetail() {
                console.log(`นักเรียนชอบวิชา ${this.#subjects} นี้`);
        }
}
const teacher = new Teacher("ที", 123, "คณิต")
teacher.showDetail()
const std = new Student("เอน", "วิทย์")
std.showDetail()