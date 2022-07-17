import { clientsBody } from "./createClientsBody.js"

export const addClient = async (data) => {
    try {
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
    } catch (error) {
        console.log(error);
    }
}

export const getClients = async () => {
    try {
        const response = await fetch('http://localhost:3001/users')
                .then(response => response.json())
                
        return response        
    } catch (error) {
        console.log(error)
    }
}