/*
map ->
        เมธอดที่ใช้กับ Array ใน JavaScript เพื่อสร้าง Array ใหม่ที่ประกอบไปด้วยผลลัพธ์ที่ได้จากการเรียกฟังก์ชัน callback 
        สำหรับทุก ๆ สมาชิกใน Array ต้นฉบับ

Add -> 
        เพิ่มข้อมูลหรือองค์ประกอบใหม่ลงในระบบหรือที่เก็บข้อมูล เช่น เพิ่มผู้ใช้ใหม่, เพิ่มข้อมูลสินค้า, เพิ่มรายการงาน, เป็นต้น

Edit  ->       
        แก้ไขหรือปรับปรุงข้อมูลหรือองค์ประกอบที่มีอยู่ เช่น แก้ไขข้อมูลผู้ใช้, แก้ไขรายละเอียดสินค้า, แก้ไขรายการงาน, เป็นต้น

Delete  ->     
        ลบข้อมูลหรือองค์ประกอบที่ไม่ต้องการออกจากระบบ เช่น ลบผู้ใช้, ลบสินค้า, ลบรายการงาน, เป็นต้น

Sort  -> 
        จัดเรียงข้อมูลหรือองค์ประกอบตามลำดับที่กำหนด เช่น เรียงลำดับผู้ใช้ตามอักษร, เรียงลำดับสินค้าตามราคา เป็นต้น 
*/

// Add, edit, delete
console.log("--------------------------EDID-------------------------------");;
const characters = [
        { name: "Oil", range: "melee" },
        { name: "Ben", range: "range" },
        { name: "T", range: "melee" }
];
// Add
const newCharacter = {new: "Boss", range: "range"}
const newCharacters1 = [...characters, newCharacter]
// Edit 
const newName = "Iback"
const newCharacters2 = characters.map((character, index)=>{
        if (index == 1) {
                const editCharacter = { ...character };
                editCharacter.name = newName;
                return editCharacter;
            }
            return character;
})
//delete
const newCharacters3 = characters.filter((character, index)=> {
        return index !== 1
})
console.log(characters);
/*ผลที่ได้ Origin-> 
0: Object { name: "Oil", range: "melee" }
1: Object { name: "Ben", range: "range" }
2: Object { name: "T", range: "melee" }*/
console.log(newCharacters1);
/*ผลที่ได้จาก Add-> 
0: Object { name: "Oil", range: "melee" }
1: Object { name: "Ben", range: "range" }
2: Object { name: "T", range: "melee" }
3: Object { new: "Boss", range: "range" }*/
console.log(newCharacters2);
/*ผลที่ได้จาก Edit-> 
0: Object { name: "Oil", range: "melee" }
1: Object { name: "Iback", range: "range" }
2: Object { name: "T", range: "melee" }
 */
console.log(newCharacters3);
/*ผลที่ได้จาก Delete-> 
0: Object { name: "Oil", range: "melee" }
1: Object { name: "T", range: "melee" } */

// Sort
let numbers = [5, 2, 8, 1, 7];
let sortedNumbers = [...numbers].sort((number1, number2) => {
        if(number1 > number2) {
                return -1
        }else if (number1 < number2){
                return 1
        }
        return 0;
})
/* สามารถเขียนอีกแบบได้
let sortedNumbers = [...numbers].sort((number1, number2) => number2 - number1);
*/
console.log(numbers); // Array(5) [ 5, 2, 8, 1, 7 ]
console.log(sortedNumbers); // Array(5) [ 8, 7, 5, 2, 1 ]
console.log("-------------------------------------------------------------");

