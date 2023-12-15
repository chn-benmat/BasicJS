/*
object ->
        โครงสร้างข้อมูลที่มีลักษณะเป็นคู่ key-value -> key = name, value = "javis"
*/
let rabbit = {
        name: "Javis",
        breed: "Lion Head",
        color: "white",
        weight: 1,
        life: true,
};

console.log(rabbit); // { name: "Javis", breed: "Lion Head", color: "white", weight: 1, life: true }
console.log(rabbit.name); // Javis

//เปลี่ยนข้อมูลใน  object
rabbit.name = "Mimi"
console.log(rabbit); // { name: "Mimi", breed: "Lion Head", color: "white", weight: 1, life: true }
console.log(rabbit.name); // Mimi

// การใช้งาน Array ร่วม Object
let cats = [{
                name: "Tini",
                breed: "American Shorthair",
                color: "orange",
                weight: 1,
                life: true,
        },
        {
                name: "Mumu",
                breed: "American Curl",
                color: "black",
                weight: 1,
                life: true,
        },
]
// loop แสดง object ใน array ออกมาแสดงผล
cats.forEach((animal) => console.log(`${animal.name}, ${animal.breed}`)); // Tini, American Shorthair Mumu, American Curl