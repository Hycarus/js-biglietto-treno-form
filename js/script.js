const button = document.querySelector('.btn-success');
console.log(button);
const price = 0.21;
let finalPrice = document.getElementById
const resetBtn = document.querySelector('.btn-danger');

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
    }
})