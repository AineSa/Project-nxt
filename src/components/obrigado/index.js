import React, { Component } from 'react';
import Logo from '../logo';
import Footer from '../footer/index.js';
import fim from '../../assets/cacto8.jpg';




class Obrigado extends React.Component {


    render() {

        return (
            <>

                <Logo></Logo>
                <div className="obrigada" >

                    <figure className='obrigada__logo'>
                        <img className='obrigada__img' src={fim} />
                    </figure>
                    <span className='obrigada__text__span'>
                        Agradecemos o seu interesse nos nossos cactos.
                        <br />Em breve entraremos em contato com seu orçamento.
                        <a className='button__obrigado' href='/'>
                            Voltar para a home
					    </a>
                    </span>


                </div>

                <Footer></Footer>

            </>
        );
    }
}

export default Obrigado;