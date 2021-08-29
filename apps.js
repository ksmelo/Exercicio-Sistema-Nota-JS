function calcular() {
    var nt1 = document.getElementById('nt1')
    var nt2 = document.getElementById('nt2')
    var resultado = document.getElementById('resultado')
    var n1 = Number(nt1.value)
    var n2 = Number(nt2.value)
    var media = (n1 + n2) / 2
    
    if (media >= 6.5) {
        resultado.innerHTML = `Parabéns! Você foi APROVADO, sua  média foi:  ${media}`
    } else if (media >= 6) {
        resultado.innerHTML = `Você esta de recuperação, sua média foi: ${media}`
    } else {
        resultado.innerHTML = `Você foi REPROVADO! sua média foi: ${media}`
    }
    
}
