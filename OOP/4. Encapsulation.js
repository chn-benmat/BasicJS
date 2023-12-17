/*
Encapsulation ->
        แนวคิดในการซ่อนข้อมูลภายในออบเจ็กต์จากภายนอก โดยกำหนดระดับการเข้าถึงของสมาชิกในออบเจ็กต์ 
        
Acces Modifier หรือตัวควบคุมการเข้าถึง ->
        เป็นฟีเจอร์ในภาษาโปรแกรมเชิงวัตถุ (OOP) ที่ใช้กำหนดสิทธิ์ของการเข้าถึงสมาชิกต่างๆ ภายในคลาส 
        ซึ่งช่วยควบคุมความปลอดภัยและความยืดหยุ่นของโค้ด ซึ่งสามารถแบ่งได้เป็น 3 ระดับ ดังนี้
                1. Public: สมาชิกในออบเจ็กต์ระดับนี้สามารถเข้าถึงได้จากภายนอกออบเจ็กต์โดยตรง
                2. Private: สมาชิกในออบเจ็กต์ระดับนี้สามารถเข้าถึงได้จากภายในออบเจ็กต์เท่านั้น
                3. Protected: สมาชิกในออบเจ็กต์ระดับนี้สามารถเข้าถึงได้จากภายในออบเจ็กต์และคลาสที่สืบทอดมาจากออบเจ็กต์นั้น
*/

// Public
class Animal {
        name = "ระบุชื่อ"
        constructor(name) {
                this.name = name;
                this.greet()
        }

        greet() {
                console.log(`สวัสดี, ฉันชื่อ ${this.name}`);
        }
}

const myPet = new Animal("กิ๊ก"); // Output: สวัสดี, ฉันชื่อ กิ๊ก
myPet.name = "กิ๊กโดนแฮ็กกก"
myPet.greet() // Output: สวัสดี, ฉันชื่อ กิ๊กโดนแฮ็กกก

//Private จะมีเครื่องหมาย # ด้านหน้า
class BankAccount {
        #balance;
        constructor(initialBalance) {
                this.#balance = initialBalance;
                this.getBalance()
        }
        getBalance() {
                console.log(this.#balance);
        }
}

const myAccount = new BankAccount(1000);// Output: 1000
// myAccount.#balance = 100 // Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier

// Protected จะมีเครื่องหมาย _ ด้านหน้า
class Vehicle {
        _speed;
        constructor(speed) {
            this._speed = speed;
        }
        showSpeed(){
                console.log(this._speed);
        }
    }

// สืบทอด
class Car extends Vehicle {
        accelerate() {
            this._speed += 10;
            this.showSpeed()
        }
    }
    
    const myCar = new Car(50);
    myCar.accelerate();// 60
    // console.log(myCar.speed);  // Error: Cannot access protected field speed from an object.
    