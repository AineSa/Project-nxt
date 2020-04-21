import React from 'react';
import Logo from '../logo';
import Footer from '../footer/index.js';
import fim from '../../assets/fim.jpg';

class Obrigado extends React.Component {

    render() {
        return (
            <>
                           
                <Logo></Logo>
                <div className="obrigada">
                    <figure className='obrigada__logo'>
                        <img className='obrigada__img' src={fim} />
                        <h1 className='obrigada__text'>Obrigada!</h1>
                    </figure>
                </div>
                <Footer></Footer> 
            </>
        );
    }
}

export default Obrigado;