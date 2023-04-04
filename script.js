const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancanento = "01 jun 2023"

function countDown(){
    const datalanc = new Date(lancanento)
    const hoje = new Date()

    const segTotal = (datalanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal/ 60 / 60)%24;
    const finalMinutos = Math.floor(segTotal/ 60 )%60;
    const finalsegundos = Math.floor(segTotal)%60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalsegundos)

}
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000)