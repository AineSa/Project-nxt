import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Logo from '../logo';
import Footer from '../footer/index.js';

import {
    Redirect,
    Link
} from 'react-router-dom';

class Cadastro extends Component {

    state = {
        nome: '',
        sobrenome: '',
        cpf: '',
        email: '',
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        telefone: '',
        redirect: false
    };

    validar() {
        let novoValor = {
            ...this.state
        };

        if (this.state.nome.length < 3) {
            alert('Preencha o campo nome.');
        }

        if (this.state.sobrenome === "") {
            alert('Preencha o campo sobrenome.');
        }

        if (this.state.cpf === "") {
            alert('Preencha o campo CPF.');
        }

        if (this.state.email === "") {
            alert('Preencha o campo email.');
        }
        if (this.state.logradouro === "") {
            alert('Preencha o campo logradouro.');
        }
        if (this.state.complemento === "") {
            alert('Preencha o campo complemento.');
        }
        if (this.state.numero === "") {
            alert('Preencha o campo numero.');
        }
        if (this.state.bairro === "") {
            alert('Preencha o campo bairro.');
        }
        if (this.state.cep === "") {
            alert('Preencha o campo cep.');
        }
        if (this.state.cidade === "") {
            alert('Preencha o campo cidade.');
        }
        if (this.state.estado === "") {
            alert('Preencha o campo estado.');
        }
        if (this.state.telefone === "") {
            alert('Preencha o campo telefone.');
        }

    }

    AtualizarState(evento) {
        let novoValor = {
            ...this.state

        }
        novoValor[evento.target.name] = evento.target.value;
        this.setState(novoValor);


    }
 

    render() {
        // this.setState({
        //     ...this.state,
        //     redirect: true
        // });

        // if (this.state.cadastroValidado) {
        //     return (
        //         <Redirect to='/obrigado'/>
        //     );
        // }

        return (
            <>
                <Logo></Logo>
                <form >

                    <div className='cadastro--info'>
                        <h2>Preencha seu Cadastro</h2>
                        <legend>Dados Pessoais</legend>

                        <div className='cadastro--info__pessoais'>

                            <TextField className='item1'
                                label="Nome"
                                name='nome'
                                placeholder='nome'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.nome}

                            />
                            <TextField
                                className='item2'
                                label="Sobrenome"
                                name='sobrenome'
                                placeholder='sobrenome'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.sobrenome}
                            />
                            <TextField
                                className='item3'
                                label="CPF"
                                name='cpf'
                                placeholder='cpf'
                                type='number'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.cpf}
                            />
                            <TextField
                                className='item4'
                                label="Email"
                                name='email'
                                placeholder='email'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.email}
                            />
                            <TextField
                                className='item5'
                                label="Logradouro"
                                name='logradouro'
                                placeholder='logradouro'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.logradouro}
                            />
                            <TextField
                                className='item6'
                                label="Complemento"
                                name='complemento'
                                placeholder='complemento'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.complemento}
                            />

                            <TextField
                                className='item7'
                                label="N°"
                                name='numero'
                                placeholder='numero'
                                type='number'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.numero}
                            />
                            <TextField
                                className='item8'
                                label="Bairro"
                                name='bairro'
                                placeholder='bairro'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.bairro}
                            />
                            <TextField
                                className='item9'
                                label="CEP"
                                name='cep'
                                placeholder='cep'
                                type='number'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.cep}
                            />
                            <TextField
                                className='item10'
                                label="Cidade"
                                name='cidade'
                                placeholder='cidade'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.cidade}
                            />
                            <TextField
                                className='item11'
                                label="Estado"
                                name='estado'
                                placeholder='estado'
                                type='text'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.estado}
                            />
                            <TextField
                                className='item12'
                                label="Telefone"
                                name='telefone'
                                placeholder='telefone'
                                type='number'
                                onChange={this.AtualizarState.bind(this)}
                                value={this.state.telefone}
                            />
                        </div>
                    </div>
                </form>
                <input type="submit" onClick={this.validar.bind(this)}></input>
                {/* <a className='button' href='/obrigado'>
                        Cadastrar
						   </a> */}
                {/* <button className='button'>
                    Cadastrar
                </button> */}

                <Footer></Footer>

            </>

        );
    }
}

export default (Cadastro);