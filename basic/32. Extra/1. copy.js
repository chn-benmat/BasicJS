/*Copy -> ไม่ได้เป็นคำสั่งหรือฟังก์ชันที่มีอยู่โดยตรง. ถ้าคุณกำลังพูดถึงการคัดลอก (copy)
 ข้อมูลหรืออ็อบเจกต์, มักจะใช้เทคนิคหลายวิธีตามลักษณะของข้อมูลและวัตถุประสงค์ของการคัดลอกนั้นๆ
Spread syntax หรือ ... -> ช่วยในการแยก (spread) ค่าของอาร์เรย์หรืออ็อบเจกต์ออกมาเพื่อให้สามารถนำไปใช้ได้ในบริบทต่าง ๆ
 */

//Copy Array
let originalPrices = [299, 599, 1299]
let originalPrices2 = [299, 599, 1299]
// ถ้าอยากใช้ = เพื่อ coppy ต้องเป็นข้อมูลแบบเดี่ยว เช่น n = 1, x = n , x = 3ผลลัพธ์ตอนlog -> n ยังมีค่า = 1, x มีค่า = 3 
let salePrices = originalPrices
let salePrices2 = [...originalPrices2]
salePrices[2] = 999
salePrices2[2] = 999
console.log("--------------------------COPY-------------------------------");;
console.log(`Original1: ${originalPrices}`);// Original: 299,599,999
console.log(`Sale1: ${salePrices}`);// Sale: 299,599,999
console.log(`Original2: ${originalPrices2}`);// Original2: 299,599,1299
console.log(`Sale2: ${salePrices2}`);// Sale2: 299,599,999

//Copy Object
let cat = {
        name: "Mimi",
        age:1
}
let cat2 = {
        name: "Momu",
        age:1
}
let nameCat = cat
let nameCat2 = {...cat2}
nameCat.name = "Suratan"
nameCat2.name = "Oil"
console.log(`Original1: ${cat.name}`); // Original1: Suratan
console.log(`Namecat1: ${nameCat.name}`);// Namecat1: Suratan
console.log(`Original2: ${cat2.name}`); // Original2: Momu
console.log(`Namecat2: ${nameCat2.name}`);// Namecat2: Oil
console.log("-------------------------------------------------------------");




