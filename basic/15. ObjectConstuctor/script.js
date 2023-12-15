/* 
constructor โดยปกติจะต้องตั้งชื่ออักษรแรกตัวใหญ่

name ฝั่งซ้าย name ฝั่งขวา ไม่เหมือนกัน

name ฝั่งซ้าย คือ คือข้อมูลที่สร้าง หรือตัวแปร(variable)

ืname ฝั่งขวา คือ parameter ที่รับมา

new คือ เอาไว้รับ Object ใหม่ ที่ถูกสร้างขึ้นโดย constructor function
*/
function Cat(name, breed, color, weight, life) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.weight = weight;
        this.life = life;
        this.take = function(){
                console.log(`${this.name} Meaow Meaow`);
        }
};
let cat1 = new Cat("Tini", "American Shorthair", "orange", 1, true,);
let cat2 = new Cat("Mumu", "American Curl", "black", 1.5, true,);
cat1.take() // Tini Meaow Meaow
cat2.take() // Mumu Meaow Meaow
