//ARRAY

let form = document.querySelector('#div-form')
let forms = document.querySelector('#lista-veiculos')

form.addEventListener('submit', (evt) =>{
    
    let objFormDados = new FormData(form)
    let modelo = objFormDados.get('modelo')
    let marca = objFormDados.get('marca')
    let placa = objFormDados.get('placa')
    let anodefabricacao = objFormDados.get('anodefabricacao')
    let valormercadoveiculo = objFormDados.get('valormercadoveiculo')
    let tipodecombustivel = objFormDados.get('tipodecombustivel')
    
})