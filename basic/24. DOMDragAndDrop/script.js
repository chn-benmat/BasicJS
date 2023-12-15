/*
dragstart ->  
        สามารถช่วยในการตรวจจับเหตุการณ์เมื่อผู้ใช้เริ่มการลาก (dragging) element บนหน้าเว็บ

dataTransfer -> 
        เป็นอ็อบเจ็กต์ที่ใช้ใน DOM (Document Object Model) เพื่อถ่ายโอนข้อมูลระหว่างการลากและวาง (drag and drop) ในเว็บ

setData -> 
        เป็นเมธอดของ dataTransfer ที่ใช้ในการตั้งค่าข้อมูลที่จะถูกถ่ายโอนไปในกระบวนการลากและวาง (drag and drop)

text/plain ->  
        คือประเภทข้อมูล (data type) ที่ใช้ในการระบุว่าข้อมูลที่ถูกถ่ายโอนในกระบวนการลากและวาง (drag and drop)
        เป็นข้อความทั่วไปโดยไม่มีการระบุรูปแบบเฉพาะ

dragover -> 
        เป็นอีเวนท์ที่เกิดขึ้นเมื่อมีการลาก element วาง (drag and drop) มาวางในพื้นที่ที่ต้องการ
        การใช้ dragover ช่วยในการป้องกันการทำงานของอีเวนท์ที่เป็นค่าเริ่มต้น (default behavior)

 drop ->  
        เป็นอีเวนท์ที่เกิดขึ้นเมื่อผู้ใช้ลาก element มาวางลงในพื้นที่ที่กำหนดไว้ (drop zone) 
        ในกระบวนการลากและวาง (drag and drop). เมื่อ element ถูกวาง

target ->
        ที่ใช้ใน context ของ Event Object เพื่อระบุ Element ที่เป็นตัวที่เกิดเหตุการณ์ (event) นั้น ๆ 
        หรือ Element ที่ถูกคลิก, ถูกกด, หรือเกิดเหตุการณ์อื่น ๆ
*/

const drags = document.querySelectorAll(".drag")
const equipDrag = document.querySelector("#equip-drag")
const select = document.querySelector(".select")

// 1. Drag
function dragImage(event){
        event.dataTransfer.setData("text/plain",event.target.id)
        console.log(event.target.id);
}

drags.forEach((image)=>{
        image.addEventListener("dragstart", dragImage)
})

// 2. Drop
function dragOverImage(event){
        event.preventDefault()
}

function dropImage(event){
        event.preventDefault()
        const id = event.dataTransfer.getData("text/plain")
        const image = document.querySelector(`#${id}`)
        equipDrag.src = image.src
}
equipDrag.addEventListener("dragover",dragOverImage)
equipDrag.addEventListener("drop",dropImage)