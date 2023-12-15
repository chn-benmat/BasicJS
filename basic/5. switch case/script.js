/*
switch -> เป็นโครงสร้างควบคุมที่ใช้ในการตรวจสอบค่าของตัวแปรและทำงานตามเงื่อนไขที่ตรงกัน
case -> เป็นส่วนหนึ่งของ switch statement ที่ใช้เปรียบเทียบค่าของตัวแปรกับค่าที่ระบุ
break -> ใช้ใน switch เพื่อหยุดการทำงานของ switch และป้องกันโค้ดที่ถูกต่อจาก case ที่ตรงกับเงื่อนไขที่ถูกทำงานไปด้วย
default -> มักถูกใช้เพื่อจัดการกรณีที่ค่าของตัวแปรไม่ตรงกับทุกรายการที่กำหนดใน 
*/

let day = "Monday";

switch (day) {
        case "Monday":
                console.log("It's the start of the week");
                break;
        case "Tuesday":
                console.log("It's the second day of the week");
                break;
        case "Wednesday":
                console.log("It's the middle of the week");
                break;
        case "Thursday":
        case "Friday":
                console.log("It's almost the weekend");
                break;
        case "Saturday":
        case "Sunday":
                console.log("It's the weekend");
                break;
        default:
                console.log("Invalid day");
}

/*
switch (day) -> 
        เริ่มต้น switch statement ด้วยการตรวจสอบค่าของตัวแปร day

case "Monday" -> 
        ถ้าค่าของ day เป็น "Monday", โปรแกรมจะทำคำสั่งที่อยู่ในบล็อกนี้, ซึ่งคือ console.log("It's the start of the week");

break; -> 
        break ใช้เพื่อหยุดการทำงานของ switch statement หลังจากที่คำสั่งใน case "Monday": ถูกทำงาน

case "Tuesday" -> 
        ถ้าค่าของ day เป็น "Tuesday", โปรแกรมจะทำคำสั่งที่อยู่ในบล็อกนี้, ซึ่งคือ console.log("It's the second day of the week");

break; -> 
        break ใช้เพื่อหยุดการทำงานของ switch statement หลังจากที่คำสั่งใน case "Tuesday": ถูกทำงาน

case "Wednesday" -> 
        ถ้าค่าของ day เป็น "Wednesday", โปรแกรมจะทำคำสั่งที่อยู่ในบล็อกนี้, ซึ่งคือ console.log("It's the middle of the week");

break; -> 
        break ใช้เพื่อหยุดการทำงานของ switch statement หลังจากที่คำสั่งใน case "Wednesday": ถูกทำงาน

case "Thursday" -> 
        ถ้าค่าของ day เป็น "Thursday" หรือ "Friday", โปรแกรมจะทำคำสั่งที่อยู่ในบล็อกนี้, ซึ่งคือ console.log("It's almost the weekend");

break; -> 
        break ใช้เพื่อหยุดการทำงานของ switch statement หลังจากที่คำสั่งใน case "Thursday": ถูกทำงาน

case "Saturday" -> 
        ถ้าค่าของ day เป็น "Saturday" หรือ "Sunday", โปรแกรมจะทำคำสั่งที่อยู่ในบล็อกนี้, ซึ่งคือ console.log("It's the weekend");

break;-> 
        break ใช้เพื่อหยุดการทำงานของ switch statement หลังจากที่คำสั่งใน case "Saturday": ถูกทำงาน

default -> 
        ถ้าค่าของ day ไม่ตรงกับทุกรายการที่กำหนดใน case, โปรแกรมจะทำคำสั่งที่อยู่ในบล็อก default, ซึ่งคือ console.log("Invalid day");
*/