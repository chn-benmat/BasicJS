/*
undefined -> คือค่าที่ได้รับเมื่อตัวแปรถูกประกาศไว้ แต่ไม่ได้กำหนดค่าใดๆ
null -> เป็นค่าที่แสดงถึงการกำหนดค่าเป็นโปรแกรมเมอร์เอง
!! -> มักถูกใช้เพื่อแปลงค่าไปเป็นประเภทข้อมูลบูลลีน (boolean). การใช้ !! จะเป็นการเปลี่ยนค่าให้เป็น true หรือ false
?? -> มักถูกใช้เพื่อกำหนดค่าให้กับตัวแปรหรือนิพจน์เมื่อค่าทางซ้ายมีค่าเป็น null หรือ undefined 
นอกจากนี้ ถ้าค่าทางซ้ายไม่ใช่ null หรือ undefined จะให้ค่าทางซ้าย
*/
console.log("--------------------------EMPTY------------------------------");;
// undefined, null
let firstName;
console.log(firstName); // undefined

let lastName = null
console.log(lastName); // null

// ใช้งาน !!firstName เช็คว่าค่า underfined มั้ย หรือ มีค่า 0 มั้ย ถ้ามีอย่างใดอย่างหนึ่งจะส่งเข้า else แต่ถ้าไม่มีจะทำตามเงื่อนไขใน if
if (!!firstName) {
        console.log("ไม่ได้มี underfined ใน firstName");
} else {
        console.log("มี underfined ใน firstName");
}

const displayFirstName = firstName ?? "ไม่ underfined แล้วโว้ย"
console.log(displayFirstName); // ไม่ underfined แล้วโว้ย

const displayLastName = "ไม่ Null แล้วโว้ย" ?? lastName
console.log(displayLastName); // ไม่ Null แล้วโว้ย
console.log("-------------------------------------------------------------");

