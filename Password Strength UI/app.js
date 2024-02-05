const background = document.getElementById('background')
const passwordLabel = document.getElementById('PasswordLabel')
const passwordInput = document.getElementById('Password')

passwordInput.addEventListener('input', (e) => {
    const length = e.target.value.length

    const bgBlur = 20 - length*2
    background.style.filter = `blur(${bgBlur}px)`

    if(length >= 10){
        passwordLabel.innerText = 'Strong Password'
    }
})