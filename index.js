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

    // const colorDiv = `
    //     <div style="background-color: ${color}; width: 100px; height: 50px;"></div>
    // `

    const details = document.querySelector('#details')

    const person = {
        name: name,
        age: age,
        school: school,
        number: number,
        color: color,
        colorDiv: renderColor(color).outerHTML,
    }

    details.appendChild(renderList(person))

    if (age < 0) {
        document.querySelector('p#welcome').innerHTML = 'You cannot enter a negative age!!!!!!!!'
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.querySelector('p#valid').style.color = 'crimson'
        document.querySelector('p#welcome').style.color = 'crimson'
    } else {
        document.querySelector('p#welcome').innerHTML = 'Welcome' + ' : ' + 'You are ' + age + ' years old and you attend ' + school
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
        document.querySelector('p#welcome').style.color = 'black'
        document.querySelector('h1').innerHTML = name + ' - Age : ' + age
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

function renderList(personData) {
    const list = document.createElement('ul')
    Object.keys(personData).map(function(fieldName) {
        const li = renderListData(fieldName, personData[fieldName])
        list.appendChild(li)
    })
    return list
}

function renderColor(color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '100px'
    colorDiv.style.height = '50px'
    return colorDiv
}

function renderListData(fieldName, value) {
    const li = document.createElement('li')
    li.innerHTML = `${fieldName}: ${value}`
    return li
}

personInfo.addEventListener('submit', handleSubmit)
resetButton.addEventListener('reset', handleReset)