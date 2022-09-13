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
    bodyFullName.classList.add('client-fullName')

    rowBody.dataset.id = data.id
    bodyId.textContent = data.id
    bodyFullName.textContent = `${data.surname} ${data.name} ${data.lastName}`
    bodyCreated.textContent = data.createdAt
    bodyUpdated.textContent = data.updatedAt
    bodyContacts.textContent = data.contact

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