
//para la pantalla
function dis(val)
{
document.getElementById("calcu").value+=val
 }
//evaluacion
function solve()
{
let x = document.getElementById("calcu").value
let y = eval(x)
document.getElementById("calcu").value = y
}
//borra pantalla
function clr()
{
document.getElementById("calcu").value = ""
}
