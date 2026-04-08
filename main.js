'use strict';
const eventButton = document.getElementById('button');
eventButton.addEventListener('click', () => {
    const textbox = document.getElementById('textbox');
    const li = document.createElement('li');
    const text = textbox.value;
    li.textContent = text;
    document.getElementById('list').appendChild(li);
    textbox.value = ''; // Clear the textbox after adding an item
}, false);