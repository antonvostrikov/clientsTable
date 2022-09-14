import { clientItem } from "./createClientItem.js"
import { getClients } from "./api.js"
import { clientsSection } from "./createClientsSection.js"
import { createHeader } from "./createHeader.js"
import { searchClient } from "./searchClients.js"
import { sortTable } from "./sort.js"

const createApplication = async () => {
    const users = await getClients()
    const header = createHeader()
    const section = clientsSection() // таблица с постами 

    document.querySelector('.app').append(header.header, section.sectionWrapper)
    
    users.map(user => {
        document.querySelector('.table__tbody').append(clientItem(user).rowBody) // Добавляются посты 
    })

    const clientsItems = document.querySelectorAll('.client-item')

    searchClient(clientsItems, header.input)
    sortTable(section.table)
}

createApplication()