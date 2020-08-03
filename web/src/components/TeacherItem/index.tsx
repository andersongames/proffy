import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img
                src="https://avatars1.githubusercontent.com/u/59886134?s=460&u=407d7ce9969c7946d43fe6cbbda7f84c92589da5&v=4"
                alt="Anderson Games"
            />
            <div>
                <strong>Anderson Games</strong>
                <span>Programação Front-End</span>
            </div>
        </header>

        <p>
        Estudando com o objetivo de ser desenvolvedor web.
        <br /><br />
        Estou no quarto semestre da faculdade de análise e desenvolvimento de sistemas e já possuo conhecimento básico e prático em HTML, CSS, JavaScript e MySQL.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;