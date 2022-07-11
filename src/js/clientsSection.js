import { createModalClients } from "./clientsSectionModal.js"

export const createClientsSection = () => {
    const section = document.createElement('section')
    const container = document.createElement('div')
    const addClientWrapper = document.createElement('div')
    const clientsWrapper = document.createElement('div')
    const addClientButton = document.createElement('button')

    addClientButton.textContent = 'Добавить'

    section.classList.add('section__clients')
    container.classList.add('container')
    addClientWrapper.classList.add('add__client')
    addClientButton.classList.add('add__client-button')
    clientsWrapper.classList.add('clients__wrapper')

    addClientWrapper.append(addClientButton)
    container.append(addClientWrapper, clientsWrapper)
    section.append(container)

    addClientButton.addEventListener('click', (e) => {
        const modal = createModalClients()
    })

    return {
        section
    }
}