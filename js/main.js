// strict mode
('use strict');

// inizializzazione delle variabili
const calcForm = document.getElementById('calc-form');
const passengerAge = document.getElementById('passenger-age');
const passengerKm = document.getElementById('passenger-km');

// form eventlistner
calcForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let price = 0.21 * passengerKm.value;

    // possibile sconto in base all'età
    if (passengerAge.value < 18) {
        price = price * 0.8;      //sconto del 20%
    } else if (passengerAge.value > 65) {
        price = price * 0.6;      //sconto del 40%
    }

    // prezzo arrotondato
    price = Math.round(price * 100) / 100;
    console.log(price);

    // biglietto
    document.getElementById('ticket-age').innerText = passengerAge.value;
    document.getElementById('ticket-km').innerText = passengerKm.value;
    document.getElementById('ticket-price').innerText = price + ' €';
    document.getElementById('ticket').classList.remove('d-none');
}); 