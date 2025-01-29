const form = document.querySelector('#subscribeForm');
const card_1 = document.querySelector('.card');
const card_2 = document.querySelector('.card-2');
const emailField = document.getElementById('email');
const emailAddressSpan = document.getElementById('email-address');



form.addEventListener('submit', function (e) {
    e.preventDefault(); 

   
    if (emailField.checkValidity()) {
        
        card_1.classList.add('hide');
        card_2.classList.remove('hide');

        
        emailAddressSpan.textContent = emailField.value;
    } else {
        alert('Please enter a valid email address'); 
    }
});