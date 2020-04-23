import React, { Component } from 'react';
import Logo from '../logo';
import Footer from '../footer/index.js';
import fim from '../../assets/cacto8.jpg';

import {
    Redirect
} from 'react-router-dom';

class Obrigado extends React.Component {
    state = {
        redirect: false
    };

      componentDidMount() {
        setInterval(() => {
            this.setState({
                redirect: true
            });
        }, 500000);
    }

    
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            );
        }
        return (
            <>

                <Logo></Logo>
                <div className="obrigada" >
                    
                    <figure className='obrigada__logo'>
                        <img className='obrigada__img' src={fim} />
                    </figure>
                    <span className='obrigada__text__span'>
                        Agradecemos o seu interesse nos nossos cactos. 
                        <br/>Em breve entraremos em contato com seu orçamento.
                    </span>
                    {/* <h1 className='obrigada__text'>Obrigada!</h1> */}
                </div>
                
                <Footer></Footer>

            </>
        );
    }
}

export default Obrigado;