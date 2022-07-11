import { createClientsSection } from "./clientsSection.js"
import { createHeader } from "./header.js"

const createApplication = () => {
    const header = createHeader()
    const clients = createClientsSection()

    document.querySelector('.app').append(header.header, clients.section)
}

createApplication()