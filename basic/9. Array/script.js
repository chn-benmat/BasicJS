/*
Array ->
        คือโครงสร้างข้อมูลที่สามารถเก็บข้อมูลหลายๆ ชนิดในตำแหน่งเดียวกัน 
        โดยทุกข้อมูลใน Array จะถูกเก็บไว้ในลำดับที่กำหนด (index) โดยใช้ตัวเลขเริ่มต้นที่ 0, 1, 2, และเป็นต้นไป
*/

// การสร้าง Array
let fruits = ["Apple", "Banana", "Melon", "Mango"];
console.log(fruits);

// การเพิ่มข้อมูลไปด้านหน้าสุดของ Array
fruits.unshift("Orange");
console.log(fruits);

// การเพิ่มข้อมูลไปด้านหลังสุดของ Array
fruits.push("Strawberry");
console.log(fruits);

// การลบข้อมูลด้านหลังสุดของ Array
fruits.pop();
console.log(fruits);

// การลบข้อมูลด้านหน้าสุดของ Array
fruits.shift();
console.log(fruits);

// การแทนที่ข้อมูลด้วยเลข index Array
fruits[1] = "Watermelon"
console.log(fruits);

// การเพิ่มข้อมูล splice โดยการระบุเลข index, จำนวนที่จะเพิ่ม, ข้อมูลที่จะใส่เพิ่ม
fruits.splice(1, 0, "Pineapple")
console.log(fruits);

// การลบข้อมูล splice โดยการระบุเลข index, จำนวนที่จะลบ
fruits.splice(1, 1)
console.log(fruits);

// บอกจำนวนข้อมูลใน Array
console.log(fruits.length);