import React from 'react';
import './styles.css';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiArrowLeft} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link} from 'react-router-dom';

export default function Register(){
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be The Hero'></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input placeholder='Título do caso'/>
                    <textarea placeholder='Descrição'/>
                    <input placeholder='Valor em reais'/>

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}