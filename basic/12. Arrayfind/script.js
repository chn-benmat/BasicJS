/*
find ->
        ใช้ค้นหาข้อมูลแรกจนอันสุดท้ายของ Array แต่ถ้าหาไม่เจอก็จะคืนค่า underfind กลับมา

findeIndex ->
        ใช้สำหรับค้นหา Index ของข้อมูลใน Array ตามเงื่อนไขที่กำหนด
        
every ->
        ตรวจสอบใน array ว่าผ่านเงื่อนไขที่เรากำหนดทั้งหมดรึป่าวแต่ถ้าเงื่อนไขมีอันไหนอันหนึ่งไม่ถูกต้องจะคืนค่า false ออกมา
        แต่ถ้าถูกเงื่อนไขทั้งหมดจะได้ค่า true

some ->
        ตรวจสอบใน array ว่ามีเงื่อนไขอันใดอันหนึ่งผ่าน จะคืนค่า true ออกมาเลย แต่ถ้าทุกค่าไม่ผ่านเลย จะคืนค่า false ออกมา
*/

let scores = [82, 75, 48, 64, 36]


let failedScore = scores.find((number) => number < 50)
console.log(failedScore); // 48

let failedNumber = scores.findIndex((number) => number < 50)
console.log(failedNumber); // 2

let everyonePassed1 = scores.every((number) => number >= 50)
console.log(everyonePassed1); // false

let everyonePassed2 = scores.every((number) => number >= 0)
console.log(everyonePassed2); // true

let someonePassed1 = scores.some((number) => number >= 50)
console.log(someonePassed1); // true

let someonePassed2 = scores.some((number) => number >= 500)
console.log(someonePassed2); // false