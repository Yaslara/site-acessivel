document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')


    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

    })
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 1;

     const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

    document.getElementById('alterna-contraste').addEventListener('click', function() {
        document.body.classList.toggle('modo-contraste'); 
    });
    
    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`


    })

    alternaContraste.addEventListener('click', function (){
        document.body.classList.toggle('alto-contarste')

    })
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });

})

