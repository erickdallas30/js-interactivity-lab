let count = 0;

// get DOM element
let counter = document.querySelector('#counter');

let plusBtn = document.querySelector('#plus-btn');
let minusBtn = document.querySelector('#minus-btn');
let resetBtn = document.querySelector('#reset-btn');


// create callback function
const increment = () => {
    count++;
    counter.textContent = count;
    console.log(count)
};

const decrement = () => {
    count--;
    counter.textContent = count;
    console.log(count)
};

const reset = () => {
    count = 0;
    counter.textContent = count;
    console.log(count)
};



// Bring Dom element and callback together with addEventListener
plusBtn.addEventListener('click', increment);
plusBtn.addEventListener('click', decrement);
plusBtn.addEventListener('click', reset);