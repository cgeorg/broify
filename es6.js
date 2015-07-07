import broify from 'broify';

document.querySelector('#bro-input').addEventListener('input', function (e) {
    outEl.innerText = broify(e.target.value);
});

const outEl = document.querySelector('#bro-output');