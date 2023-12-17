/*
Accesor ->
        ซึ่งเป็นเมทอดที่ใช้ในการดึงข้อมูล (get) และกำหนดค่า (set) ข้อมูลใน properties ของอ็อบเจ็กต์ 
        โดยทั่วไปมักจะใช้เพื่อควบคุมการเข้าถึงและการแก้ไขข้อมูล

Get ->
        ตัวช่วยสำหรับเรียกดูข้อมูลใน Property

Set ->
        ตัวช่วยสำหรับกำหนดหรือเขียนข้อมูลใน Property
*/

class User {
        #name
        #password
        constructor(name, password) {
               this. #name= name
               this.#password = password
                this.showDetail()
        }
        showDetail() {
                console.log(`ชื่อผู้ใข้งาน ${this.#name} , รหัสผ่าน ${this.#password}`);
        }
        // ถ้าอยาก set ให้ได้มากว่า 1 ตัว ต้องใช้ { }
        set UserDetails({newName, newPassword}) {
                this.#name = newName
                this.#password = newPassword
        }
        // การดึงค่าออกมา
        get UserDetails(){
                return `${this.#name} , ${this.#password}`
        }
}

const user = new User("เอ็ม", 1112) // Output: ชื่อผู้ใข้งาน เอ็ม , รหัสผ่าน 1112
// set
user.UserDetails = {newName:"วูฮู้", newPassword:2111}
// get
console.log(user.UserDetails); // Output: วูฮู้ , 2111