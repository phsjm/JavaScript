'use strict';
const eventButton = document.getElementById('button');
eventButton.addEventListener('click', () => {
    const parentElement = document.getElementById('List');
    const elements = parentElement.getElementsByTagName('li');
    const removeIndex = elements.length - 1;
    console.log(elements.length)
    parentElement.removeChild(elements[removeIndex]);
}, false);