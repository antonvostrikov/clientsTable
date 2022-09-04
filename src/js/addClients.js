import { sendData } from "./api.js"
import { addingModal } from "./createAddModal.js"
import { createDate } from "./utils.js"

export const addClient = () => {
    const addModal = addingModal()

    addModal.form.form.addEventListener('submit', (e) => {
        e.preventDefault()

        const clientObj = {}

        clientObj.surname = addModal.form.inputSurname.value
        clientObj.name = addModal.form.inputName.value
        clientObj.lastName = addModal.form.inputLastName.value
        clientObj.contact = addModal.form.inputPhone.value
        clientObj.createdAt = createDate()
        clientObj.updatedAt = ''

        sendData(clientObj, 'POST')
    })
}