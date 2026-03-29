'use strict';

const e = document.getElementById('button1');
e.addEventListener('click', () => {
    const elements = document.getElementsByName('result');
    console.log(elements[0].value);
});