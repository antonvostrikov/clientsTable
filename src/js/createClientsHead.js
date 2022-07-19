import { clientsBody } from "./createClientsBody.js"

export const clientsItems = () => {
    const wrapper = document.createElement('table')
    const head = document.createElement('thead')
    const headRow = document.createElement('tr')
    const headId = document.createElement('th')
    const headFullName = document.createElement('th')
    const headCreated = document.createElement('th')
    const headUpdated = document.createElement('th')
    const headContacts = document.createElement('th')
    const headActions = document.createElement('th')
    const body = document.createElement('tbody')

    wrapper.classList.add('table')

    headId.textContent = 'ID'
    headFullName.textContent = 'Фамилия Имя Отчество'
    headCreated.textContent = 'Время создания'
    headUpdated.textContent = 'Время изменения'
    headContacts.textContent = 'Контакты'
    headActions.textContent = 'Действия'

    body.classList.add('table__body')

    headRow.append(headId, headFullName, headCreated, headUpdated, headContacts, headActions)
    head.append(headRow)
    wrapper.append(head, body)

    return {
        wrapper
    }
}