var agora = new Date()
var hora = agora.getHours()
var cor = document.getElementById('fundo')
paisagem = document.getElementById('imagem')   
    horario.innerHTML = `<p> Agora são ${hora} horas <br> Bom Dia!</p>`
 if (hora >= 12 && hora <= 18) {
    horario.innerHTML = `<p> Agora são ${hora} horas <br> Boa Tarde!</p>`
    cor.style.backgroundColor = 'rgba(172, 82, 23, 0.808)'
    paisagem.innerHTML = `<img class="foto" src="/Curso Js/Imagens/sol.jpg">`
} else if (hora > 18 && hora <= 23) {
    horario.innerHTML = `<p> Agora são ${hora} horas <br> Boa Noite!</p>`
    cor.style.backgroundColor = 'rgb(48, 47, 47)'
    paisagem.innerHTML = `<img class="foto" src="/Curso Js/Imagens/noitee.jpg">`
} else if (hora == 24 || hora <= 04) {
    horario.innerHTML = `<p> Agora são ${hora} horas <br> Boa Madrugada!</p>`
    cor.style.backgroundColor = 'black'
    paisagem.innerHTML = `<img class="foto" src="/Curso Js/Imagens/sonoo.jpg">`
} 
    
