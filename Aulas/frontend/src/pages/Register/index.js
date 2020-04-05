import React, {useState} from 'react';
import './styles.css';
//Importar a imagem Heroes
//import heroesImg from '../../assets/heroes.png';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiArrowLeft} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link} from 'react-router-dom';
//Importar a API
import api from '../../services/api';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    //Como e uma funcao assincrona deve esperar a resposta
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

    try{
        //Como a solitacao vem de uma funcao assincrona a resposta deve conter um await
        const response = await api.post('ongs', data);
        alert(`Seu ID de acesso: ${response.data.id }`);
    }catch(err){
        alert('Erro no cadastro, tente novamente');
    }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='Be The Hero'></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#E02041'/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                     placeholder='Nome da Ong'
                     value={name}
                     onChange={e => setName(e.target.value)}
                    />
                    <input type='email' placeholder='E-mail'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                    />
                    <input
                     placeholder='Whatsapp'
                     value={whatsapp}
                     onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                         placeholder='Cidade'
                         value={city}
                         onChange={e => setCity(e.target.value)}
                        />
                        {/* Todo componente do React tem acesso ao Style, primeira abertura codigo JS, Segunda abertura é um obj JS */}
                        <input
                         placeholder='UF' style={{ width:80 }}
                         value={uf}
                         onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}