import { reload } from "./lib/utills.js"
import { first, second, third } from "./lib/db.js"
import { userItem } from "./components/user.js"

const column_25 = document.querySelector('.column_25')
const column_50 = document.querySelector('.column_50')
const column_others = document.querySelector('.column_others')
const form = document.querySelector('.form')


form.onsubmit = (e) => {
    e.preventDefault()

    let age = new FormData(e.target).get('age')
    let name =  new FormData(e.target).get('name')

    const newUser = {
        name: name,
        age: age
    };

    if (age >= 0  && age<= 25) {
        first.push(newUser)
        reload(first, userItem, column_25);

    } else if (age > 25 && age <= 50) {
        second.push(newUser)
        reload(second, userItem, column_50)

    } else if (age > 50) {
        third.push(newUser)
        reload(third, userItem, column_others)

    } else {
        alert('error')
    }
}
