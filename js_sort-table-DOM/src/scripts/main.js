'use strict';

const table = document.querySelector('[data-sortable]');

function sortTable(table) {
    const head = table.querySelector('[data-header]');
    const rowsContainer = table.querySelector('[data-rows-container]');
    let currCol = null;
    let currSign = 1;

    head.addEventListener('click', e => {
        const colTitle = e.target.closest('[data-sort-type]');
        if (!colTitle) { return; }
        const rows = [...rowsContainer.children];
        const col = colTitle.dataset.col;
        const sortType = colTitle.dataset.sortType;
        // const { col, sortType } = col.dataset;

        currSign = (col !== currCol) ? 1 : -currSign;
        currCol = col;

        const getVal = row => row.children[currCol].textContent;

        const sortFuncs = {
            number: (a, b) => currSign * (getVal(a) - getVal(b)),
            string: (a, b) => currSign * (getVal(a).localeCompare(getVal(b)))
        };
        const sortFunc = sortFuncs[sortType] || (() => 0);

        rows.sort(sortFunc);
        
        for (const row of rows) {
            rowsContainer.append(row);
        }
    });
}

sortTable(table)
