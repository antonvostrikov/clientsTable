import { deleteClient } from "./api.js"

export const clientsBody = (data) => {
    const bodyRow = document.createElement('tr')
    const bodyId = document.createElement('td')
    const bodyFullName = document.createElement('td')
    const bodyCreated = document.createElement('td')
    const bodyUpdated = document.createElement('td')
    const bodyContacts = document.createElement('td')
    const bodyActions = document.createElement('td')
    const bodyBtnEdit = document.createElement('button')
    const bodyBtnDelete = document.createElement('button')

    bodyRow.dataset.id = data.id

    bodyId.textContent = data.id
    bodyFullName.textContent = `${data.surname} ${data.name} ${data.lastName}`
    bodyCreated.textContent = data.created
    bodyBtnEdit.textContent = 'Изменить'
    bodyBtnDelete.textContent = 'Удалить'
     
    bodyBtnDelete.addEventListener('click', () => {
        deleteClient(data.id)
        document.body.filter(`['data-id=${data.id}']`).remove()
    })

    bodyActions.append(bodyBtnEdit, bodyBtnDelete)
    bodyRow.append(bodyId, bodyFullName, bodyCreated, bodyUpdated, bodyContacts, bodyActions)

    return bodyRow
}