/*
Parameter -> คือตัวแปรที่ประกาศในฟังก์ชันเพื่อรับค่าที่ถูกส่งเข้ามา.

Argument -> คือค่าที่ส่งเข้าไปในฟังก์ชันเมื่อถูกเรียกใช้

Function ->
    Function คือกลุ่มของคำสั่งที่รวมกันเพื่อทำงานบางอย่าง. Function ช่วยในการจัดระเบียบโค้ด
และทำให้โค้ดสามารถนำไปใช้ซ้ำได้. ฟังก์ชันมีชื่อและสามารถรับค่า (arguments) และส่งค่ากลับ (return) ได้

Return
    การใช้คำสั่ง return ในฟังก์ชันมีไว้เพื่อส่งค่ากลับจากฟังก์ชันไปยังส่วนที่เรียกใช้. 
    การ return ทำให้ค่าที่ได้จากการประมวลผลในฟังก์ชันนั้นๆ สามารถนำไปใช้ต่อในโปรแกรม
*/

// Function แบบไม่มี Return
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John");

// ในตัวอย่าง greet("John"), "John" คือ argument ที่ถูกส่งไปยัง parameter name ในฟังก์ชัน greet
/* ผลลัพธ์ greet
Hello, John!
*/

/* การทำงาน greet
        เรียกใช้ฟังก์ชัน greet และส่ง "John" เข้าไปเป็น argument.
        ในฟังก์ชัน greet, มีการ log ข้อความ "Hello, John!" ลงบน console.
        ฟังก์ชันไม่มีการ return ค่า.
*/

// Function แบบมี Return
// a, b คือ Parameter 3, 5 คือ Argument
function add(a, b) {
    return a + b;
}

let result = add(3, 5);
console.log(result);
// ในตัวอย่าง add(3, 5), 3 และ 5 คือ arguments ที่ถูกส่งไปยัง parameters a และ b ในฟังก์ชัน add
/* ผลลัพธ์ add
8
*/

/* การทำงาน add
        เรียกใช้ฟังก์ชัน add และส่งค่า 3 และ 5 เข้าไปเป็น arguments.
        ในฟังก์ชัน add, มีการ return ผลลัพธ์ของการบวกของ a และ b.
        ค่าที่ return นั้นถูกนำไปเก็บไว้ในตัวแปร result.
        แสดงค่าของ result บน console.
*/