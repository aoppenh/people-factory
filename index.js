const personInfo = document.querySelector('#personForm')
const resetButton = document.querySelector('#resetForm')

document.querySelector('p#welcome').innerHTML ='Welcome!'
document.querySelector('p#welcome').style.fontSize = 'xx-large'

function handleSubmit(ev) {
    ev.preventDefault()

    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const school = f.personSchool.value
    const color = f.personColor.value
    const number = f.personNumber.value

    const colorDiv = `
        <div style="background-color: ${color}; width: 100px; height: 50px;"></div>
    `

    detailList(name, age, school, color, colorDiv, number)

    if (age < 0) {
        document.querySelector('p#welcome').innerHTML = 'You cannot enter a negative age!!!!!!!!'
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.querySelector('p#valid').style.color = 'crimson'
        document.querySelector('p#welcome').style.color = 'crimson'
    } else {
        document.querySelector('p#welcome').innerHTML = 'Welcome' + ' : ' + 'You are ' + age + ' years old and you attend ' + school
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.querySelector('p#welcome').style.color = 'black'
        document.querySelector('h1').innerHTML = 'People Factory : ' + name + ' - Favorite Number : ' + number
        document.querySelector('p#valid').style.color = 'black'
        //document.body.style.backgroundColor = color
    }

    // const em = document.createElement('em')
    // em.textContent = name
    // details.appendChild(em)
}

function handleReset(ev) {
    ev.preventDefault()

    document.querySelector('#personForm').reset()
    document.querySelector('#resetForm').reset()

    document.querySelector('#details').querySelector('p').innerHTML = ''

    document.body.style.backgroundColor = 'white'
    document.querySelector('p#welcome').style.color = 'black'
    document.querySelector('p#welcome').innerHTML ='Welcome!'
    document.querySelector('p#valid').style.color = 'black'
    document.querySelector('h1').innerHTML = 'A Factory of People'
}

function detailList(name, age, school, color, colorDiv, number) {
    // document.querySelector('#details').querySelector('ul').innerHTML = `
    //     <ul>
    //         <p>Details:</p>
    //         <li>Name: ${name}</li>
    //         <li>Age: ${age}</li>
    //         <li>School: ${school}</li>
    //         <li>Color: ${color}</li>
    //         <li>Color: ${colorDiv}</li>
    //         <li>Number: ${number}</li>
    //     </ul>
    //  `

    const details = document.querySelector('#details')
    const text = document.createElement('text')

    document.querySelector('#details').innerHTML = 'Details:'

    text.innerHTML = `Details:`
    details.appendChild(text)

    text.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>School: ${school}</li>
            <li>Color: ${color}</li>
            <li>Color: ${colorDiv}</li>
            <li>Number: ${number}</li>
        </ul>
    `
    details.appendChild(text)
}

personInfo.addEventListener('submit', handleSubmit)
resetButton.addEventListener('reset', handleReset)