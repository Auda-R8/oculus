'use strict'

const buttons = document.querySelectorAll('.tabs-btn__item')
const items = document.querySelectorAll('.tabs-content__item')

buttons.forEach(elem => {
    elem.addEventListener('click', (event) => {
        let data = event.target.dataset.button
        let item = document.getElementById(data)

        buttons.forEach(el => {
            el.classList.remove('active')
        })

        items.forEach(item => {
            item.classList.remove('active')
        })

        item.classList.add('active')
        elem.classList.add('active')
    })
})

const burger = document.querySelector('#burger')
const closemenu = document.querySelector('#burger-close')
const menu = document.querySelector('#menu')

burger.addEventListener('click', event => {
    event.preventDefault()

    menu.classList.add('active')
})

closemenu.addEventListener('click', event => {
    event.preventDefault()

    menu.classList.remove('active')
})