/*
Fetch -> 
        การใช้คำสั่งเพื่อไปขอข้อมูลหรือส่งข้อมูลไปยังที่อื่นบนอินเตอร์เน็ต
        อาจเป็นการดึงข้อมูลจากเว็บไซต์อื่นหรือบริการอื่น ๆ บนอินเตอร์เน็ต หรือก็คือการดึงข้อมูลจาก api มาใช้

API -> Application Programming Interface
        ชุดข้อกำหนดที่กำหนดวิธีการทำงานหรือติดต่อสื่อสารระหว่างซอฟต์แวร์หรือแอปพลิเคชันที่ต่างกันไป 
        โดย API ทำหน้าที่เป็นตัวกลางที่อนุญาตให้แอปพลิเคชันต่าง ๆ สื่อสารหรือทำงานร่วมกันได้ 

Web API -> 
        ชุดข้อกำหนดที่อนุญาตให้แอปพลิเคชันหรือซอฟต์แวร์ต่าง ๆ สื่อสารกันผ่านเครือข่ายอินเทอร์เน็ต (หรือเว็บ) 
        มักถูกใช้ในการเข้าถึงข้อมูลหรือบริการจากระบบภายนอกผ่านทางเว็บ, โดยการส่งคำขอ (request) 
        ไปยังเซิร์ฟเวอร์และรับข้อมูล (response) กลับมา
        
JSON ->
        รูปแบบของข้อมูลที่ใช้ในการแลกเปลี่ยนข้อมูลระหว่างแอปพลิเคชันหรือระบบที่สตริงและวัตถุของ JavaScript 
        ใช้แทนข้อมูล. JSON ถูกออกแบบให้เป็นภาษาที่เปิดเผย (open standard) 
        และเป็นที่นิยมในการส่งข้อมูลระหว่างเว็บแอปพลิเคชันและเซิร์ฟเวอร์
 */
const userList = document.querySelector(".user-list")
const avatarImg = document.querySelector(".avatar")
const fullnameText = document.querySelector(".fullname")
const emailText = document.querySelector(".email")

// api แบบดึง Single user 
fetch("https://reqres.in/api/users/10")
        .then((response) => {
                return response.json();
        })
        .then((json) => {
                const user = json.data
                avatarImg.src = user.avatar
                fullnameText.innerHTML = `${user.first_name} ${user.last_name}`
                emailText.innerHTML = user.email
        })
        .catch((error) => {
                console.log(error.message);
        })

// api แบบดึง List users 
fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((json) => {
                const users = json.data
                users.forEach((user) => {
                        const userItem = document.createElement("div");
                        userItem.classList.add("user-item");

                        userItem.innerHTML = `
                        <img class="avatar" src="${user.avatar}">
                         <h3 class="fullname">${user.first_name} ${user.last_name}</h3>
                        <p class="email">${user.email}</p>`
                        userList.appendChild(userItem)
                });
        })
        .catch((error) => console.log(error.message))