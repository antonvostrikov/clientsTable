export const createHeader = () => {
    const header = document.createElement('header')
    const container = document.createElement('div')
    const headerTitle = document.createElement('div')
    const title = document.createElement('h1')

    header.classList.add('header')
    container.classList.add('container')
    headerTitle.classList.add('header__title-wrapper')
    title.classList.add('header__title')

    title.textContent = 'Клиенты'

    container.append(headerTitle)
    headerTitle.append(title)
    header.append(container)

    return {
        header
    }
}