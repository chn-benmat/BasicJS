/*
การใช้ลูป (loop) ใน Array->
        เพื่อวนลูปผ่านข้อมูลทุกตัวใน Array หรือทำประมวลผลบางอย่างกับข้อมูลทั้งหมดใน Array. 
        การนำเอา Array มาใช้ร่วมกับลูปช่วยให้เราสามารถทำงานกับข้อมูลที่มีลำดับต่อเนื่องได้สะดวกมากขึ้น
*/

let scores = [10, 20, 30, 50, 70, 90]
let passedCount1 = 0;
let passedCount2 = 0;

// แบบเก่า ไม่แน่นำ หรือ จะใช้ก็ได้แล้วแต่คนชอบ
for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 50) {
                passedCount1++
        }
}

// แบบใหม่ใช้ forEach  วนลูปข้อมูลจากตัวแปรชนิด Array จะใช้งานได้ง่าย สะดวก number คือตัวแปรที่ค่อยรับค่าforEach ส่งมา
scores.forEach((number) => {
        if (number >= 50) {
                passedCount2++
        }
})

console.log(passedCount1);
console.log(passedCount2);