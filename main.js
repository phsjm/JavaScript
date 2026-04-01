'use strict';

const e = document.getElementById('button');
e.addEventListener('click', () => {
    const li = document.createElement('li');
    const text = document.createTextNode('test');
    li.appendChild(text);
    const list = document.getElementById('list');
    list.appendChild(li);
}, false);