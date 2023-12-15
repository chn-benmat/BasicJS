// ย่อ Arrow function ถ้าแค่คำสั่งเดี่ยวย่อได้แบบนี้เลย ถ้ามี parameter เดี่ยวลบวงเล็บได้ย้ำต้องอันเดี่ยว

console.log("--------------------------FUNCTION---------------------------");;
const cuteMessage = message1 => `สวัสดีน๊าบ ${message1} ~<>~`
console.log(cuteMessage("คุณเทอ"));

// ถ้าแค่คำสั่งเดี่ยวย่อได้แบบนี้เลย
const numbers1 = [1, 2, 3, 4]
const doubleNumbers = numbers1.map(number => number * 2)
console.log(numbers1); // Array(5) [ 5, 2, 8, 1, 7 ]
console.log(doubleNumbers); // Array(5) [ 8, 7, 5, 2, 1 ]

// Function with default -> message2 = "สวัสดี", count = 2 สวัสดี และ 2 คือ Function with default 
function showMessage(message2 = "สวัสดี", count = 2){
        for(let i = 1; i <= count; i++){
                console.log(`${i}. ${message2}`)
        }
}
showMessage()// 1. สวัสดี 2. สวัสดี
// แต่ถ้าใส่ค่าตรงนี้ไปผลลัพธ์ที่ได้
showMessage("ครับ")// 1. ครับ 2. ครับ
showMessage("ครับ", 4)// 1. ครับ 2. ครับ 3. ครับ 4. ครับ
console.log("-------------------------------------------------------------");

