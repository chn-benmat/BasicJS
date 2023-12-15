/* Asynchronous -> 
        การเขียนโค้ดที่ไม่ต้องรอให้กิจกรรมที่เราเรียกใช้เสร็จก่อนที่จะทำอย่างอื่นต่อไป

Promise ->     
        ใช้ในการจัดการกับการทำงาน Asynchronous และการดำเนินการกับข้อมูลที่จะมีอยู่ในอนาคต

resolve ->
        ใน Promise ถูกใช้เพื่อระบุว่าการทำงานที่ Promise นี้ทำเสร็จสมบูรณ์ (Fulfilled) และสามารถส่งผลลัพธ์ (value) กลับไป

reject -> 
        ใน Promise ถูกใช้เพื่อระบุว่ามีข้อผิดพลาดเกิดขึ้นและสามารถส่งข้อผิดพลาด (error) กลับไป

then -> 
        จะรับฟังก์ชันที่จะทำงานเมื่อ Promise นั้นสำเร็จและสามารถส่งค่าผลลัพธ์ (resolve value) ไปให้กับฟังก์ชันนั้นได้

catch -> 
        เป็นเมธอดที่ใช้เพื่อจัดการข้อผิดพลาด (errors) ที่เกิดขึ้นใน Promise เมื่อ Promise ถูก reject (มีข้อผิดพลาด)catch จะทำงาน

isNaN -> 
        ใช้สำหรับตรวจสอบว่าค่าที่รับเข้ามาเป็น NaN (Not-a-Number) หรือไม่ จะได้ค่า true และ false

new Error -> 
        การจัดการข้อผิดพลาดในโค้ดของโปรแกรม
*/

function inputPromise(title, delay) {
        // Promise -> จะทำงานเลยตอนเปิดเว็บไซต์หรือรีเว็บไซต์หรือโหลดเว็บไซต์เส็จ
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        const numberInput = Number(prompt(title))
                        if (isNaN(numberInput)) {
                                reject(new Error('กรอกตัวเลขเท่านั้น'))
                                return
                        }
                        resolve(numberInput)
                }, delay);
        })
}
let width = 0
let length = 0
let height = 0
// result บรรทัด 44 และ 48 และ 52 คือคนละตัวแปรถึงชื่อเหมือนกันก็ตาม
inputPromise("ความกว้าง", 1000)
        .then((result) => {
                width = result
                return inputPromise("ความยาว", 1500);
        })
        .then((result) => {
                length = result
                return inputPromise("ความสูง", 2000);;
        })
        .then((result) => {
                height = result
                setTimeout(() => {
                        const brownieSize = width * length * height;
                        alert(`ปริมาตรบราวนี่: ${brownieSize}`)
                }, 3000);

        })
        .catch((error) => {
                alert(error.message)
        })