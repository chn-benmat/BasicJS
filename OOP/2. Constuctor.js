/*
Constructor ->
        ฟังก์ชันที่ถูกเรียกขณะที่สร้างอ็อบเจ็กต์จากคลาสหรือฟังก์ชัน-คอนสตรักเตอร์. 
        การใช้งานคอนสตรักเตอร์ช่วยกำหนดค่าเริ่มต้นหรือทำงานเตรียมอื่น ๆ ที่ต้องการเมื่ออ็อบเจ็กต์ถูกสร้างขึ้น

this ->
        ที่ใช้ในการอ้างถึงอ็อบเจ็กต์ปัจจุบันภายในขอบเขตของฟังก์ชันหรือคลาสที่กำลังทำงาน. 
        การใช้ "this" ช่วยให้เราสามารถเข้าถึงและใช้คุณสมบัติ (properties) และเมทอด (methods) ของอ็อบเจ็กต์ได้

*/

class User {
        name = "Avatar"
        password = 0
        // สร้าง obj จะเรียกใช้งาน คำสั่งใน constructor เลย
        // รับพารามิเตอร์ name และ password
        constructor(name, password) {
                console.log("เรียกใช้งาน Constructio");
                // name ฝั่งซ้ายและขวา ไม่ใช้ตัวเดียวกัน
                // name ฝั่งซ้ายคือ name จาก User โดยใข้ this เพื่ออ้างถึง Obj หรือ User 
                // name ฝั่งขวา คือ name ของ Parameter ของ constructor
                this.name = name // คือการเอาค่าที่ได้มาแทน name ที่ค่าเดิม Avatar เป็น Jona 
                this.password = password
        }
}

// ข้างใน ( ) ของ User คือ Argument ที่จะส่งค่าไปยัง Parameter ของ Constructor name, password
// เราต้องส่ง Argument ให้ครบตามที่เราสร้าง Parameter ถ้าไม่ครบจะทำให้ Error ได้

const user1 = new User("Jona", 1234) // Output: เรียกใช้งาน Constructio
console.log(user1.name, user1.password); // Output: Jona 1234

const user2 = new User("Hello", 4321) // Output: เรียกใช้งาน Constructio
console.log(user2.name, user2.password); // Output: Hello 4321