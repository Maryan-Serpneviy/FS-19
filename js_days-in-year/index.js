function daysInYear(year) {
    try {
        Number.isInteger(year);
    } catch (e) {
        throw new Error('Not an integer');
    } 
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception