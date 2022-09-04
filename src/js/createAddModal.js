import { modalForm } from "./createModalForm.js"

export const addingModal = () => {
    const overlay = document.createElement('div')
    const modal = document.createElement('div')
    const modalWrapper = document.createElement('div')
    const modalHeader = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const closeModalBtn = document.createElement('button')
    const closeModalBtnIcon = document.createElement('i')

    modal.classList.add('modal__client')
    modalWrapper.classList.add('modal__client-wrapper')
    modalHeader.classList.add('modal__header')
    modalTitle.classList.add('modal__header-title')
    overlay.classList.add('overlay')
    closeModalBtn.classList.add('modal__client-close')
    closeModalBtnIcon.classList.add('fa', 'fa-times')

    modalTitle.textContent = 'Добавить клиента'

    const form = modalForm()

    closeModalBtn.addEventListener('click', () => {
        overlay.remove()
        modal.remove()
    })

    document.body.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.remove()
            overlay.remove()
        }
    })

    closeModalBtn.append(closeModalBtnIcon)
    modalWrapper.append(modalHeader, form.form)
    modalHeader.append(modalTitle)
    modal.append(closeModalBtn, modalWrapper)

    document.body.append(overlay, modal)

    return {
        overlay, 
        modal,
        form
    }
}