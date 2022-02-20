let button = document.querySelector('input[name="btn-dark"]')
let html = document.querySelector('html')
let box = document.querySelector('.box')

button.addEventListener('click', function() {
    if(button.checked) {
        html.classList.add('dark-mode')
        box.classList.add('dark-mode-box')
    } else {
        html.classList.remove('dark-mode')
        box.classList.remove('dark-mode-box')
    }
})