/*
createElement ->
        เมทอดที่ใช้สร้าง Element ใหม่ใน DOM (Document Object Model). เมื่อเรียกใช้ document.createElement(tagName) 
        โดยกำหนด tagName ที่ต้องการสร้าง (เช่น "div", "p", "span", ฯลฯ), จะได้ Element ใหม่ที่ถูกสร้างขึ้นมา
*/

const exampleBox = document.querySelector('.example-box')

function lyricPromise(example){
        return new Promise((resolve,) => {
                setTimeout(() => {
                        // การสร้าง tag html ใหม่
                        const exampleElement = document.createElement("h3")
                        exampleElement.innerHTML = example
                        exampleBox.append(exampleElement)
                        resolve()
                }, 3000);
        })
}
lyricPromise("ตัวอย่าง ข้อควมที่ 1")
.then(()=>{
        return lyricPromise("ตัวอย่าง ข้อควมที่ 2")
})
.then(()=>{
        return lyricPromise("ตัวอย่าง ข้อควมที่ 3")
})
.then(()=>{
        return lyricPromise("ตัวอย่าง ข้อควมที่ 4")
})