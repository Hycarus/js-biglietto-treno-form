const button = document.querySelector('.btn-success');
console.log(button);
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
        <h3 class="text-uppercase">nome passeggero
        </h3>
        ${name}
        `;
        ticket.classList.remove('d-none');
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
        ${totalPrice} \u20AC
        `
    }
})