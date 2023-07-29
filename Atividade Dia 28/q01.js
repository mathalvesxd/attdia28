const frm = document.querySelector("form") //pega referencia do form e acessa qualquer elemento dele
const resp  = document.querySelector("h3") 


//monitora o evento associado ao clicar
//pri escuta a submissao
//seg retorna o calculo
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo/1000) * consumo
    resp.innerText = `Valor à pagar R$ ${valor.toFixed(2)}`//embuti o valor no h3
    //agora vamos tirar o reload do navegador p poder visualizar o resultado
    e.preventDefault()

} )