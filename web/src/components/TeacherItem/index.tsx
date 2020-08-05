import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    classInfo: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classInfo }) => {
    return (
        <article className="teacher-item">
        <header>
            <img
                src={classInfo.avatar}
                alt={classInfo.name}
            />
            <div>
                <strong>{classInfo.name}</strong>
                <span>{classInfo.subject}</span>
            </div>
        </header>

        <p>{classInfo.bio}</p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ {classInfo.cost}</strong>
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