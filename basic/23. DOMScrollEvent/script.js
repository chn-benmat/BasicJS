/*
window -> 
        คืออ็อบเจ็กต์ที่แทนหน้าต่างของเว็บบราวเซอร์ (browser window) 
        ใน JavaScript. window เป็น global object ที่สามารถให้การเข้าถึงและควบคุมหน้าต่างเว็บได้หลายด้าน
        scroll -> ช่วยให้คุณสามารถควบคุมการเลื่อน (scrolling) ของหน้าเว็บได้

scrollX ->
        property ที่ใช้เพื่อดึงค่าของการเลื่อนแนวนอน (horizontal scrolling) ในหน้าเว็บ. 
        Property นี้จะแสดงตำแหน่งการเลื่อนแนวนอนของหน้าเว็บที่แสดงอยู่ในตอนนั้น

scrollY ->
        property ที่ใช้เพื่อดึงค่าของการเลื่อนแนวตั้ง (vertical scrolling) ในหน้าเว็บ. 
        Property นี้จะแสดงตำแหน่งการเลื่อนแนวตั้งของหน้าเว็บที่แสดงอยู่ในตอนนั้น
*/
let scollInfo = document.querySelector(".scroll-info")
let topHeader = document.querySelector(".top-header")
let lastScrolly = 0
window.addEventListener("scroll",()=>{
        let infoText = `Y = ${window.scrollX}`
        infoText+= `Y = ${window.scrollY}`
        scollInfo.innerHTML = infoText
})
window.addEventListener("scroll",()=>{
        if (window.scrollY > lastScrolly){
                topHeader.classList.add("hide")
        }else{
                topHeader.classList.remove("hide")
        }
        lastScrolly = window.scrollY
})