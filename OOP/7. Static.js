/*
Static ->
        คือ Property ที่สามารถใช้งานได้โดยตรง ไม่ต้องผ่าน Object

Static Method ->
        คือ Method ที่สามาถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน Object การสร้าง Sataic Method จะเหมือนกับการสร้าง Method ทั่วไป
*/

class User {
        #name
        #password
        static database = []
        constructor(name, password) {
                this.#name = name
                this.#password = password
                this.showDetail()
        }
        showDetail() {
                console.log(`ชื่อผู้ใข้งาน ${this.#name} , รหัสผ่าน ${this.#password} `);
        }
        // setter
        set Name(newName) {
                this.#name = newName
        }
        // getter
        get Name(){
                return this.#name
        }
        static addUser(User){
                this.database.push(User)
        }
}

// การดึง static
User.addUser(new User("เอ็ม", 1112))
User.addUser(new User("อาฟ", 1112))
User.addUser(new User("อ้าาาาา", 1112))
// แสดงข้อมูล database
console.log("แสดงข้อมูล database");
User.database.forEach((user)=>{
        user.showDetail()
})