import React, {useState} from 'react';
//Importar o CSS
import './styles.css'
//Importar a imagem Heroes
import heroesImg from '../../assets/heroes.png';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiLogIn} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link, useHistory} from 'react-router-dom';
//importação da api
import api from './../../services/api'

export default function Logon(){

    //Variavel/Estado dos formularios
    const[id, setId] = useState('');

    const history = useHistory();

    //Funcao que valida se a ong existe
    async function handleLogin(e){
        e.preventDefault();
        
        try{
            //'session' é o caminho da rota do post e id a resposta da requisição
            const response = await api.post('sessions', {id});
            //Seto os valores que desejo, o id da ONG e o nome da ONG
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no Login, tente novamente.');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                
                <img src={logoImg} alt="Be The Hero"></img>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                     placeholder='Sua ID' 
                     value={id} 
                     onChange={e => setId(e.target.value)}
                    />
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