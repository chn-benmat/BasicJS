/*
Asynchronous -> 
        การเขียนโค้ดที่ไม่ต้องรอให้กิจกรรมที่เราเรียกใช้เสร็จก่อนที่จะทำอย่างอื่นต่อไป

async ->
        การใช้ async นั้นคือการประกาศว่าฟังก์ชันนั้นจะทำงานแบบ asynchronous 
        และจะ return ค่าเป็น Promise. ซึ่งหมายความว่าฟังก์ชัน async จะสร้าง Promise และ resolve ค่าที่ถูก return จากฟังก์ชัน

await ->  
        การใช้ await จะถูกใส่ไว้หน้าการเรียกใช้ฟังก์ชันที่ return Promise. await ทำให้โค้ดทำงานต่อเมื่อ Promise ถูก resolve
        และสามารถดึงค่าจาก Promise นั้นไปใช้งานได้

try , catch -> 
        เป็นคำสั่งใน JavaScript ที่ใช้ในการจัดการข้อผิดพลาด (errors) ในรูปแบบของบล็อกของโค้ด

try -> 
        วางโค้ดที่คาดหวังว่าอาจทำให้เกิดข้อผิดพลาดในคำสั่ง try

catch -> 
        ถ้ามีข้อผิดพลาดเกิดขึ้นใน try,  catch จะถูกทำงาน
*/

const avatarImg = document.querySelector(".avatar")
const fullnameText = document.querySelector(".fullname")
const emailText = document.querySelector(".email")

async function getUser() {
        // await จะรอจนกว่าจะทำงานเส็จ แล้วส่งค่าคืนกลับมา
        try {
                const response = await fetch("https://reqres.in/api/users/10")
                const json = await response.json();
                const user = json.data
                avatarImg.src = user.avatar
                fullnameText.innerHTML = `${user.first_name} ${user.last_name}`
                emailText.innerHTML = user.email
        } catch (error) {
                console.log(error.message)
        }
}
getUser()
/* เขียนต่างกันแต่ผลลัพธ์ที่แสดงออกมาเหมือนกันแถมดูสอาดตา
fetch("https://reqres.in/api/users/10")
        .then((response) => response.json())
        .then((json) => {
                const user = json.data
                avatarImg.src = user.avatar
                fullnameText.innerHTML = `${user.first_name} ${user.last_name}`
                emailText.innerHTML = user.email
        })
        .catch((error) => console.log(error.message)) */