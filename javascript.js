let button = document.querySelector('#buttonConstrTabuada')
button.addEventListener('click', construir)

let buttonLimpar = document.querySelector('#limparSelectContent')
buttonLimpar.addEventListener('click', limpar)



function construir() { 
    
    let inputselec = document.querySelector('#NumberTabuada')

    if (inputselec.value.length == 0) {
        window.alert('[ERRO!] Digite um número válido!')
    } else {
    let number = Number(inputselec.value)
    
    let sectionResultado = document.querySelector('#Resultado')
    let select = document.createElement('select')
    select.setAttribute('id', 'select')
    select.size = 10
    sectionResultado.appendChild(select) 

    for (let c = 1 ; c <= 10 ; c++) {
        let resultadoDaMult = number * c
        let option = document.createElement('option')
        let content = document.createTextNode(`${number} x ${c} = ${resultadoDaMult}`)
        option.appendChild(content)
        select.appendChild(option)
    }
    }
}

function limpar() {
    let section = document.querySelector('#Resultado')
        
        while (section.firstChild) {
            let select = document.querySelector('#select')    
            section.removeChild(select)
        }

}