import { deleteClient } from "./api.js"

export const modalDelete = (data) => {
    const modal = document.createElement('div')
    const modalCancel = document.createElement('button')
    const modalCancelIcon = document.createElement('i')
    const overlay = document.createElement('div')
    const modalWrapper = document.createElement('div')
    const modalHeader = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const deleteWrapper = document.createElement('div')
    const btnDelete = document.createElement('button')
    const btnCancel = document.createElement('button') 

    modal.classList.add('modal__client')
    overlay.classList.add('overlay')
    modalWrapper.classList.add('modal__wrapper-delete')
    deleteWrapper.classList.add('modal__wrapper-buttons')
    modalHeader.classList.add('modal__header', 'modal__header-delete')
    modalTitle.classList.add('modal__header-title', 'modal__header-delete')
    modalCancel.classList.add('modal__delete-close')
    btnDelete.classList.add('delete-btn', 'btn-modal')
    btnCancel.classList.add('cancel-btn', 'btn-modal')
    modalCancelIcon.classList.add('fa', 'fa-times')

    modalTitle.textContent = 'Удалить клиента?'
    btnDelete.textContent = 'Удалить'
    btnCancel.textContent = 'Отменить'

    modalCancel.addEventListener('click', () => {
        overlay.remove()
        modal.remove()
    })

    btnCancel.addEventListener('click', () => {
        overlay.remove()
        modal.remove()
    })

    document.body.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.remove()
            overlay.remove()
        }
    })

    btnDelete.addEventListener('click', () => {
        deleteClient(data.id)
    })
    
    modalCancel.append(modalCancelIcon)
    modalHeader.append(modalTitle)
    deleteWrapper.append(btnDelete, btnCancel)
    modalWrapper.append(modalHeader, deleteWrapper)
    modal.append(modalCancel, modalWrapper)

    document.body.append(overlay, modal)

    return {
        modal,
        overlay
    }
}