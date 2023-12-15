/*
setTimeout ->
        delay การทำงาน 1 วิ = 1000 จะทำงานแค่ใน scope ของมัน

setInterval ->
         การทำงานเหมือน setTimeout เลยแต่มีขอแตกต่างตรงที่ จะทำงานไปเรื่อยๆไม่มีที่สิ้นสุด
*/
let lyricArray = [
        "มันก็เลยต้องปีน ปีนให้สูงขึ้นไป",
        "ไม่ว่าสูงเท่าใด (ลาลาลา ลาลาลาลา)",
        "มันก็เลยต้องปีน ปีนให้สูงขึ้นไป",
        "จะยากเย็นเท่าไร (ลาลาลา ลาลาลาลา)",
        "จะต้องเจ็บกี่ครั้ง ตกลงมากี่หน",
        "สิ่งเดียวที่รู้ คือในตอนนี้ จะกี่วิธี จะขึ้นไป",
        "กระต่ายตัวน้อย ไม่คอยความฝัน",
        "เมื่อสิ่งที่หวัง ช่างห่างไกล",
        "สวยงาม โอ้จันทรา ดวงดารา ส่องลงมา",
        "ช่างเฉิดฉาย ฝันไป จะวันนึง จะวันใด",
        "จะไขว่และคว้ามา",
        "โอ้อันว่าของสูงแม้หมายปองต้องใจ",
        "จะทำยังไรจะคว้ามา",
        "และในตอนสุดท้าย ถ้าคลาดเคลื่อนสิ่งนั้น",
        "แต่ฉันก็จะยอม"
];
let numberArray = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
        "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
        "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
        "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
        "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
        "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
        "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
        "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];
// *** เรื่อง document เดี่ยวอธิบายในเรื่อง DOM
let randomButton = document.getElementById("random");
let output = document.getElementById("output")
let stopButton = document.getElementById("stop")

let randomButton2 = document.getElementById("random2");
let output2 = document.getElementById("output2")
let stopButton2 = document.getElementById("stop2")

let timeOutId1 = 0;
let timeOutId2 = 0;

randomButton.addEventListener("click", () => {
        timeOutId1 = setTimeout(() => {
                let n = lyricArray.length;
                let index = Math.floor(Math.random() * n);
                let lyric = lyricArray[index];
                output.innerHTML = lyric;
        }, 3000)
})

randomButton2.addEventListener("click", () => {
        timeOutId2 = setInterval(() => {
                let n2 = numberArray.length;
                let index2 = Math.floor(Math.random() * n2);
                let number= numberArray[index2];
                output2.innerHTML = number;
        }, 3000);
})

stopButton.addEventListener("click", ()=>{
        clearTimeout(timeOutId1)
})

stopButton2.addEventListener("click",()=> clearInterval(timeOutId2))