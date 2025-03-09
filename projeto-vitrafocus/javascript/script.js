// Mostrar data atual na seção inicio
const date = new Date()
document.getElementById("dataDeHoje").innerHTML = `- &nbsp;  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
