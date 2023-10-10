let button = document.querySelector('.btn-success');
const price = 0.21;
let finalPrice = document.getElementById('prezzo');
const resetBtn = document.querySelector('.btn-danger');


resetBtn.addEventListener('click', function(){
    const name = document.getElementById('name').value = '';
    const lastName = document.getElementById('last-name').value = '';
    const km = document.getElementById('km').value = '';
    const age = document.getElementById('age').value = '';
    const ticket = document.getElementById('ticket');
    ticket.classList.toggle('d-none');
})

button.addEventListener('click', function(){
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('last-name').value;
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    if(name === '' || km === '' || age === ''){
        alert('Devi inserire dei valori validi!')
    } else{
        console.log(lastName);
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
        <h2>${name} ${lastName}</h2>
        `;

        button = document.getElementById('carrozza')
        ticket.classList.remove('d-none');
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        button.innerHTML = `
        <h6 class="mb-4 pt-3">Carrozza
        </h6>
        ${getRndInteger(1,11)}
        `;
        console.log(button);

        button = document.getElementById('codice-cp')
        ticket.classList.remove('d-none');
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        }
        button.innerHTML = `
        <h6 class="mb-4 pt-3">Codice CP
        </h6>
        ${getRndInteger(10000,100000)}
        `;
        console.log(button);

        if(isNaN(km)){
            alert('Inserisci valori validi');
        } 
        let totalPrice = (price * km);
        totalPrice = totalPrice.toFixed(2);
        let offerta = document.getElementById('offerta');
        const offerReduct = 'Biglietto ridotto';
        const offerStandard = 'Biglietto standard';
        if(age === 'over65'){
            totalPrice = (totalPrice - (totalPrice * 40 / 100)).toFixed(2);
            finalPrice.innerHTML = totalPrice + '\u20AC';
            offerta.innerHTML = `
            <h6 class="mb-4 pt-3">Offerta
            </h6>
            ${offerReduct}
            `;
        } else if(age === 'minorenne'){
            totalPrice = (totalPrice - (totalPrice * 20 / 100)).toFixed(2);
            finalPrice.innerHTML = totalPrice + '\u20AC';
            offerta.innerHTML = `
            <h6 class="mb-4 pt-3">Offerta
            </h6>
            ${offerReduct}
            `;
        }
        offerta.innerHTML = `
            <h6 class="mb-4 pt-3">Offerta
            </h6>
            ${offerStandard}
            `
        finalPrice.innerHTML = `
        <h6 class="mb-4 pt-3">Costo del biglietto</h6>
        ${totalPrice} \u20AC
        `
        console.log(finalPrice);
    }
})