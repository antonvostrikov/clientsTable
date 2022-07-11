export const addClient = async (data) => {
    try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const result = await response.json()
    
        return result
    } catch (error) {
        console.log(error);
    }
}