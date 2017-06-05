const personName = document.querySelector('#personForm')
const personAge = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    if (age < 0) {
        document.querySelector('p#welcome').innerHTML = 'You cannot enter a negative age, unless of course you are an unborn demon'
        document.body.style.backgroundColor = 'crimson'
    } else {
        document.querySelector('p#welcome').innerHTML = 'Welcome' + '-' + name + ' ' + '\n You are ' + age + ' years old.'
        document.body.style.backgroundColor = 'white'
    }
}

personName.addEventListener('submit', handleSubmit)
personAge.addEventListener('submit', handleSubmit)