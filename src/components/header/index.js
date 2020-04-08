import React from 'react';
import image from '../../assets/cacto1.jpg';

class Header extends React.Component {
    

    render() {

        return (
            <section className="header">
                <figure className='header__logo'>
                    <img className='header__img' src = {image} />
                    <h1 className='header__text'>Clube dos Cactos</h1>
                </figure>
                
                
            </section>
        );
    }

}

export default Header;