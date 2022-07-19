import { addClient } from "./api.js"
import { createDate, createTime } from "./utils.js"

export const createModalForm = () => {
    const wrapper = document.createElement('div')
    const form = document.createElement('form')
    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastName = document.createElement('input')
    const addClientBtn = document.createElement('button')

    inputSurname.placeholder = 'Введите фамилию'
    inputName.placeholder = 'Введите имя'
    inputLastName.placeholder = 'Введите отчество'
    addClientBtn.textContent = 'Добавить'

    wrapper.append(form)
    form.append(inputSurname, inputName, inputLastName, addClientBtn)

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        let objectClient = {}

        objectClient.surname = inputSurname.value
        objectClient.name = inputName.value
        objectClient.lastName = inputLastName.value
        objectClient.created = `${createDate()} ${createTime()}`
        
        if (!inputSurname.value && !inputName.value && !inputLastName.value) return

        await addClient(objectClient)
    })

    return {
        wrapper
    }
}

