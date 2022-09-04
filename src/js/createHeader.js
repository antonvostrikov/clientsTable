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
    const filterBtn = document.createElement('button')

    addBtn.textContent = 'Добавить клиента'
    filterBtn.textContent = 'Фильтр'
    title.textContent = 'Клиенты'

    input.placeholder = 'Найти клиента'

    header.classList.add('header')
    container.classList.add('container')
    addBtn.classList.add('add-client', 'header-btn')
    filterBtn.classList.add('filter-client', 'header-btn')
    input.classList.add('input-search')
    headerTitle.classList.add('header__title')
    title.classList.add('header__title-title')
    headerNav.classList.add('header__nav')
    headerWrapper.classList.add('header__wrapper')

    headerTitle.append(title)
    form.append(input)
    headerNav.append(form, addBtn, filterBtn)
    headerWrapper.append(headerTitle, headerNav)
    container.append(headerWrapper)
    header.append(container)

    addBtn.addEventListener('click', () => {
        addClient()
    })

    return {
        header
    }
}