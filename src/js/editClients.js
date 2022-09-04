import { sendData } from "./api.js"
import { editModal } from "./createEditModal.js"
import { createDate } from "./utils.js"

export const updateClient = (data) => {
    const updateModal = editModal()

    updateModal.form.inputSurname.value = data.surname
    updateModal.form.inputName.value = data.name
    updateModal.form.inputLastName.value = data.lastName
    updateModal.form.inputPhone.value = data.contact

    updateModal.form.form.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        const updateObj = {}

        updateObj.surname = updateModal.form.inputSurname.value
        updateObj.name = updateModal.form.inputName.value
        updateObj.lastName = updateModal.form.inputLastName.value
        updateObj.phone = updateModal.form.inputPhone.value
        updateObj.createdAt = data.createdAt
        console.log(data.createdAt);
        updateObj.updatedAt = createDate()

        await sendData(updateObj, 'PATCH', data.id)
    })
}