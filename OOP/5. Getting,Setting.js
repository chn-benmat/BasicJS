/*
Getting (ดึงข้อมูล) ->
        การดำเนินการที่ใช้เพื่อดึงข้อมูลจากตัวแปรหรือ properties ของอ็อบเจ็กต์. เมื่อคุณ "get" ค่า, คุณกำลังดึงข้อมูลมาใช้

Setting (กำหนดค่า) ->
        การดำเนินการที่ใช้เพื่อกำหนดค่าให้กับตัวแปรหรือ properties ของอ็อบเจ็กต์. เมื่อคุณ "set" ค่า, คุณกำลังกำหนดค่าให้กับตัวแปรนั้น
*/

class User {
        // private
        #name
        #password
        constructor(name, password) {
                this.#name = name
                this.#password = password
                this.showDetail()
        }
        showDetail() {
                console.log(`ชื่อผู้ใข้งาน ${this.#name} , รหัสผ่าน ${this.#password}`);
        }
        // เป็นการเปลี่ยนค่าให้กับ private
        setName(newName) {
                this.#name = newName
        }
        // การดึงค่าออกมา
        getName(){
                return this.#name
        }
}

const user = new User("เอ็ม", 1112) // Output: ชื่อผู้ใข้งาน เอ็ม , รหัสผ่าน 1112
user.setName("ว้าา")
user.showDetail() // Output: ชื่อผู้ใข้งาน ว้าา , รหัสผ่าน 1112
console.log(user.getName()); // Output: ว้าาา