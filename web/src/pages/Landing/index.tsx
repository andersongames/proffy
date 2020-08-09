import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import themeIconLight from '../../assets/images/icons/half-light.svg';
import themeIconDark from '../../assets/images/icons/half-dark.svg';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0);
    const [isThemeDark, setsThemeDark] = useState(false);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    function changeTheme() {
        if (!isThemeDark) {
            setsThemeDark(true);
        } else {
            setsThemeDark(false);
        }
    }

    return (
        <div id="page-landing" className= {isThemeDark ? "dark" : "light"}>
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className={isThemeDark ? "study-dark" : "study-light"}>
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aulas" />
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>

                <div className={isThemeDark ? "theme-button button-dark" : "theme-button button-light"} onClick={changeTheme}>
                    <p>Tema</p>
                    <img src={isThemeDark ? themeIconDark : themeIconLight} />
                </div>
            </div>
        </div>
    );
}

export default Landing;
