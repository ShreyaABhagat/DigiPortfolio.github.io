const cards = document.querySelectorAll('.card');
cards.forEach(card => { card.addEventListener('click', () => {
    alert('You clicked on: ${card.querySelector('h2').innerText}');
});
});

function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
     alert('Thank you, ${name}! Your message has been sent. \n(But actually this form is not connected to a backend yet.)');
    event.target.reset();
    }