export function userItem(item) {
    const card = document.createElement('div')
    const p = document.createElement('p')
    const age_container = document.createElement('div')
    const span_age = document.createElement('span')
    const input = document.createElement('input')


    card.classList.add('card')
    p.innerHTML = item.name
    age_container.classList.add('age-container')
    span_age.innerHTML = "Age"
    input.value = item.age
    input.disabled = true

    card.append(p, age_container)
    age_container.append(span_age, input)

    return card
}


