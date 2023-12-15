/*
classList ->
         ใช้สำหรับการจัดการกับ classes ของ Element ในหน้าเว็บ. 
         classList มีเมทอดต่าง ๆ ที่ช่วยให้เราสามารถเพิ่ม, ลบ, ตรวจสอบ, และทำกับ classes ได้ง่ายขึ้น

innerHTML ->
        ที่ใช้เพื่อเข้าถึงหรือกำหนด HTML content ภายใน Element. การใช้ innerHTML 
        สามารถให้ค่า HTML หรือเนื้อหาข้อความที่มีได้

*/
let message1 = document.querySelector(".message-1")
let message2 = document.querySelector(".message-2")
let message3 = document.querySelector(".message-3")
let message4 = document.querySelector(".message-4")
let message5 = document.querySelector(".message-5")
let toggleBtn = document.querySelector(".toggle-btn")
let changeBtn = document.querySelector(".change-btn")

// add -> เพิ่ม class ที่จะเพิ่มไป
message1.classList.add("orange-box")

// remove -> ลบ class
message2.classList.remove("orange-box")

// replace -> คือการเปลี่ยน class เก่าให้เป็น class ใหม่
message3.classList.replace("orange-box", "green-box")

// toggle -> จะเป็นคำสั่งมีลักษณะ เปิด - ปิดการแสดงผลสลับไปมา
message4.classList.toggle("green-box")


let clickCount1 = 0
let clickCount2 = 0
toggleBtn.style.padding = "10px"
toggleBtn.style.marginBottom = "10px"
toggleBtn.addEventListener("click", () => {
        clickCount1++
        if (clickCount1 % 2 === 1) {
                message4.innerHTML = "เปิด"
                message4.classList.toggle("green-box")
        } else {
                message4.innerHTML = "ปิด"
                message4.classList.toggle("green-box")
        }

})
changeBtn.style.padding = "10px"
changeBtn.addEventListener("click", () => {
        clickCount2++
        if (clickCount2 % 2 === 1) {
                message5.style.display = "block"
                message5.innerHTML = "สีส้ม"
                message5.classList.remove("green-box")
                message5.classList.add("orange-box")
        } else {
                message5.innerHTML = "สีเขียว"
                message5.classList.replace("orange-box", "green-box")
        }

})
