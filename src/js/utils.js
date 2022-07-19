export const createDate = () => {
    const date = new Date()

    const locale = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }

    const resultDate = date.toLocaleString('ru', locale)

    return resultDate
}

export const createTime = () => {
    const time = new Date()

    const locale = {
        hour: 'numeric',
        minute: 'numeric'
    }

    const resultTime = time.toLocaleString('ru', locale)

    return resultTime
}