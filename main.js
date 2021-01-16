const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const changeBtn = document.querySelector('.change');
const resetBtn = document.querySelector('.reset');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celcius;
const numbers = /[0-9]/;
const minValue = 1;



const swap = () => {
    if (one.innerHTML === '°C') {
        one.innerHTML = '°F'
        two.innerHTML = '°C'
        result.innerText = '';


    } else {
        one.innerHTML = '°C'
        two.innerHTML = '°F'

    }
};

const celTofar = () => {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
    converter.value = '';

}

const farTocel = () => {
    celcius = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value}°F is ${celcius.toFixed(1)}°C `;
    converter.value = '';


}

const conversion = () => {
    if (converter.value.length >= minValue && converter.value.match(numbers)) {
        if (one.innerHTML === '°C') {
            celTofar();
        } else {
            farTocel();
        }
    } else {
        result.innerText = 'Enter some number!!';
        result.style.color = 'black';
    }
}


const reset = () => {

    result.innerText = '';
    converter.value = '';
}

changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)