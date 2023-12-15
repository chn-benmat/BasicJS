/*
keydown -> 
        เป็นอีเวนท์ที่เกิดขึ้นเมื่อผู้ใช้กดปุ่มบนคีย์บอร์ด. อีเวนท์นี้ถูกส่งมายัง element ที่มีการโฟกัส (focus) อยู่

keyup -> 
        เป็นอีเวนท์ที่เกิดขึ้นเมื่อผู้ใช้ปล่อยปุ่มบนคีย์บอร์ดหลังจากกด. อีเวนท์นี้เช่นกันจะถูกส่งไปยัง element ที่มีการโฟกัส (focus) อยู่

enent.key -> 
        เป็นคุณสมบัติที่สามารถใช้ในอีเวนท์ที่เกี่ยวข้องกับการกดปุ่ม (เช่น keydown, keyup) เพื่อระบุปุ่มที่ถูกกดหรือปล่อย
*/
let imageIndex = 0
let imageLinks = ["image1.jpg", "image2.jpg", "image3.jpg"]
let image = document.querySelector(".image")
let prevBTN = document.querySelector(".prev-button")
let nextBTN = document.querySelector(".next-button")

function prevImage() {
        if (imageIndex > 0){
                imageIndex--
                image.src = imageLinks[imageIndex]
        }
}

function nextImage() {
        if (imageIndex < imageLinks.length - 1){
                imageIndex++
                image.src = imageLinks[imageIndex]
        }
}

function keyup(event) {
        if (event.key === "ArrowLeft") {
                prevImage()
        } else if (event.key == "ArrowRight") {
                nextImage()
        }
}
document.addEventListener("keyup", keyup)
prevBTN.addEventListener("click", prevImage)
nextBTN.addEventListener("click", nextImage)