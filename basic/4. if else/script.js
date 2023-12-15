/*
if-else -> 
    เป็นโครงสร้างควบคุมการทำงานของโปรแกรมที่ใช้เพื่อตรวจสอบเงื่อนไขและทำงานตามผลลัพธ์ของเงื่อนไขนั้น ๆ

else if -> 
    สามารถเพิ่มเงื่อนไขเพิ่มเติมได้

Ternary Operator (? :) -> 
    เป็นลักษณะของการเขียนที่ย่อและมักถูกใช้เพื่อแทน if-else statement ในกรณีที่มีเงื่อนไขเล็ก ๆ
*/
let score1 = 75;
if (score1 >= 80) {
    console.log("Excellent");
} else {
    console.log("Good");
}
/*
ในตัวอย่างนี้ let score1 = 75 , เงื่อนไขคือ score >= 80 ถ้าเงื่อนไขเป็นจริง (score มากกว่าหรือเท่ากับ 80), 
จะแสดง "Excellent", แต่ถ้าเงื่อนไขไม่เป็นจริงจะแสดง "Good"
*/

let score2 = 65;
if (score2 >= 80) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Good");
} else {
    console.log("Needs improvement");
}
/*
ในตัวอย่างนี้ let score2 = 65; , มีการเพิ่มเงื่อนไขใหม่ คือ else if (score >= 60) ถ้า score มีค่า 60 ถึง 79, 
จะแสดง "Good", แต่ถ้าไม่, จะแสดง "Needs improvement".
 */

let score3 = 70;
let result = (score3 >= 80) ? "Excellent" : "Good";
console.log(result);
/*
ในตัวอย่างนี้ let score3 = 70; , Ternary Operator ถูกใช้เพื่อกำหนดค่าให้กับตัวแปร result โดยตรวจสอบเงื่อนไข (score >= 80) 
ถ้าเงื่อนไขเป็นจริง, จะได้ค่า "Excellent", ถ้าเงื่อนไขไม่เป็นจริงจะได้ค่า "Good"
*/
