import { getClients } from "./api.js"
import { createHeader } from "./createHeader.js"
import { createClientsSection } from "./createClientsSection.js"
import { clientsBody } from "./createClientsBody.js"

const createApplication = async () => {
    const users = await getClients()
    const header = createHeader()
    const clientsSection = createClientsSection()

    document.querySelector('.app').append(header.header, clientsSection.section)

    users.map(user => {
        document.querySelector('.table__body').append(clientsBody(user))
    })

}

createApplication()