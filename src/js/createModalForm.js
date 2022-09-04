import { inputHander } from "./validateForm.js"

export const modalForm = () => {
    const form = document.createElement('form')
    const labelSurname = document.createElement('label')
    const labelName = document.createElement('label')
    const labelLastName = document.createElement('label')
    const labelPhone = document.createElement('label')
    const wrapperSurname = document.createElement('div')
    const wrapperName = document.createElement('div')
    const wrapperLastName = document.createElement('div')
    const wrapperPhone = document.createElement('div')
    const wrapperButton = document.createElement('div')
    const inputSurname = document.createElement('input')
    const inputName = document.createElement('input')
    const inputLastName = document.createElement('input')
    const inputPhone = document.createElement('input')
    const submitBtn = document.createElement('button')

    inputPhone.type = 'tel'

    form.classList.add('client__form')
    inputSurname.classList.add('input-surname__form', 'input-form')
    inputSurname.id = 'surname'
    inputName.classList.add('input-name__form', 'input-form')
    inputName.id = 'name'
    inputLastName.classList.add('input-lastname__form', 'input-form')
    inputLastName.id = 'lastName'
    inputPhone.classList.add('input-phone', 'input-form')
    inputPhone.id = 'phone'
    labelSurname.htmlFor = 'surname'
    labelName.htmlFor = 'name'
    labelLastName.htmlFor = 'lastName'
    labelPhone.htmlFor = 'phone'
    submitBtn.classList.add('submit-btn')
    wrapperSurname.classList.add('input-box')
    wrapperName.classList.add('input-box')
    wrapperLastName.classList.add('input-box')
    wrapperPhone.classList.add('input-box')
    wrapperButton.classList.add('wrapper-button')
    labelSurname.classList.add('input-label')
    labelName.classList.add('input-label')
    labelLastName.classList.add('input-label')
    labelPhone.classList.add('input-label')

    inputSurname.setAttribute('data-reg', '^[а-яА-Я0-9]+$')
    inputName.setAttribute('data-reg', '^[а-яА-Я0-9]+$')
    inputLastName.setAttribute('data-reg', '^[а-яА-Я0-9]+$')
    inputPhone.setAttribute('data-reg', '^((\[+]7|7|8)+([0-9]){10})$')

    wrapperSurname.append(inputSurname, labelSurname)
    wrapperName.append(inputName, labelName)
    wrapperLastName.append(inputLastName, labelLastName)
    wrapperPhone.append(inputPhone, labelPhone)
    wrapperButton.append(submitBtn)
    form.append(wrapperSurname, wrapperName, wrapperLastName, wrapperPhone, wrapperButton)

    labelSurname.textContent = 'Только русские буквы'
    labelName.textContent = 'Только русские буквы'
    labelLastName.textContent = 'Только русские буквы'
    labelPhone.textContent = 'В формате: +79000000000, 79000000000, 89000000000'
    inputSurname.placeholder = 'Введите фамилию'
    inputName.placeholder = 'Введите имя'
    inputLastName.placeholder = 'Введите отчество'
    inputPhone.placeholder = 'Введите телефон'

    submitBtn.textContent = 'Отправить'

    form.addEventListener('input', inputHander)

    return {
        form,
        inputSurname,
        inputName,
        inputLastName,
        inputPhone,
        submitBtn
    }
}