const container = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    container.appendChild(div)
}

const div = document.querySelector('div')

const paint = (event) => {
    event.target.classList.add('painted');
}

const clearBoard = () => {
    const all = document.querySelectorAll('div')
    for (let i = 0; i < all.length; i++) {
        all[i].classList.remove('painted')
    }
}

const resizeGrid = () => {
    const axis = Number(prompt('Enter number of "pixels" per axis: '));
    if (isNaN(axis) || axis <= 0 || axis > 100) {
        alert('Please enter a valid number and try again (1-100)')
        return
    }

    container.innerHTML = ''

    for (let i = 0; i < axis * axis; i++) {
        const div = document.createElement('div')
        container.appendChild(div)
    }

    container.style = `display: grid; grid-template: repeat(${axis}, 1fr) / repeat(${axis}, 1fr)`
}

// Hover effect
div.addEventListener('mouseover', (event) => {
    event.target.style = 'background-color: gray; border: none;';
    event.target.addEventListener('mouseout', (event) => {
        if (event.target.style.backgroundColor !== 'black') {
            event.target.removeAttribute('style')
        }
    })
})

// Painting
div.addEventListener('mousedown', (event) => {
    event.preventDefault()
    event.target.classList.add('painted');

    div.addEventListener('mouseover', paint)

    div.addEventListener('mouseup', () => {
        div.removeEventListener('mouseover', paint)
    })
})