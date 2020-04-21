import React from 'react';
import image from '../../assets/cacto1.jpg';

class Header extends React.Component {
    

    render() {

        return (
            <section className="header">
                <figure className='header__logo'>
                    <img className='header__img' src = {image} />
                </figure>
                
                
            </section>
        );
    }

}

export default Header;