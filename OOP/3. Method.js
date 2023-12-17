/*
Method ->
        ฟังก์ชันที่ถูกนิยามในลักษณะของเมทอดภายในคลาสนั้น ๆ ซึ่งสามารถถูกเรียกใช้โดยอ็อบเจ็กต์ของคลาสนั้น

การสร้าง Method ->
        1 ระบุแค่ชื่อ Method แต่ไม่มีคำว่า function นำหน้า
        2 สามารถกำหนด Parameter ได้ เหมือนกับ function
        3 อ้างอิง Attribute หรือ Method เดี่ยวกันภายใน Class โดนใช้คียเวิร์ด this
*/

class Cat {
        name = "Mumu"
        age = 1.2
        life = true
        // Constructor
        constructor(name, age) {
                this.name = name
                this.age = age
                // การเรียก Method ใน Class
               this.showDetail()
        }
        // Method
        showDetail(){
                console.log(`แมวตัวนี้มีชื่อว่า: ${this.name} และมีอายุ: ${this.age} และมีชีวิต: ${this.life}`);
        }
}

const cat1 = new Cat("Jojo", 1)// Output: แมวตัวนี้มีชื่อว่า: Jojo และมีอายุ: 1 และมีชีวิต: true
// การเรียก Method นอก Class
cat1.showDetail() // Output: แมวตัวนี้มีชื่อว่า: Jojo และมีอายุ: 1 และมีชีวิต: true

const cat2 = new Cat("M", 1.5)// Output: แมวตัวนี้มีชื่อว่า: M และมีอายุ: 1.5 และมีชีวิต: true
