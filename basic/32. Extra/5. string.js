/*
includes -> ที่ใช้ตรวจสอบว่าข้อความหรือสตริง (string) บางอย่างมีอยู่ในสตริงอีกอย่างหรือไม่ โดยจะคืนค่าเป็น true ถ้าพบและ false
toLowerCase ->  ใช้เปลี่ยนตัวอักษรในสตริง (string) ทั้งหมดเป็นตัวอักษรพิมพ์เล็ก (lowercase) หรือตัวอักษรต่ำกว่า (lowercased)
slice ->  ใช้ในการดึงส่วนหนึ่งของสตริง (string) หรือ array และสร้างสตริงหรือ array ใหม่จากส่วนที่ถูกดึงมานั้นๆ
Template string ->  ที่ให้ความสะดวกและอ่านง่ายขึ้น โดยใช้ backticks (`) 
เป็นตัวครอบสตริงและการนำเข้าค่าหรือตัวแปรลงในสตริงนั้นๆ ด้วย ${}

*/
console.log("--------------------------STRING-----------------------------");;
// Search string การหาข้อความ
const word = "Hello World"
const isFound = word.toLowerCase().includes("wOr".toLowerCase())
console.log(isFound); // true

// Slice string
const productCode = "th-9991112223"
const country = productCode.slice(0, 2)
const productID = productCode.slice(3)
console.log(country);// th
console.log(productID); // 9991112223

// Template string
console.log(`Country = ${country}, product Id = ${productID}`);// Country = th, product Id = 9991112223
console.log("-------------------------------------------------------------");
