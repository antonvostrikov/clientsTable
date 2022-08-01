import { sendData } from "./api.js"
import { addingModal } from "./createAddingModal.js"
import { createDate } from "./utils.js"

export const updateClient = (data) => {
    const updateModal = addingModal()

    updateModal.form.form.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        const updateObj = {}

        updateObj.surname = updateModal.form.inputSurname.value
        updateObj.name = updateModal.form.inputName.value
        updateObj.lastName = updateModal.form.inputLastName.value
        updateObj.createdAt = data.createdAt
        console.log(data.createdAt);
        updateObj.updatedAt = createDate()

        await sendData(updateObj, 'PATCH', data)
    })
}