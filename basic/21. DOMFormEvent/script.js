/*
change ->       
        เหตุการณ์ที่เกิดขึ้นเมื่อค่าขององค์ประกอบ (element) ที่สามารถมีการเปลี่ยนแปลงได้, 
        เปลี่ยนแปลงค่าจากค่าเดิมเป็นค่าใหม่

input -> 
        อีเวนท์ที่เกิดขึ้นเมื่อมีการป้อนข้อมูลลงใน HTML element ที่รองรับข้อมูลจากผู้ใช้

submit ->      
        เกิดขึ้นเมื่อผู้ใช้กดปุ่มส่งฟอร์ม (submit form) ใน HTML. การใช้งาน "submit" 
        ใน JavaScript จะช่วยในการตรวจสอบข้อมูลที่ป้อนในฟอร์มและปฏิบัติตามขั้นตอนที่เหมาะสม

preventDefault-> 
        เป็นเมธอดที่ใช้ใน JavaScript เพื่อยกเลิกพฤติกรรมที่เป็นค่าเริ่มต้นของอีเวนท์ (event) นั้น ๆ

value -> 
        property ที่ใช้เพื่อเข้าถึงหรือกำหนดค่าของ Element ที่รองรับข้อมูลจากผู้ใช้, เช่น <input>, <textarea>, <select> และอื่น ๆ
*/
let answers1 = document.querySelector(".answer1")
let answers2 = document.querySelector(".answer2")
let answers3 = document.querySelector(".answer3")
let form = document.querySelector("form")
let errorMessage = document.querySelector(".error-message")

function checkAnswers1() {
        if (answers1.value.length > 20) {
                errorMessage.style.display = "block"
        } else {
                errorMessage.style.display = "none"
        }
}

function checkAnswers2() {
        if (answers2.value.length > 20) {
                errorMessage.style.display = "block"
        } else {
                errorMessage.style.display = "none"
        }
}

function checkAnswers3(event) {
        event.preventDefault()
        if (answers3.value.length > 20) {
                errorMessage.style.display = "block"
        } else {
                errorMessage.style.display = "none"
        }
}

answers1.addEventListener("change", checkAnswers1)
answers2.addEventListener("input", checkAnswers2)
form.addEventListener("submit", checkAnswers3)