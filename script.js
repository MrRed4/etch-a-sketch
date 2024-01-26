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

// Hover effect
div.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'gray';
    event.target.addEventListener('mouseout', (event) => {
        if (event.srcElement.style.backgroundColor !== 'black') {
            event.srcElement.removeAttribute('style')
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