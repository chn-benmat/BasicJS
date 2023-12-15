/*
Convert DataType -> 
        คือกระบวนการที่เปลี่ยนแปลงค่าจากชนิดข้อมูลหนึ่งเป็นชนิดข้อมูลอื่น

Comment -> 
        คือการที่โปรแกรมเราจะไม่อ่าน Code บรรทัดนั้น
*/
// Comment ใน JavaScrip มี 2 แบบ 
//       คือ // กับ /* */ ส่วน /* */ คือการComment ได้หลายบรรทัด ส่วน // Comment ได้แค่ บรรทัดเดียว  

// Convert to String
let number = 42;
let stringNumber = String(number); // ใช้ String() เพื่อแปลงเป็น String
// ผลลัพธ์: stringNumber เป็น "42"

// Convert to Number
let numericString = "123";
let numericValue = Number(numericString); // ใช้ Number() เพื่อแปลงเป็น Number
// ผลลัพธ์: numericValue เป็น 123

// Convert to Boolean
let truthyValue = "true";
let booleanValue = Boolean(truthyValue); // ใช้ Boolean() เพื่อแปลงเป็น Boolean
// ผลลัพธ์: booleanValue เป็น true

// Convert to Number using parseInt or parseFloat
let floatString = "3.14";
let floatValue = parseFloat(floatString); // ใช้ parseFloat() เพื่อแปลงเป็น Float
// ผลลัพธ์: floatValue เป็น 3.14

// Convert to String using concatenation
let valueToConcatenate = 42;
let concatenatedString = "" + valueToConcatenate; // ใช้การเชื่อมต่อ String เพื่อแปลงเป็น String
// ผลลัพธ์: concatenatedString เป็น "42"

// Convert to Number using unary plus operator
let stringNumber2 = "123";
let numericValue2 = +stringNumber2; // ใช้ตัวดำเนินการบวกเพื่อแปลงเป็น Number
// ผลลัพธ์: numericValue2 เป็น 123
