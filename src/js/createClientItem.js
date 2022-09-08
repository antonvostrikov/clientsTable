import { modalDelete } from "./createModalDelete.js"
import { updateClient } from "./editClients.js"

export const clientItem = (data) => {
    const rowBody = document.createElement('tr')
    const bodyId = document.createElement('td')
    const bodyFullName = document.createElement('td')
    const bodyCreated = document.createElement('td')
    const bodyUpdated = document.createElement('td')
    const bodyContacts = document.createElement('td')
    const bodyActions = document.createElement('td')
    const bodyIdSpan = document.createElement('span')
    const bodyFullNameSpan = document.createElement('span')
    const bodyCreatedSpan = document.createElement('span')
    const bodyUpdatedSpan = document.createElement('span')
    const bodyContactsSpan = document.createElement('span')
    const wrapperButtons = document.createElement('div')
    const updateBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const updateBtnIcon = document.createElement('i')
    const deleteBtnIcon = document.createElement('i')
    
    rowBody.classList.add('client-item')
    bodyId.classList.add('body-id', 'body-cell')
    bodyFullName.classList.add('body-fullname', 'body-cell')
    bodyCreated.classList.add('body-created', 'body-cell')
    bodyUpdated.classList.add('body-updated', 'body-cell')
    bodyContacts.classList.add('body-contacts', 'body-cell')
    bodyActions.classList.add('body-actions', 'body-cell')
    wrapperButtons.classList.add('wrapper__buttons')
    updateBtnIcon.classList.add('gg-pen')
    deleteBtnIcon.classList.add('gg-trash')
    updateBtn.classList.add('button__update')
    deleteBtn.classList.add('button__delete')
    bodyFullNameSpan.classList.add('client-fullName')

    rowBody.dataset.id = data.id
    bodyIdSpan.textContent = data.id
    bodyFullNameSpan.textContent = `${data.surname} ${data.name} ${data.lastName}`
    bodyCreatedSpan.textContent = data.createdAt
    bodyUpdatedSpan.textContent = data.updatedAt
    bodyContactsSpan.textContent = data.contact

    bodyId.append(bodyIdSpan)
    bodyFullName.append(bodyFullNameSpan)
    bodyCreated.append(bodyCreatedSpan)
    bodyUpdated.append(bodyUpdatedSpan)
    bodyContacts.append(bodyContactsSpan)
    updateBtn.append(updateBtnIcon)
    deleteBtn.append(deleteBtnIcon)
    wrapperButtons.append(updateBtn, deleteBtn)
    bodyActions.append(wrapperButtons)

    rowBody.append(bodyId, bodyFullName, bodyCreated, bodyUpdated, bodyContacts, bodyActions)

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault()
        modalDelete(data)
    })

    updateBtn.addEventListener('click', (e) => {
        e.preventDefault()
        updateClient(data)
    })

    return {
        rowBody,
        updateBtn,
        deleteBtn,
        data
    }
}