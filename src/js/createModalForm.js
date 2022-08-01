export const modalForm = () => {
    const form = document.createElement('form')
    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastName = document.createElement('input')
    const submitBtn = document.createElement('button')

    form.append(inputSurname, inputName, inputLastName, submitBtn)

    inputSurname.placeholder = 'Введите фамилию'
    inputName.placeholder = 'Введите имя'
    inputLastName.placeholder = 'Введите отчество'

    submitBtn.textContent = 'Добавить'

    return {
        form,
        inputSurname,
        inputName,
        inputLastName,
        submitBtn
    }
}