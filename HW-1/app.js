const age_table = document.getElementById('age-table');
console.log(age_table);

const tableLabels = document.querySelectorAll('#age-table label');
console.log(tableLabels);

const firstTd = document.querySelector("table td:first-child");
console.log(firstTd);

const form = document.querySelector('form[name="search"]');
console.log(form);

const firstInputInForm = form.querySelector(' input:first-child');
console.log(firstInputInForm);

const lastInputInForm =Array.from(form.querySelectorAll('input')).at(-1);
console.log(lastInputInForm);