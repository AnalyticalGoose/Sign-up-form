function passwordConfirm() {
    const password = document.getElementById('password')
    const passwordConfirm = document.getElementById('confirm-password')
    const hidden = document.getElementById('password-warning')

    if (password.value != passwordConfirm.value) {
        hidden.classList.remove("hidden")
    }
    else if (password.value === passwordConfirm.value) {
        hidden.classList.add("hidden")
    }    
}

const button = document.querySelector('button')

button.addEventListener('click', function(e) {
    passwordConfirm()
    console.log('click')
})