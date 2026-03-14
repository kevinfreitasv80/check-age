const yearInput = document.querySelector('#year');
const txt = document.querySelector('.txt');
const res = document.querySelector('#res');
const radSex = document.querySelectorAll('.radSex');
const btnCheck = document.querySelector('#btnVerificar');
const img = document.querySelector('#image');

const GENEROS = {
    1: "Homem",
    2: "Mulher"
}

function handleCheckAge() {
    const date = new Date();
    const year_actual = date.getFullYear();
    const data_year = yearInput.value;

    if (!data_year) return false;
    if (data_year > year_actual) return false;
    if (data_year < (year_actual - 105)) return false;

    //window.alert('[ERRO] Verifique os dados e tente novamente!')
    const idade = year_actual - data_year;

    let genero;

    if (radSex[0].checked) {
        genero = GENEROS[1];
        if (idade >= 0 && idade < 5) img.setAttribute('src' , './imgs/fotobh.png');
        else if (idade <= 13) img.setAttribute('src', './imgs/fotoch.png');
        else if (idade < 25) img.setAttribute('src', './imgs/fotojh.png');
        else if (idade < 55) img.setAttribute('src', './imgs/fotoah.png');
        else img.setAttribute('src', './imgs/fotoih.png');
    } else {
        genero = GENEROS[2];
        if (idade >=0 && idade < 5) img.setAttribute('src', './imgs/fotobm.png')
        else if (idade <= 13) img.setAttribute('src', './imgs/fotocm.png')
        else if (idade < 25) img.setAttribute('src', './imgs/fotojm.png')
        else if (idade < 55) img.setAttribute('src', './imgs/fotoam.png')
        else img.setAttribute('src', 'fotoim.png')
    }

    txt.textContent = `Você é um(a) ${genero} com ${idade} anos de idade`;
    if ("hidden" === img.classList[0]) {
        img.classList.remove("hidden");
        img.classList.add("block");
    }
}

btnCheck.addEventListener("click", handleCheckAge);