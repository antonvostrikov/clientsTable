import { addClient } from "./addClients.js"

export const clientsSection = () => {
    const wrapperAdding = document.createElement('div')
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

    rowHead.append(headId, headFullName, headCreated, headUpdated, headContacts, headActions)
    head.append(rowHead)
    table.append(head, body)

    container.classList.add('container')
    head.classList.add('table__thead')
    body.classList.add('table__tbody')

    addBtn.textContent = 'Добавить клиента'

    wrapperAdding.append(addBtn)
    container.append(wrapperAdding, table)
    sectionWrapper.append(container)

    addBtn.addEventListener('click', (e) => {
        addClient()
    })


    return {
        sectionWrapper
    }
}