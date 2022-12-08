const formulario = document.getElementById('formulario');
const variavel_A = document.getElementById('valor_A');
const variavel_B = document.getElementById('valor_B');

formulario.addEventListener('submit',function(e) {
    e.preventDefault();
    
    let mensagem = ('O valor B é maior que o valor A. Parabens');
    let mensagemerro = ('O valor A é maior que o valor B. tente denovo');

    if (variavel_A.value < variavel_B.value) {
        const containermensagemsucesso = document.querySelector(".mensagem_sucesso")
        containermensagemsucesso.innerHTML = mensagem;
        containermensagemsucesso.style.display = 'block';
    }
    else {
        const containermensagemerro = document.querySelector(".mensagem_falha")
        containermensagemerro.innerHTML = mensagemerro;
        containermensagemerro.style.display = 'block';
    }
})