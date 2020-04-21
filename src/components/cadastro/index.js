import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import Logo from '../logo';
import Footer from '../footer/index.js';


class Cadastro extends Component {

    render() {

        return (
            <>
                <Logo></Logo>

                    <div className='info__pessoais'>
                        <h2>Preencha seu Cadastro</h2>
                        <h3>Dados Pessoais</h3>
                        <TextField label="Nome" />
                        <TextField label="Sobrenome" />
                        <TextField label="CPF" />
                        <TextField label="Email" />
                        <TextField label="Logradouro" />
                        <TextField label="Complemento" />
                        <TextField label="Numero" />
                        <TextField label="Bairro" />
                        <TextField label="Cep" />
                        <TextField label="Cidade" />
                        <TextField label="Estado" />
                        <TextField label="País" />
                    </div>
                    <div className='info__pagamento'>
                        <h3>Dados de Pagamento</h3>
                        <TextField label="Numero do cartão"/>
                        <TextField label="Nome impresso no cartão"/>
                        <TextField label="Validade"/>
                        <TextField label="Código de segurança"/>
                    </div>

                    <Footer></Footer>
            </>

        );
    }
}

export default (Cadastro);