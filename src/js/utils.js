export const createDate = () => {
    const date = new Date()

    const locale = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }

    const resultDate = date.toLocaleString('ru', locale)

    return resultDate
}

export const toUpperSymbol = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}