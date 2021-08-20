let busca = document.querySelector('.busca__icon')
busca.addEventListener('click', function(event) {
    let form = document.querySelector('.busca__form')
    let expanded = form.getAttribute('aria-expanded')
    let teste = true
    expanded == 'true' ? verdadeiro() : falso()
})

function verdadeiro() {
    const form = document.querySelector('.busca__form')
    form.classList.add('busca__form--fechado')
    form.setAttribute('aria-expanded', 'false')
}

function falso() {
    const form = document.querySelector('.busca__form')
    form.classList.remove('busca__form--fechado')
    form.setAttribute('aria-expanded', 'true')
}
