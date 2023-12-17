/*
class ->
        ใน JavaScript จะช่วยให้โปรแกรมเมอร์สามารถสร้างอ็อบเจ็กต์จาก class นั้น ๆ ได้ง่ายขึ้น 
        และลดการทำซ้ำของโค้ดเพื่อสร้างอ็อบเจ็กต์ที่มีลักษณะคล้ายกัน

Attribute, Property ->
        Attribute หรือ Property อธิบายข้อมูลหรือคุณสมบัติที่เกี่ยวข้องกับอ็อบเจ็กต์. 
        เช่น ในภาษา JavaScript, คุณสมบัติของอ็อบเจ็กต์จะถูกเรียกว่า attribute หรือ property

new ->
        ใช้สร้างอ็อบเจ็กต์จากคลาสหรือฟังก์ชัน-คอนสตรักเตอร์ (constructor function)
        ใน JavaScript. เมื่อใช้ new, จะทำให้อ็อบเจ็กต์ใหม่ถูกสร้างขึ้นและได้รับคุณสมบัติและเมทอดต่าง ๆ จากคลาสหรือฟังก์ชันนั้น ๆ

กฎการตั้งชื่อ
        1 ชื่อ Class ตัวอักษรแรกควรเป็นตัวพิมพ์ใหญ่ที่เหลือพิมพ์เล็ก เช่น MyClass, User เป็นต้น
        2 ขื่อ Object กำหนดเป็นตัวพิมพ์เล็กทั้งหมด เช่น user1, myname1 เป็นต้น
        3 Attribute หรือ Property กำหนดเป็นตัวพิมพ์เล็กทั้งหมด เช่น name, age เป็นต้น
*/

// สร้าง Class
class User {
        // Attribute หรือ Property name และ age คือ Attribute หรือ Property ของคลาส User
        // ChueM และ 19 คือค่าเริ่มต้น (default values) ที่ถูกกำหนดให้กับ Attribute หรือ Property นี้
        name = "ChueM"
        age = 19
}

// การสร้าง object ของคลาส User สามารถระบุ const หรือ let ก็ได้ตามด้วยชื่อ obj มีค่าเท่ากับ new ตามด้วยชื่อ Class
const user1 = new User()
user1.name = "Oil" // การเปลี่ยนค่าใหม่
user1.age = 17 // การเปลี่ยนค่าใหม่

// การเข้าถึง Attribute หรือ Property name
console.log(user1.name); // Output: Oil
// การเข้าถึง Attribute หรือ Property age
console.log(user1.age); // Output: 17

// สามารถสร้าง obj ได้มากกว่า 1 obj
const user2 = new User()