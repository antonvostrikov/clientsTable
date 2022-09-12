export const sortTable = (table, index, type) => {
    const tbody = table.querySelector('tbody')
    const arrTbody = Array.from(tbody.rows)

    const compare = function(rowA, rowB) {
        const rowATable = rowA.cells[index].lastElementChild.innerHTML
        const rowBTable = rowB.cells[index].lastElementChild.innerHTML

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
    console.log(arrTbody);
    tbody.remove()
    arrTbody.forEach(row => {
        tbody.append(row)
    })
    table.append(tbody)
}