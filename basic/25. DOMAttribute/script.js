/*
Element -> 
        ส่วนประกอบของเนื้อหาที่ถูกล้อมรอบด้วยแท็ก (tags) และมีโครงสร้างที่นิยมขึ้นโดยคำบรรยายหรือ
        ตำแหน่งที่ตั้งองค์ประกอบนั้นในเอกสาร เช่น img, input

Attribute -> 
        ในบริบทของเว็บและ HTML คือข้อมูลที่ถูกเพิ่มไปยังตัวแทนขององค์ประกอบ (element) เพื่อกำหนดลักษณะ 
        คุณสมบัติ หรือพฤติกรรมขององค์ประกอบนั้น ๆ บนหน้าเว็บ เช่น href, target

getAttribute -> 
        ดึงค่าของแอตทริบิวต์ (attribute) จาก element ที่กำหนด

setAttribute -> 
        เพื่อกำหนดค่าของแอตทริบิวต์ (attribute) ของ element
*/

const birdImage = document.querySelector(".bird-image")
const jsLink = document.querySelector(".js-link")
const textInput = document.querySelector(".text-input")

console.log(birdImage.src); // https://images.unsplash.com/photo-1575845464737-a6ff42155569?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
console.log(jsLink.href); // https://javascript.info/
console.log(textInput.value); // JavaScript สวัสดี
textInput.value = "JavaScript สวัสดี"

// hiddenMessage -> มาจากการสร้าง Attribute ใน html สร้างขึ้นมาเอง
console.log(textInput.getAttribute("hiddenMessage")); // สวัสดีน๊าบ

textInput.setAttribute("hiddenMessage", "สวัสดีฮาฟคุณเทอ");
console.log(textInput.getAttribute("hiddenMessage")); // สวัสดีฮาฟคุณเทอ