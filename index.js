const personInfo = document.querySelector('#personForm')
const resetButton = document.querySelector('#resetForm')

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
        document.querySelector('p#valid').style.color = 'crimson'
        document.querySelector('p#welcome').style.color = 'crimson'
    } else {
        document.querySelector('p#welcome').innerHTML = 'Welcome' + ' - ' + 'You are ' + age + ' years old and you attend ' + school
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.querySelector('p#welcome').style.color = 'black'
        document.querySelector('h1').innerHTML = 'People Factory - ' + name
        document.querySelector('p#valid').style.color = 'black'
        document.body.style.backgroundColor = color
    }
}

function handleReset(ev) {
    ev.preventDefault()

    document.querySelector('#personForm').reset()
    document.querySelector('#resetForm').reset()

    document.body.style.backgroundColor = 'white'
    document.querySelector('p#welcome').style.color = 'black'
    document.querySelector('p#welcome').innerHTML ='Welcome!'
    document.querySelector('p#valid').style.color = 'black'
    document.querySelector('h1').innerHTML = 'A Factory of People'
}

personInfo.addEventListener('submit', handleSubmit)
resetButton.addEventListener('reset', handleReset)