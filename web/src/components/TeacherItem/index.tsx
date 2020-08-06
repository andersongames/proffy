import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

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
    function createNewConnection() {
        api.post('connections', {
            user_id: classInfo.id,
        });
    }

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
            <a
                target="blank"
                href={`https://wa.me/${classInfo.whatsapp}`}
                onClick={createNewConnection}
            >
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </a>
        </footer>
    </article>
    );
}

export default TeacherItem;