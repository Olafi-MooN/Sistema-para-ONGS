import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'

import './style-NewIncident.css';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The hero"/>

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi que possa resolver isso.</p>
                
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o inicio
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea type="assets" placeholder="Descrição"/>
                    <input placeholder="Valor em reais"/>

                    <div className="input-group">
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>

            </div>
        </div>
    );
}