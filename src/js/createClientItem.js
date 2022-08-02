import { deleteClient } from "./api.js"
import { updateClient } from "./editClients.js"

export const clientItem = (data) => {
    const rowBody = document.createElement('tr')
    const bodyId = document.createElement('td')
    const bodyFullName = document.createElement('td')
    const bodyCreated = document.createElement('td')
    const bodyUpdated = document.createElement('td')
    const bodyContacts = document.createElement('td')
    const bodyActions = document.createElement('td')
    const updateBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const bodyIdSpan = document.createElement('span')
    const bodyFullNameSpan = document.createElement('span')
    const bodyCreatedSpan = document.createElement('span')
    const bodyUpdatedSpan = document.createElement('span')

    updateBtn.textContent = 'Изменить'
    deleteBtn.textContent = 'Удалить'

    bodyId.classList.add('body-id', 'body-cell')
    bodyFullName.classList.add('body-fullname', 'body-cell')
    bodyCreated.classList.add('body-created', 'body-cell')
    bodyUpdated.classList.add('body-updated', 'body-cell')
    bodyContacts.classList.add('body-contacts', 'body-cell')
    bodyActions.classList.add('body-actions', 'body-cell')

    rowBody.dataset.id = data.id
    bodyIdSpan.textContent = data.id
    bodyFullNameSpan.textContent = `${data.surname} ${data.name} ${data.lastName}`
    bodyCreatedSpan.textContent = data.createdAt
    bodyUpdatedSpan.textContent = data.updatedAt

    bodyId.append(bodyIdSpan)
    bodyFullName.append(bodyFullNameSpan)
    bodyCreated.append(bodyCreatedSpan)
    bodyUpdated.append(bodyUpdatedSpan)
    bodyActions.append(updateBtn, deleteBtn)
    rowBody.append(bodyId, bodyFullName, bodyCreated, bodyUpdated, bodyContacts, bodyActions)

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        deleteClient(data.id)
    })

    updateBtn.addEventListener('click', (e) => {
        e.preventDefault()
        updateClient(data.id)
    })

    return {
        rowBody,
        updateBtn,
        deleteBtn,
        data
    }
}