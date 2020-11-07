/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let trs = table.getElementsByTagName('tr');
    let count = 0;
    for (let tr of trs) {
        let tds = tr.getElementsByTagName('td');
        tds[count].style.backgroundColor = 'red';
        count ++;
    }
}
