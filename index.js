const personForm = document.querySelector('#personF')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    document.querySelector('h1').textContent = name
}

personForm.addEventListener('submit', handleSubmit)