/*
mouseover -> 
        เหตุการณ์นี้มักถูกใช้เพื่อทำงานบางอย่างเมื่อผู้ใช้นำเมาส์ไปวิ่งผ่านบนองค์ประกอบนั้น

mouseout -> 
        เป็นเหตุการณ์ที่เกิดขึ้นเมื่อเมาส์ (mouse) ออกจากพื้นที่ขององค์ประกอบ (element) บนหน้าเว็บหลังจากที่มีการ hover

event -> 
        บางอย่างที่เกิดขึ้นในระบบ ซึ่งอาจเป็นการกระทำของผู้ใช้, การเปลี่ยนแปลงในระบบ, 
        หรือสถานการณ์อื่น ๆ ที่สามารถทำให้โปรแกรมต้องการตอบสนอง
        
target -> 
        มักถูกใช้ในบริบทของเหตุการณ์ (events) . "target" หมายถึง องค์ประกอบ (element) ที่เป็นตัวเป้าหมายของเหตุการณ์นั้น ๆ
*/
let thumbnailImage =document.querySelectorAll(".thumbnail-image")
let bigImage = document.querySelector(".big-image")

function changeImage(event){
        bigImage.src = event.target.src
}
function removeImage(){
        bigImage.src = ""
}
thumbnailImage.forEach((thumbnail)=>{
        thumbnail.addEventListener("mouseout",removeImage)
        thumbnail.addEventListener("mouseover",changeImage)
})