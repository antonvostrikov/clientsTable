import { addClient } from "./addClients.js"

export const createHeader = () => {
    const header = document.createElement('header')
    const headerWrapper = document.createElement('div')
    const container = document.createElement('div')
    const headerTitle = document.createElement('div')
    const headerNav = document.createElement('div')
    const title = document.createElement('h1')
    const form = document.createElement('form')
    const input = document.createElement('input')
    const addBtn = document.createElement('button')

    addBtn.textContent = 'Добавить клиента'
    title.textContent = 'Клиенты'

    input.placeholder = 'Введите ФИО'

    header.classList.add('header')
    container.classList.add('container')
    addBtn.classList.add('add-client', 'header-btn')
    input.classList.add('input-search')
    headerTitle.classList.add('header__title')
    title.classList.add('header__title-title')
    headerNav.classList.add('header__nav')
    headerWrapper.classList.add('header__wrapper')

    headerTitle.append(title)
    form.append(input)
    headerNav.append(form, addBtn)
    headerWrapper.append(headerTitle, headerNav)
    container.append(headerWrapper)
    header.append(container)

    addBtn.addEventListener('click', () => {
        addClient()
    })

    return {
        header,
        input
    }
}