let GRvalidator = {
    handleSubmit: (event) => {
        event.event.preventDefault()

        let send = true

        if (send) {
            form.submit()
        }
    }
}
let form = document.querySelector('GRvalidator')
form.addEventListener('submit', GRvalidator.handleSubmit);