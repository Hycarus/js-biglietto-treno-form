let button = document.querySelector('.btn-success');
const price = 0.21;
let finalPrice = document.getElementById('prezzo');
const resetBtn = document.querySelector('.btn-danger');


resetBtn.addEventListener('click', function(){
    const name = document.getElementById('name').value = '';
    const km = document.getElementById('km').value = '';
    const age = document.getElementById('age').value = '';
    const ticket = document.getElementById('ticket');
    ticket.classList.toggle('d-none');
})

button.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    if(name === '' || km === '' || age === ''){
        alert('Devi inserire dei valori validi!')
    } else{
        console.log(name);
        console.log(km);
        console.log(age);
        const ticket = document.getElementById('ticket');
        const ticketContainer = ticket.querySelector('.col-4');
        const box = ticket.querySelector('.box');
        console.log(ticket);
        console.log(ticketContainer);
        console.log(box);
        ticketContainer.innerHTML = `
        <h4 class="text-uppercase mb-4">nome passeggero
        </h4>
        ${name}
        `;

        button = document.getElementById('carrozza')
        ticket.classList.remove('d-none');
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        button.innerHTML = `
        <h4 class="mb-4">Carrozza
        </h4>
        ${getRndInteger(1,11)}
        `;
        console.log(button);

        button = document.getElementById('codice-cp')
        ticket.classList.remove('d-none');
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        button.innerHTML = `
        <h4 class="mb-4">Codice CP
        </h4>
        ${getRndInteger(10000,100000)}
        `;
        console.log(button);

        if(isNaN(km)){
            alert('Inserisci valori validi');
        }

        let totalPrice = (price * km);
        totalPrice = totalPrice.toFixed(2);
        if(age === 'over65'){
            totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
            finalPrice.innerHTML = totalPrice + '\u20AC';
        } else if(age === 'minorenne'){
            totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
            finalPrice.innerHTML = totalPrice + '\u20AC';
        }
        finalPrice.innerHTML = `
        <h4 class="mb-4">Costo del biglietto</h4>
        ${totalPrice} \u20AC
        `
        console.log(finalPrice);
    }
})