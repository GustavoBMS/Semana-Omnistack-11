import React from 'react';
import './styles.css';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiPower, FiTrash2} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link} from 'react-router-dom';

export default function Profile(){
    return(
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem vinda, APAD</span>
                <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button type='button'>
                    <FiPower size={18} color='#E02041'/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO 1:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO 2:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                <li>
                    <strong>CASO 3:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                    
                </li>
                <li>
                    <strong>CASO 4:</strong>
                    <p>Caso Teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição Teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
            </ul>

        </div>
    )
}