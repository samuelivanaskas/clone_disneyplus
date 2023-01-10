document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll(['data-tab-button']);
    const questions = document.querySelectorAll(['data-faq-question']);

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function()  {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosdoHeader();
        } else {
            exibeElementosdoHeader();
        }
    })

    //Seção de atrações e programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            EscondeAbas();
            abaAlvo.classList.add('shows__list--is-active')
            RemoveBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //Seção Faq, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreoufecharesposta);
    }
})

function ocultaElementosdoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosdoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function abreoufecharesposta(elemento) {
    const classe = 'faq__questions__items--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function RemoveBotaoAtivo() {
    const buttons = document.querySelectorAll(['data-tab-button']);

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}


function EscondeAbas() {
    const tabsContainer = document.querySelectorAll(['data-tab-id']);

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}