import React from 'react';
//Importar a lib de rotas, as rotas sao componentes
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//Importação dos componentes do front end para registrar as rotas
import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Routes(){
    return(//BrowserRouter precisa ficar em volta de tudo
        <BrowserRouter>
            <Switch>
                {/*O react reconhece apenas o parametro inicial, para ficar identico tem que colocar exact */}
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    )
}