export const searchClient = (clients, input) => {
    input.addEventListener('input', () => {
        const inputValue = input.value.trim().toLowerCase()
    
        clients.forEach(client => {
            const fullNameClient = client.querySelector('.client-fullName')

            if (!fullNameClient.textContent.toLowerCase().includes(inputValue)) {
                client.classList.add('client-hide')
            } else {
                client.classList.remove('client-hide')
            }
        })
})
}