import { clientItem } from "./createClientItem.js"
import { getClients } from "./api.js"
import { clientsSection } from "./createClientsSection.js"
import { createHeader } from "./createHeader.js"

const createApplication = async () => {
    const users = await getClients()
    const header = createHeader()
    const section = clientsSection()

    document.querySelector('.app').append(header.header, section.sectionWrapper)
    
    users.map(user => {
        document.querySelector('.table__tbody').append(clientItem(user).rowBody)
    })
}

createApplication()