/*
prepend -> 
        เพื่อเพิ่ม element หรือเนื้อหาลงในตัวแทรกต้นทาง (parent element) ของ element ที่ระบุ

parentNode ->
        property ที่ใช้เพื่อเข้าถึง Element ที่เป็น parent (โผล่) ของ Element ที่กำลังถูกพิจารณา. 
        ดังนั้น, เมื่อเราใช้ parentNode เราจะได้ Element ที่ครอบ (wrap) Element นั้น ๆ
 */
const todoTitle = document.querySelector(".todo-title");
const addTodoButton = document.querySelector(".add-todo");
const todoList = document.querySelector(".todo-list");

function removeTodo(event){
        event.target.parentNode.remove()
        event.preventDefault()
}
function addTodo(){
        // div
        const todo = document.createElement("div")
        todo. classList.add("todo")
        
        // h3
        const h3 = document.createElement("h3")
        h3.innerHTML = todoTitle.value

        //button
        const button = document.createElement("button")
        button.type = "button"
        button.classList.add("remove-todo")
        button.innerHTML = "ลบ"
        button.addEventListener("click", removeTodo)

        //h3, button => div
        todo.append(h3, button)

        // div => todo list
        todoList.prepend(todo)

        todoTitle.value = ""
}

addTodoButton.addEventListener("click",addTodo)
