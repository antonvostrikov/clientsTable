import { addClient } from "./addClients.js"

export const clientsSection = () => {
    const wrapperAdding = document.createElement('div')
    const searchForm = document.createElement('form')
    const searchInput = document.createElement('input')
    const addBtn = document.createElement('button')
    const sectionWrapper = document.createElement('section')
    const container = document.createElement('div')
    const table = document.createElement('table')
    const head = document.createElement('thead')
    const body = document.createElement('tbody')
    const rowHead = document.createElement('tr')
    const headId = document.createElement('th')
    const headFullName = document.createElement('th')
    const headCreated = document.createElement('th')
    const headUpdated = document.createElement('th')
    const headContacts = document.createElement('th')
    const headActions = document.createElement('th')

    headId.textContent = 'ID'
    headFullName.textContent = 'Фамилия Имя Отчество'
    headCreated.textContent = 'Создано'
    headUpdated.textContent = 'Изменено'
    headContacts.textContent = 'Контакты'
    headActions.textContent = 'Действия'

    sectionWrapper.classList.add('section__clients')
    wrapperAdding.classList.add('section__clients-adding')
    addBtn.classList.add('add-client')
    searchInput.classList.add('input-search')
    table.classList.add('section__clients-table')
    headId.classList.add('head-id', 'head-cell')
    headFullName.classList.add('head-fullname', 'head-cell')
    headCreated.classList.add('head-created', 'head-cell')
    headUpdated.classList.add('head-updated', 'head-cell')
    headContacts.classList.add('head-contacts', 'head-cell')
    headActions.classList.add('head-actions', 'head-cell')

    rowHead.append(headId, headFullName, headCreated, headUpdated, headContacts, headActions)
    head.append(rowHead)
    table.append(head, body)

    container.classList.add('container')
    head.classList.add('table__thead')
    body.classList.add('table__tbody')

    addBtn.textContent = 'Добавить клиента'

    searchInput.placeholder = 'Найти клиента'

    searchForm.append(searchInput)
    wrapperAdding.append(searchForm, addBtn)
    container.append(wrapperAdding, table)
    sectionWrapper.append(container)

    addBtn.addEventListener('click', (e) => {
        addClient()
    })


    return {
        sectionWrapper
    }
}