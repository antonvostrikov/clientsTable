export const sortTable = (table) => {
    const tbody = table.querySelector('tbody')
    const arrTbody = Array.from(tbody.rows)
    
    let colIndex = -1

    const sortColumns = (table, type, index, isSorted) => {
        const compare = (rowA, rowB) => {
            const rowATable = rowA.cells[index].innerHTML
            const rowBTable = rowB.cells[index].innerHTML
    
            switch(type) {
                case 'number':
                    return rowBTable - rowATable
                    break
                case 'string':
                    if (rowATable > rowBTable) return 1
                    else if (rowATable < rowBTable) return -1
                    return 0
                    break     
            }
        }
        
        arrTbody.sort(compare)

        if (isSorted) arrTbody.reverse()

        tbody.remove()
    
        arrTbody.forEach(row => {
            tbody.append(row)
        })
    
        table.append(tbody)
    }

    table.addEventListener('click', (e) => { 
        const target = e.target
        const index = target.cellIndex
        const type = target.getAttribute('data-type')

        if (target.tagName != 'TH') return 
        
        sortColumns(table, type, index, (colIndex === index))
        colIndex = (colIndex === index) ? -1 : index
    })
}
