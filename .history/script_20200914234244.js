let GRvalidator = {
    handleSubmit: (event) => {
        event.event.preventDefault();
    }
}
let form = document.querySelector('GRvalidator')
form.addEventListener('submit', GRvalidator.handleSubmit);