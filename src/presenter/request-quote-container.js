

const requestButton = document.getElementById('request-button')

requestButton.addEventListener('click', (e) => {
    e.preventDefault()

    const emailInput = document.getElementById('email-input')

    emailInput.setCustomValidity('')

    if (!emailInput.checkValidity()) {
        emailInput.setCustomValidity('Please enter a valid email address.');
    } 

    if (emailInput.validity.valid) {
        alert(`\nCurrent promotions and discounts are sent to \n${emailInput.value}`);
    } else {

        emailInput.reportValidity();
    }
})