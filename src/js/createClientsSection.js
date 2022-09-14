import { sortTable } from "./sort.js"

export const clientsSection = () => {
    const sectionWrapper = document.createElement('section')
    const tableWrapper = document.createElement('div')
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

    headId.setAttribute('data-type', 'number')
    headFullName.setAttribute('data-type', 'string')
    headCreated.setAttribute('data-type', 'date')
    headUpdated.setAttribute('data-type', 'date')

    sectionWrapper.classList.add('section__clients')
    tableWrapper.classList.add('table__wrapper')
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

    tableWrapper.append(table)
    container.append(tableWrapper)
    sectionWrapper.append(container)
    
    return {
        sectionWrapper,
        table
    }
}