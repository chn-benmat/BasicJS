/*
Variable -> 
        เป็นพื้นฐานในโปรแกรมมิ่งและการเขียนโค้ดทั่วไป โปรแกรมเมอร์ใช้ตัวแปรเพื่อเก็บข้อมูลหรือ
ค่าที่มีโอกาสเปลี่ยนแปลงได้ในโปรแกรม. ตัวแปรมีชื่อเพื่อที่เราจะสามารถอ้างถึงข้อมูลนั้นได้

DataType -> 
        ข้อมูลในโปรแกรมมีประการหลายประเภทหรือชนิดที่เรียกว่า "ข้อมูลชนิด" (Data Types). 
แต่ละชนิดมีลักษณะและการใช้งานที่แตกต่างกัน. นี่คือบางชนิดข้อมูลที่พบบ่อยในหลายภาษาโปรแกรม

var -> 
        ตัวแปรที่ถูกประกาศด้วย var มีขอบเขต (scope) คือ function-scoped หรือ global-scoped และไม่มี block-scoped (ไม่แนะนำให้ใช้)

let -> 
        ตัวแปรที่ถูกประกาศด้วย let มีขอบเขต (scope) คือ block-scoped, หมายความว่ามีขอบเขตในส่วนที่ปรากฏใน {} (แนะนำให้ใช้อันนี้)

const -> 
        จะต้องถูกกำหนดค่าในขณะที่ถูกประกาศและไม่สามารถถูกกำหนดค่าใหม่ได้หลังจากนั้น (แนะนำให้ใช้ต่อเมื่อไม่ต้องการเปลี่ยนแปลงค่านั้น)

Console.log() -> 
        เป็นฟังก์ชันที่ใช้ใน JavaScript เพื่อแสดงข้อมูล (logs) ใน console ของเบราว์เซอร์หรือ environment ที่รัน JavaScript
*/

/* **ข้อห้ามในการตั้งชื่อตัวแปร 
ไม่ให้ชื่อที่ไม่ชัดเจน -> 
        ไม่ควรใช้ชื่อที่ไม่ชัดเจนหรือมีความหมายที่ไม่ชัดเจน เช่น temp, data, variable1, เป็นต้น

หลีกเลี่ยงการใช้คำที่ได้รับการสงวน -> 
        ควรเลี่ยงการใช้คำที่มีการสงวนไว้ในภาษา JavaScript เช่น function, let, const เป็นต้น

ไม่ให้ใช้ชื่อที่ยาวเกินไป -> 
        ควรเลือกชื่อที่สั้นและกระชับ, ไม่ควรให้ชื่อยาวเกินไปที่จะทำให้โค้ดดูซับซ้อน

หลีกเลี่ยงการใช้ตัวอักษรพิเศษ -> 
        ควรเลี่ยงการใช้ตัวอักษรพิเศษ เช่น @, $, % ในชื่อตัวแปร

** การตั้งชื่อตัวแปรมีกี่รูปแบบ
Camel Case (การตั้งชื่อแบบเขาไปเมล) -> 
        ชื่อตัวแปรเริ่มต้นด้วยตัวพิมพ์เล็กและตัวต่อไปเป็นตัวพิมพ์ใหญ่ ตัวอย่าง: myVariable, totalAmount

Snake Case -> 
        ใช้เครื่องหมาย underscore (_) เพื่อแยกคำ ตัวอย่าง: my_variable, total_amount

Kebab Case -> 
        ใช้เครื่องหมาย dash (-) เพื่อแยกคำ ตัวอย่าง: my-variable, total-amount

Descriptive Names -> 
        ใช้ชื่อที่อธิบายได้ดีและมีความหมาย ตัวอย่าง: userName, totalItems

Avoid Abbreviations (หลีกเลี่ยงการใช้ตัวย่อ) -> 
        อย่าใช้ตัวย่อที่ไม่ชัดเจน ตัวอย่าง: numberOfItems ดีกว่า numItems
*/
// Console.log() สามารถใช้ได้ทุกรูปแบบไม่มีผิดแล้วแต่ชอบ ส่วนตัวชอบใช้ ` ` 
// ใช้ + เพื่อการเชื่อมต่อ (concatenation) ของ Strings
let firstName = "John";
let lastName = "Doe";
console.log("Full Name: " + firstName + " " + lastName); // ผลลัพธ์: Full Name: John Doe

// ใช้ `${}` (template literals) เพื่อผนวกรวมข้อมูล
let city = "New York";
let country = "USA";
console.log(`I live in ${city}, ${country}`); // ผลลัพธ์: I live in New York, USA

// ใช้ `,` เพื่อแสดงผลหลายค่าใน console.log
let num1 = 5;
let num2 = 10;
console.log("Sum:", num1 + num2, "Product:", num1 * num2); // ผลลัพธ์: Sum: 15 Product: 50

// ใช้ console.log ในการแสดงผลที่มีลักษณะต่าง ๆ
console.log("Hello, World!"); // ผลลัพธ์: Hello, World!

// ใช้ console.log เพื่อแสดงผลข้อมูลที่มีประสิทธิภาพ
console.log("The answer is:", 42, "Total:", 100 + 200); // ผลลัพธ์: The answer is: 42 Total: 300

// Variable
var myVariable = 10;
myVariable = 20;
console.log(myVariable); // 20
let myOtherVariable = "Hello, world!";
myOtherVariable = "world"
console.log(myOtherVariable); // world
const pi = 3.14;
pi = 11
console.log(pi); // Error invalid assignment to const 'pi'

//DataType
/*
Integer (จำนวนเต็ม) -> 
        ระบุตัวเลขที่ไม่มีทศนิยม, เช่น 1, 42, -10

Float (ทศนิยม) -> 
        ระบุตัวเลขที่มีทศนิยม, เช่น 3.14, -0.001

String (ข้อความ) -> 
        ระบุตัวอักษรหรือข้อความ, เช่น "Hello, world!", 'JavaScript'

Boolean (บูลีน) -> 
        ระบุค่าที่เป็นไปได้เพียงสองค่าเท่านั้น, คือ true หรือ false
*/

// Integer (จำนวนเต็ม)
let age = 25;
console.log("Age:", age); // 25
console.log(typeof age); // "number"

// Float (ทศนิยม)
let price = 19.99;
console.log("Price:", price); // 19.99
console.log(typeof price); // "number"

// String (ข้อความ)
let message = "Hello, World!";
let money = "25" // แม้ว่า 25 เป็นตัวเลขแต่ถ้าอยู่ใน " " หรือ ' ' ก็จะนับว่าเป็น String
console.log("Message:", message); // Hello, World!
console.log(typeof money); // "string"

// Boolean (บูลีน)
let isTrue = true;
let isFalse = false;
console.log("isTrue:", isTrue); // true
console.log("isFalse:", isFalse); // false
console.log(typeof isTrue); // "boolean"
console.log(typeof isFalse); // "boolean"