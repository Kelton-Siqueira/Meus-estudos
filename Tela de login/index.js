const inputs = document.querySelectorAll('.input')

const handlerFocus = ({ target }) => {
    const span = target.previousElementSibling // pegou o elemento irmao do elemento input, no caso o propio span
    span.classList.add('span-activ')
}

inputs.forEach(e => e.addEventListener('focus', handlerFocus))