function adicionarTarefa() {
    const textoTarefa = document.getElementById('text-tarefa')
    const horarioTarefa = document.getElementById('horario-tarefa') 
    const dataTarefa = document.getElementById('data-tarefa') 
    let valorTextoTarefa = textoTarefa.value
    let valorHorarioTarefa = horarioTarefa.value
    let valorDataTarefa = dataTarefa.value


    let listaUL = document.getElementById('lista')
    let listaLI = document.createElement('li')
    
    listaUL.appendChild(listaLI)
    listaLI.textContent = `${valorTextoTarefa} | Às ${valorHorarioTarefa} | Dia ${valorDataTarefa}`;

}