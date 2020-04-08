import React, {useState} from 'react';
import './styles.css';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiArrowLeft} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link, useHistory} from 'react-router-dom';
import api from './../../services/api'

export default function Register(){

    //Prestar atenção quando for declarar se é array ou objeto
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        //Evita que o formulario tenha um comportamento padrao, de recarregar
        e.preventDefault();

        //Prestar atenção quando for declarar se é array ou objeto
        const data = {
            title,
            description,
            value
        }

        try{
            //A função abaixo faz com que o post acesse o localStorage de login para fazer a autorização
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');

        }catch(err){
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

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

                <form onSubmit={handleNewIncident}>
                    
                    <input 
                     placeholder='Título do caso'
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                     placeholder='Descrição'
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                     placeholder='Valor em reais'
                     value={value}
                     onChange={e => setValue(e.target.value)}
                    />

                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}