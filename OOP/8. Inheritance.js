/*
Inheritance -> 
        ทำการสร้างสิ่งใหม่ขึ้นด้วยการสืบทอด หรือรับเอา (ingerit) คุณสมบัติบางอย่างมาจากสิ่งเดิมที่มีอยู่แล้ว

ข้อดีของการ Inheritance -> 
        สามารถนำสิ่งที่เคยสร้างขึ้นแล้วนำกลับมาใช้ใหม่ได้ ทำให้ช่วยประหยัดเวลาการทำงานลงเนื่องจากไม่ต้องเสียเวลาพัฒนาใหม่หมด
*/

class Teacher {
        #name
        #password
        constructor(name, password) {
                this.#name = name
                this.#password = password
                this.showDetail()
        }
        showDetail() {
                console.log(`ผู้ใช้: ${this.#name} มีรหัสผ่าน: ${this.#password}`);
        }
}

// สืบทอดคุณสมบัติมาจาก Teacher
class Student extends Teacher{
       
}

const std = new Student("นักเรียน", 2222)