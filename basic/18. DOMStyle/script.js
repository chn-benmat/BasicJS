/*
style ->
        ใช้สำหรับเข้าถึงและแก้ไขค่าของ CSS styles ของ Element ในหน้าเว็บ. 
        เมื่อคุณต้องการทำการเปลี่ยนแปลงลักษณะทางด้านการแสดงผล (presentation) ของ Element บนหน้าเว็บ, 
        คุณสามารถใช้ style property ได้

addEventListener ->
        ใช้สำหรับการเพิ่ม Event Listener ให้กับ Element เพื่อตรวจสอบการเกิด Event และทำงานตามที่กำหนดในฟังก์ชันที่ระบุ
*/
let message1 = document.getElementById("message-1");
let message2 = document.querySelector(".message-2")
let clickButton = document.querySelector(".click-button")
// การเพิ่ม style
message1.style.color = "red"
message1.style.backgroundColor = "#dedede"
message1.style.fontSize = "20px"

clickButton.addEventListener("click", () => {
        if (message2.style.display === "none" || message2.style.display === "") {
                message2.style.display = "block"
        } else {
                message2.style.display = "none"
        }
})