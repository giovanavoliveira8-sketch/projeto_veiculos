//CRIANDO A FUNÇÃO PARA CALCULAR OS CUSTOS OBRIGATÓRIOS E O IPVA
const calcSeguro = (valorVeiculo) => {
      let valorSeguro = valormercadoveiculo * 0.10
}

const calcIPVA = (tipoCombustivel, valormercadoveiculo, anoFabricacao) => {
    let valorIPVA = ''
    
    if (2026 - anoFabricacao == 20){
        valorIPVA = 'ISENTO.'
    }else if(tipoCombustivel == 'gasolina'){
        valorIPVA = valormercadoveiculo * 0.20 `R$ ${parseFloat (valormercadoveiculo * 0.20).toFixed(2).replace('.',',')}`
    }else if(tipoCombustivel == 'etanol'){
        valorIPVA = valormercadoveiculo * 0.15 `R$ ${parseFloat (valormercadoveiculo * 0.15).toFixed(2).replace('.',',')}`
    }else if(tipoCombustivel == 'bicombustiveis'){
        valorIPVA = valormercadoveiculo * 0.10  `R$ ${parseFloat (valormercadoveiculo * 0.10).toFixed(2).replace('.',',')}`
    }else if(tipoCombustivel == 'hibridos'){
        valorIPVA = valormercadoveiculo * 0.8 `R$ ${parseFloat (valormercadoveiculo * 0.8).toFixed(2).replace('.',',')}`
    }else if(tipoCombustivel == 'eletricos'){
        valorIPVA = valormercadoveiculo * 0.2 `R$ ${parseFloat (valormercadoveiculo * 0.2).toFixed(2).replace('.',',')}`
    }

    return valorIPVA
}
