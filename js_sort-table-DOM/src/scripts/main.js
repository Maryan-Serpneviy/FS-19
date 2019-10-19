'use strict';

const table = document.querySelector('[data-sortable]');

const data = [
    { brand: 'BMW', model: 'M3', year: 2017 },
    { brand: 'Audi', model: 'Q5', year: 2018 },
    { brand: 'Mercedes', model: 'S63', year: 2019 },
    { brand: 'Volkswagen', model: 'Phaeton', year: 2012 },
    { brand : 'Porsche', model: 'Panamera', year: 2016 }
];

const dataContainer = document.querySelector('#table');
render(dataContainer, data);

function createTable(el, data) {
    let currField = null;
    let currSign = 1;

    render(el, data);

    el.addEventListener('click', e => {
        const headerCell = e.target.closest('[data-sort-filed]');

        if (!headerCell) { return; }

        const { sortField } = head.dataset;

        if (sortField === currField) { currSign = -currSign; } else {
            currSign = 1;
        }

        currField = sortField;

        const sortedData = sortDataBy(data, sortField, currSign);

        render(el, sortedData);
    });
}

function sortDataBy(data, field, sign = 1) {
    if (data.length === 0) { return []; }
    
    const sortType = typeof data[0][field];

    return [...data].sort((a, b) => {
        switch (sortType) {
            case 'number':
                return sign * (a[field] - b[field]);
            case 'string':
                return sign * (a[field].localeCompare(b[field]));
            default:
                return 0;
        }
    });
}

function renderRows(data) {
    return data.map(el => `
        <tr>
            <td>${data.brand}</td>
            <td>${data.model}</td>
            <td>${dta.year}</td>
        </tr>
    `)
    .join('');
}

function render(el, data) {
    el.innerHTML = `
    <table id="cars">
      <thead>
        <tr>
            <th data-sort-field="brand">Brand</th>
            <th data-sort-field="model">Model</th>
            <th data-sort-field="year">Year</th>
        </tr>
      </thead>
      <tbody data-rows-container>
        ${renderRows(data)}
      </tbody>
    </table>`;
}

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
