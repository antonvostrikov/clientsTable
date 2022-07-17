export const clientsBody = (data) => {
    const bodyRow = document.createElement('tr')
    const bodyId = document.createElement('td')
    const bodyFullName = document.createElement('td')
    const bodyCreated = document.createElement('td')
    const bodyUpdated = document.createElement('td')
    const bodyContacts = document.createElement('td')
    const bodyActions = document.createElement('td')

    console.log(data.id)
    //bodyFullName.textContent = `${data.surname} ${data.name} ${data.lastName}`

    bodyRow.append(bodyId, bodyFullName, bodyCreated, bodyUpdated, bodyContacts, bodyActions)

    return {
        bodyRow
    }
}