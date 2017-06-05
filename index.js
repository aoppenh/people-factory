const personName = document.querySelector('#personForm')
const personAge = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    document.querySelector('h1').textContent = name
}

personName.addEventListener('submit', handleSubmit)
personAge.addEventListener('submit', handleSubmit)