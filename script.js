function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value < ano - 105) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value 
        let genero;
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 5){
                //Bebe
                img.setAttribute('src' , 'fotobh.png')
            } else if (idade <= 13) {
                //Criança
                img.setAttribute('src', 'fotoch.png')
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'fotojh.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'fotoah.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoih.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 5){
                img.setAttribute('src', 'fotobm.png')
            } else if (idade <= 13) {                
                img.setAttribute('src', 'fotocm.png')
            } else if (idade < 25) {    
                img.setAttribute('src', 'fotojm.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'fotoam.png')
            } else {
                img.setAttribute('src', 'fotoim.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}