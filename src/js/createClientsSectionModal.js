import { createModalForm } from "./createClientsModalForm.js"

export const createModalClients = () => {
    const overlay = document.createElement('div')
    const modal = document.createElement('div')
    const closeModal = document.createElement('button')

    overlay.classList.add('overlay', 'active')
    modal.classList.add('modal__client', 'active')
    closeModal.classList.add('modal__client-button')

    const modalForm = createModalForm()

    modal.append(closeModal, modalForm.wrapper)
    document.body.append(overlay, modal)

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active')
        overlay.classList.remove('active')

        modal.remove()
        overlay.remove()
    })

    document.body.addEventListener('click', (e) => {
        if (e.target === overlay) {
            modal.classList.remove('active')
            overlay.classList.remove('active')

            modal.remove()
            overlay.remove()
        }
    })

    return {
        overlay, 
        modal,
        closeModal
    }
}