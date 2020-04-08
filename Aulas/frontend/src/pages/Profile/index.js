//useEffect dispara uma funcao em um determinado momento do componente
import React, {useState, useEffect} from 'react';
import './styles.css';
//Importar o logo
import logoImg from '../../assets/logo.svg';
//Importar o icone, ele esta importado como um componente
import {FiPower, FiTrash2} from 'react-icons/fi';
//Link substitui o <a> para poder a pagina agir como uma SPA(Single Page Application)
import {Link, useHistory} from 'react-router-dom';
//Importar API
import api from './../../services/api'

export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    //Acesso o localstore do nome da ONG e defino qual localStorage será utilizado
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    //Tenho que rever o que é isso pois entendi absolutamente nada do que foi feito, fora que fiquei puto com meu erro no headers, coloquei header por engano
    useEffect(() => {
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    //Função para deletar os Incidents
    //setIncidents faz a varredura do ID e remove ele 
    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            })
            setIncidents(incidents.filter(incident => incident.id !== id))
        }catch(err){
            alert('Erro ao deletar, tente novamente!')
        }
    }

    //Função para deslogar
    function handleLogout(){
        localStorage.clear();

        //History vai encaminar para a pagina principal
        history.push('/')
    }

    return(
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem vindo, {ongName}</span>
                <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#E02041'/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                //Quando usar qualquer tipo de Loop no React, coloque uma chave no primeiro elemento para ele identificar o que é cada coisa, deve ser colocado algo com valor unico tipo ID
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    {/*Foi criado uma arrow function para o handleDelete não ser executado diretamente*/}
                    <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'/>
                    </button>
                </li>
                ))}
            </ul>

        </div>
    )
}