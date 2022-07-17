import { getClients } from "./api.js"
import { clientsBody } from "./createClientsBody.js"
import { createClientsSection } from "./createClientsSection.js"
import { createHeader } from "./createHeader.js"

const createApplication = async () => {
    const clients = await getClients()
    const header = createHeader()
    const clientsSection = createClientsSection()

    // clients.then(response => response.forEach(client => {
    //     console.log(client)
    // }))

    for (const client of clients) {
        //document.querySelector('.table').append(clientsBody(client).bodyRow)
        clientsBody(client)
    }

    document.querySelector('.app').append(header.header, clientsSection.section)
}

createApplication()