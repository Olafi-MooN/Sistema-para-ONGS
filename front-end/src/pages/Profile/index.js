import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './style-profile.css';

export default function(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem Vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo Caso</Link>
                    <button type="button" >
                        <FiPower size={18} color="#E02041"/>
                    </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120.99</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120.99</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120.99</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3"/>
                    </button>

                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120.99</p>

                    <button type="button">
                        <FiTrash size={20} color="#a8a8b3"/>
                    </button>

                </li>
            </ul>

        </div>
    )
}