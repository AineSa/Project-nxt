import React from 'react';

import Home from '../home';
import Obrigado from '../obrigado';
import Cadastro from '../cadastro';
import Produtos from '../produtos'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
 
class App extends React.Component{

  render(){
    return(
      <>
      <div>
        <BrowserRouter>
                  
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/obrigado' component={Obrigado} />
            <Route path='/produtos' component={Produtos} />
            <Route path='/cadastro' component={Cadastro}/>
            <Route exact path='/500'>
              <center>
                <h1>500 - Erro de servidor!</h1>
                <p>Por favor, volte para a página principal.</p>
              </center>
            </Route>
            <Route path='*'>
              <center>
                <h1>404 - Página não encontrada!</h1>
                <p>Por favor, volte para a página principal.</p>
              </center>
            </Route>
          </Switch>
          
        </BrowserRouter>
      </div>

     </>
    );
  }

}

export default App;
