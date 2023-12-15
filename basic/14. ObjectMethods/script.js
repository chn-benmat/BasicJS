/*
method ->
        ฟังก์ชัน (function) ที่ถูกนำมาใช้งานภายในอ็อบเจ็กต์ (object) หรือประเภทของข้อมูลอื่น ๆ เช่น Array, Function, String,
        เป็นต้น. ในทางปฏิบัติ, method เป็นฟังก์ชันที่ถูกเก็บเป็นค่าของคุณลักษณะ (property) ของอ็อบเจ็กต์หรือประเภทข้อมูลนั้น ๆ.
        ก็คือ function แต่ถ้ามาอยู่ใน Array, Function, String เลยเรียกว่า method -> hop คือ method 

this -> 
        คือการอ้างอิงไปใน object ก็คือ rabit ทำไมไม่พิมพ์ชื่อ object ละ 
        เราไม่แน่ไม่นอนว่าจะตั้งชื่อobject ยาวมั้ยมันไม่สดวกในการเรียกใช้เลยใช้ this ดีกว่า 

**this เหมือนกับ self ใน python 
*/
let rabbit = {
        name: "Javis",
        breed: "Lion Head",
        color: "white",
        weight: 1.2,
        life: true,
        //method เขียนได้ 2 แบบ แล้วแต่คนชอบ
        hop() {
                console.log(`${rabbit.name} is hopping around.`);
        },
        weightDetail() {
                if (this.weight < 1) {
                        return "น้อยเกินไป";
                } else if (this.weight > 2) {
                        return "มากเกินไป";
                }
                return "ปกติ"
        },
        wiggleEars: function () {
                console.log(`${this.name} is wiggling its ears.`);
        },
};
rabbit.hop()
console.log(rabbit.weightDetail());