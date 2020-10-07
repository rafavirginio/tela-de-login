let GRvalidator = {
    handleSubmit: (event) => {
        event.event.preventDefault()

        let send = true

        let inputs = form.querySelectorAll('input')

        if (send) {
            form.submit()
        }
    }
}
let form = document.querySelector('GRvalidator')
form.addEventListener('submit', GRvalidator.handleSubmit);