/* DOM -> Document Objecct Model
DOM ->
        ถูกออกแบบเพื่อจัดเก็บโครงสร้างเอกสาร HTML ในรูปของ Object โดยที่ 
        JavaScript สามารถจัดการกับเอกสาร HTML ผ่านโครงสร้างของ DOM

document -> 
        อ็อบเจ็กต์ที่แทนเอกสาร HTML ที่ถูกโหลดในเบราว์เซอร์ปัจจุบัน ซึ่งใช้ในการเข้าถึงและจัดการกับโครงสร้างของหน้าเว็บ.
        document มีบทบาทสำคัญในการทำงานกับ DOM (Document Object Model) ซึ่งเป็นโมเดลที่แสดงโครงสร้างของหน้าเว็บ
        ในรูปแบบของอ็อบเจ็กต์ที่สามารถถูกเข้าถึงและแก้ไขได้ผ่าน JavaScript
 */

/*ถามว่า 4 อันนี้อันไหนนิยมใช้กัน ถามจาก bard
        querySelector เพราะว่า  
        querySelector เป็น API ที่ใหม่กว่า getElementById และ getElementsByClassName จึงมีการสนับสนุนที่ดีกว่า และสามารถทำงานร่วมกับ CSS selector ได้อย่างมีประสิทธิภาพ
        querySelector สามารถทำงานได้กับองค์ประกอบใด ๆ ใน DOM โดยไม่คำนึงถึง ID หรือ class name ที่กำหนด ซึ่งทำให้มีความยืดหยุ่นมากกว่า
        querySelector มีประสิทธิภาพดีกว่า getElementsByClassName ในการค้นหาองค์ประกอบหลาย ๆ องค์ประกอบ

*/
// getElementById -> การดึง id ของ html มาใช้
let message1 = document.getElementById("message-1");
message1.innerHTML = "ข้อความที่ 1";

// getElementsByClassName -> การดึง class ที่ชื่อเหมือนกันทั้งหมด ของ html มาใช้ แล้วได้กลับมาเป็น array
let message2 = document.getElementsByClassName("message-2")
for (let i = 0; i < message2.length; i++) {
        message2[i].innerHTML = "ข้อความที่ 2"
}
//querySelectorAll -> ดึงได้ทั้ง class, id มาได้แต่จะเขียนเหมือน css เช่น .message-3 และ #message-3 แล้วได้กลับมาเป็น array
let message3 = document.querySelectorAll(".message-3")
message3.forEach((el) => el.innerHTML = "ข้อความที่ 3")

//querySelector -> เหมือน querySelectorAll แต่ถ้ามันเห็น class, id อันไหนอันแรกก็จะทำแค่อันแรกอันต่อไปไม่ทำ ไม่ได้ array กลับมา
let message4 = document.querySelector("#message-4")
message4.innerHTML = "ข้อความที่ 4";

