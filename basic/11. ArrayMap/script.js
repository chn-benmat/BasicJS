/*
map->
        จะวนค่าทุกค่าใน Array ไปเข้า Function แล้ว return ออกมาเป็น array ใหม่

filter ->
        การกรองข้อมูล โดยที่มันจะวนค่าทุกค่าใน Array แล้วเอา element ที่ตรงกับ condition ที่เราต้องการ

reduce ->
        ใช้สำหรับการรวมข้อมูลใน Array ไปเรื่อยๆ ตามฟังก์ชันที่กำหนด
 */

let scores = [30, 50, 20, 45, 75, 15, 87, 93]

let passFailScores = scores.map((number) => {
        if (number >= 80) {
                return "Grade A"
        } else if (number >= 70) {
                return "Grade B"
        } else if (number >= 60) {
                return "Grade C"
        }
        return "Grade F"
})
console.log(scores); // [ 30, 50, 20, 45, 75, 15, 87, 93 ]
console.log(passFailScores); // [ "Grade F", "Grade F", "Grade F", "Grade F", "Grade B", "Grade F", "Grade A", "Grade A" ]

let passScores = scores.filter((number) => number >= 50)
console.log(scores); // [ 30, 50, 20, 45, 75, 15, 87, 93 ]
console.log(passScores); // [ 50, 75, 87, 93 ]

let sumScores = scores.reduce((sum, number) => {
        return sum + number
})
console.log(scores); // [ 30, 50, 20, 45, 75, 15, 87, 93 ]
console.log(sumScores); // 415