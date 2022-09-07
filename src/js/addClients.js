import { sendData } from "./api.js"
import { addingModal } from "./createAddModal.js"
import { createDate } from "./utils.js"
import { toUpperSymbol } from "./utils.js"

export const addClient = () => {
    const addModal = addingModal()

    addModal.form.form.addEventListener('submit', (e) => {
        e.preventDefault()

        const clientObj = {}

        clientObj.surname = toUpperSymbol(addModal.form.inputSurname.value)
        clientObj.name = toUpperSymbol(addModal.form.inputName.value)
        clientObj.lastName = toUpperSymbol(addModal.form.inputLastName.value)
        clientObj.contact = addModal.form.inputPhone.value
        clientObj.createdAt = createDate()
        clientObj.updatedAt = ''

        sendData(clientObj, 'POST')
    })
}