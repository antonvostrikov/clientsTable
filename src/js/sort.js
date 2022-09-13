export const sortTable = () => {
    const table = document.querySelector('table')
    const sortColumns = (table, index, type) => {
        const tbody = table.querySelector('tbody')
        const arrTbody = Array.from(tbody.rows)

        function compare(rowA, rowB) {
            const rowATable = rowA.cells[index].innerHTML
            const rowBTable = rowB.cells[index].innerHTML

            switch(type) {
                case 'number':
                    return rowBTable - rowATable
                    break
                case 'string':
                    if (rowATable > rowBTable) return 1
                    else if (rowATable < rowATable) return -1
                    return 0
                    break     
            }
        }
        
        arrTbody.sort(compare)

        tbody.remove()

        arrTbody.forEach(row => {
            tbody.append(row)
        })

        table.append(tbody)
    }

    table.addEventListener('click', (e) => {
        const target = e.target
        const type = target.getAttribute('data-type')
        const index = target.cellIndex

        if (target.tagName != 'TH') return 

        sortColumns(table, type, index)
    })
}
