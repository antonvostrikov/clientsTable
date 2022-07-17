import { clientsItems } from "./createClientsHead.js"
import { createModalClients } from "./createClientsSectionModal.js"

export const createClientsSection = () => {
    const section = document.createElement('section')
    const container = document.createElement('div')
    const addClientWrapper = document.createElement('div')
    const addClientButton = document.createElement('button')

    addClientButton.textContent = 'Добавить'

    section.classList.add('section__clients')
    container.classList.add('container')
    addClientWrapper.classList.add('add__client')
    addClientButton.classList.add('add__client-button')

    addClientWrapper.append(addClientButton)
    container.append(addClientWrapper)
    section.append(container)

    addClientButton.addEventListener('click', (e) => {
        const modal = createModalClients()
    })

    container.append(clientsItems().wrapper)

    return {
        section
    }
}