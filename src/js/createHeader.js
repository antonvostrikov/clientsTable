export const createHeader = () => {
    const header = document.createElement('header')
    const container = document.createElement('div')
    const headerTitleWrapper = document.createElement('div')
    const headerFormWrapper = document.createElement('div')
    const title = document.createElement('h1')
    const form = document.createElement('form')
    const input = document.createElement('input')

    header.classList.add('header')
    container.classList.add('container')
    headerTitleWrapper.classList.add('header__title-wrapper')
    headerFormWrapper.classList.add('header__form-wrapper')
    title.classList.add('header__title')

    title.textContent = 'Клиенты'

    input.placeholder = 'Поиск клиента'

    form.append(input)
    container.append(headerTitleWrapper, headerFormWrapper)
    headerFormWrapper.append(form)
    headerTitleWrapper.append(title)
    header.append(container)

    return {
        header
    }
}