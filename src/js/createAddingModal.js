import { modalForm } from "./createModalForm.js"

export const addingModal = () => {
    const overlay = document.createElement('div')
    const modal = document.createElement('div')
    const closeModalBtn = document.createElement('button')

    modal.classList.add('modal__client')
    overlay.classList.add('overlay')

    closeModalBtn.textContent = 'Закрыть'

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

    modal.append(closeModalBtn, form.form)

    document.body.append(overlay, modal)

    return {
        overlay, 
        modal,
        form
    }
}