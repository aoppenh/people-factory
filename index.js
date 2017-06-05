const personName = document.querySelector('#personForm')
const personAge = document.querySelector('#personForm')
const personSchool = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()

    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const school = f.personSchool.value
    const color = f.personColor.value

    if (age < 0) {
        document.querySelector('p#welcome').innerHTML = 'You cannot enter a negative age, unless of course you are an unborn demon'
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.body.style.backgroundColor = 'darkgrey'
        document.querySelector('p#valid').style.color = 'crimson'
        document.querySelector('p#welcome').style.color = 'crimson'
    } else {
        document.querySelector('p#welcome').innerHTML = 'Welcome' + ' - ' + 'You are ' + age + ' years old and you attend ' + school
        document.querySelector('p#welcome').style.color = 'black'
        document.querySelector('h1').innerHTML = 'People Factory - ' + name
        document.querySelector('p#valid').style.color = 'black'
        document.body.style.backgroundColor = color
    }
}

personName.addEventListener('submit', handleSubmit)
personAge.addEventListener('submit', handleSubmit)
personSchool.addEventListener('submit', handleSubmit)