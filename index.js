const PeopleFactory = {
    details: document.querySelector('#details'),

    personInfo: document.querySelector('#personForm'),

    resetButton: document.querySelector('#resetForm'),

    init: function () {
        this.personInfo.addEventListener('submit', this.handleSubmit)
        this.resetButton.addEventListener('reset', this.handleReset)

        document.querySelector('p#welcome').innerHTML = 'Welcome!'
        document.querySelector('p#welcome').style.fontSize = 'xx-large'
    },

    renderColor: function (color) {
        const colorDiv = document.createElement('div')
        colorDiv.style.backgroundColor = color
        colorDiv.style.width = '100px'
        colorDiv.style.height = '50px'
        return colorDiv
    },
    renderListData: function (fieldName, value) {
        const li = document.createElement('li')
        li.innerHTML = `${fieldName}: ${value}`
        return li
    },
    renderList: function (personData) {
        const list = document.createElement('ul')
        Object.keys(personData).map(function (fieldName) {
            const li = PeopleFactory.renderListData(fieldName, personData[fieldName])
            list.appendChild(li)
        })
        return list
    },
    handleSubmit: function (ev) {
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

        const person = {
            name: name,
            age: age,
            school: school,
            number: number,
            color: color,
            colorDiv: PeopleFactory.renderColor(color).outerHTML,
        }

        PeopleFactory.details.appendChild(PeopleFactory.renderList(person))

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
    },
    handleReset: function (ev) {
        ev.preventDefault()

        document.querySelector('#personForm').reset()
        document.querySelector('#resetForm').reset()

        //PeopleFactory.details.reset()

        document.body.style.backgroundColor = 'white'
        document.querySelector('p#welcome').style.color = 'black'
        document.querySelector('p#welcome').innerHTML = 'Welcome!'
        document.querySelector('p#valid').style.color = 'black'
        document.querySelector('h1').innerHTML = 'A Factory of People'
    },
}

PeopleFactory.init()