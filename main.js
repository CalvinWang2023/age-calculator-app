let calculateButton = document.querySelector('.arrow');
let inputYear = document.querySelector('#year');
let inputMonth = document.querySelector('#month');
let inputDate = document.querySelector('#day');
let resultYear = document.querySelector('#result-year');
let resultMonth = document.querySelector('#result-month');
let resultDate = document.querySelector('#result-date');

let errorYear = document.querySelector('#error-msg-year');
let errorMonth = document.querySelector('#error-msg-month');
let errorDate = document.querySelector('#error-msg-date');

let labelYear = document.querySelector('.label-year');
let labelMonth = document.querySelector('.label-month');
let labelDate = document.querySelector('.label-day');


var daysEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

calculateButton.addEventListener('click', () => {
    let today = new Date();
    let curYear = today.getFullYear(); 
    let curMonth = today.getMonth();
    let curDate = today.getDate();

    errorYear.innerText = '';
    errorMonth.innerText = '';
    errorDate.innerText = '';
    inputYear.style.borderColor = 'rgba(23, 22, 22, 0.68)';
    labelYear.style.color = 'rgba(23, 22, 22, 0.68)';
    inputMonth.style.borderColor = 'rgba(23, 22, 22, 0.68)';
    labelMonth.style.color = 'rgba(23, 22, 22, 0.68)';
    inputDate.style.borderColor = 'rgba(23, 22, 22, 0.68)';
    labelDate.style.color = 'rgba(23, 22, 22, 0.68)';

    if (inputYear.value === '') {
        errorYear.innerText = "This field is required";
    }
    if (inputMonth.value === '') {
        errorMonth.innerText = "This field is required";
    }
    if (inputDate.value === '') {
        errorDate.innerText = "This field is required";
    }

    if (isNaN(inputYear.value) && errorYear.innerText === '') {
        errorYear.innerText = "Must be a valid year";
    }
    if (inputYear.value > curYear && errorYear.innerText === '') {
        errorYear.innerText = "Must be in the past";
    }
    if ((isNaN(inputMonth.value) || inputMonth.value > 12 || inputMonth.value <= 0) 
        && errorMonth.innerText === '') {
        errorMonth.innerText = "Must be a valid month";
    }
    if ((isNaN(inputDate.value) || inputDate.value > 31 || 
        (inputDate.value > daysEachMonth[inputMonth.value-1] &&
        !(inputDate.value == 29 && inputYear.value % 4 == 0))) && errorDate.innerText === '') {
        errorDate.innerText = "Must be a valid day";
    }

    if (errorYear.innerText !== '') { 
        inputYear.style.borderColor = 'crimson';
        labelYear.style.color = 'crimson';
    }

    if (errorMonth.innerText !== '') { 
        inputMonth.style.borderColor = 'crimson';
        labelMonth.style.color = 'crimson';
    }

    if (errorDate.innerText !== '') { 
        inputDate.style.borderColor = 'crimson';
        labelDate.style.color = 'crimson';
    }

    if (errorYear.innerText !== '' || errorMonth.innerText !== '' || errorDate.innerText !== '') {
        return;
    }

    let ageYear = curYear - inputYear.value; 
    let ageMonth = curMonth + 1 - inputMonth.value;
    let ageDate = curDate - inputDate.value;

    console.log(ageYear + ' ' + ageMonth + ' ' + ageDate);

    if (ageYear < 0) return;

    if (ageMonth < 0) {
        ageYear -= 1;
        ageMonth += 12;
    }

    if (ageDate < 0) {
        ageMonth -= 1;
        ageDate += 31;
    }

    if (ageYear < 0 || (ageYear == 0 && ageMonth < 0) 
        || (ageYear == 0 && ageMonth == 0 && ageDate < 0)) {
            errorYear.innerText = "Must be in the past";
            return;
    } else {
        resultYear.innerText = ageYear;
        resultMonth.innerText = ageMonth;
        resultDate.innerText = ageDate;
    }
});