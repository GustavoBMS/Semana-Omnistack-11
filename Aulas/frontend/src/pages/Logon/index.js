import React from 'react';
//Importar o CSS
import './styles.css'
//Importar a imagem Heroes
import heroesImg from '../../assets/heroes.png';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiLogIn} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link} from 'react-router-dom';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                
                <img src={logoImg} alt="Be The Hero"></img>

                <form>
                    <h1>Faça seu logon</h1>

                    <input placeholder='Sua ID'></input>
                    <button className='button' type='submit'>Entrar</button>

                    <Link className='back-link' to='/register'>
                        <FiLogIn size={16} color='#E02041'/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}