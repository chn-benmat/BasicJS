/*
Extract   -> กระบวนการการดึงข้อมูลหรือส่วนที่สนใจออกมาจากข้อมูลที่มีโครงสร้างซับซ้อน 
เพื่อนำมาใช้หรือประมวลผลต่อไปในทางที่ต้องการ
*/

console.log("--------------------------EXTRACT----------------------------");;
// Extract Object
const name = "Suratan"
const rabbit = {
        name: "Mimo",
        breed1: "Netherland Dwarf",
        color: "White",
        age: 1
}
/*name, breed คือสิ่งที่เราต้องการมาใช้
 name:rName คือการเปลี่ยนชื่อ ให้ไปเรียงใข้ rName แทน เพราะอาจเกิดการตั้งชื่อซ้ำจะทำให้Error
 breed3 = "Unknows" คือ breed3 ไม่มีใน  object rabbit จะให้ค่า undefined มา ดูผลลัพธ์ได้จาก breed2
 ...others คือการเก็บค่า age, color ให้อยู่ในรูปแบบ object
 */
const {name:rName, breed1 , breed2 , breed3 = "Unknows", ...others } = rabbit
console.log(rName);// Mimo
console.log(breed1);// Netherland Dwarf
console.log(breed2);// undefined
console.log(breed3);// Unknows
console.log(others);// Object { color: "White", age: 1 }

// Extract Array
const scores = [88, 12, 34, 51, 11]

const [firstScore, secondScore,...otherScores] = scores

console.log(firstScore);// 88
console.log(secondScore);// 12
console.log(otherScores);// Array(3) [ 34, 51, 11 ]
console.log("-------------------------------------------------------------");

