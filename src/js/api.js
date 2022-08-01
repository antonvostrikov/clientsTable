export const sendData = async (data, method, id = null) => {
    try {
        await fetch(`http://localhost:3001/users/${method === 'POST' ? '' : id}`, {
            method: method,
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

export const deleteClient = async (id) => {
    try {
        const response = await fetch(`http://localhost:3001/users/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}