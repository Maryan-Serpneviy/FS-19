function daysInMonth(month, year) {
    try {
        Number.isInteger(month);
        Number.isInteger(year);
        month < 11;
    } catch (e) {
        throw new Error('Not an integer');
    } 
    return new Date(year, month, 0).getDate();
}

daysInMonth(5, 2019); // 31
daysInMonth(5, '2019'); // exception
daysInMonth(2, 2020); // 29
daysInMonth(2.2, 2020); // exception
daysInMonth(2, 2100); // 28
daysInMonth(13, 2100); // exception