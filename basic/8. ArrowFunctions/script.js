/*
Arrow function ->
        เป็นลักษณะการเขียนฟังก์ชันใน JavaScript ที่มีรูปแบบสั้นและทำให้โค้ดดูกระชับมากขึ้น. 
        นอกจากนี้, Arrow function ยังมีลักษณะการทำงานที่แตกต่างจากฟังก์ชันทั่วไปในบางที่
*/

let sayButton = document.getElementById("say-button")

// function แบบเก่า
function saySomething1() {
        console.log("ไม่ต้องห่วงฉัน 1");
}

// แบบ Arrow function
let saySomething2 = () => {
        console.log("ไม่ต้องห่วงฉัน 2");
}
/*ลักษณะการทำงานของ Arrow function:
        ไม่ต้องใช้คำสั่ง function: Arrow function ไม่ต้องใช้คำสั่ง function เหมือนฟังก์ชันทั่วไป.
        ประกาศพารามิเตอร์: ถ้ามีพารามิเตอร์เพียงหนึ่งตัว, ไม่จำเป็นต้องใส่วงเล็บ. ถ้าไม่มีพารามิเตอร์หรือมีมากกว่าหนึ่งตัว, ให้ใส่วงเล็บ.
        การ return อัตโนมัติ: ถ้ามีแค่คำสั่งเดียวในฟังก์ชัน, Arrow function จะ return ค่านั้นๆ อัตโนมัติ.
*/
// ใช้ function แบบเก่า
sayButton.addEventListener("click", function () {
        console.log("ไม่ต้องห่วงฉัน 1");
})

// ใช้ Arrow function ถ้ามีคำสั่งเดียวไม่ต้องใส่ { } ก็ได้
sayButton.addEventListener("click", () => console.log("ไม่ต้องห่วงฉัน 2"));