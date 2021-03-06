import React from 'react';
import logo from '../../assets/cacto1.jpg';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <header className='logo'>
                <Link to='/'>
                    <img className='logo__img' src={logo}></img>
                </Link>

                <div>
                    <svg className='logo__cart' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 41 41" fill="currentColors">
                        <path d="M-1143.576-34.636a3.636,3.636,0,0,1,3.636-3.636,3.636,3.636,0,0,1,3.636,3.636A3.636,3.636,0,0,1-1139.94-31,3.636,3.636,0,0,1-1143.576-34.636Zm-21.818,0a3.636,3.636,0,0,1,3.636-3.636,3.636,3.636,0,0,1,3.636,3.636A3.636,3.636,0,0,1-1161.758-31,3.636,3.636,0,0,1-1165.394-34.636Zm2.135-5.455a3.614,3.614,0,0,1-3.481-2.577,3.79,3.79,0,0,1,.83-3.555l2.121-2.475-5.68-18.666h-2.29a.909.909,0,0,1-.909-.909v-1.818a.909.909,0,0,1,.909-.909h3.636a1.818,1.818,0,0,1,1.739,1.289l.732,2.407a.891.891,0,0,1,.256-.059h29.8a2.928,2.928,0,0,1,2.928,2.928v.257a2.953,2.953,0,0,1-.278,1.246l-6.344,13.48a3.638,3.638,0,0,1-3.291,2.089H-1160.2a1.8,1.8,0,0,1-.181.274l-2.882,3.362h26.047a.909.909,0,0,1,.909.909V-41a.909.909,0,0,1-.909.909Z" transform="translate(1172.667 71)" stroke="rgba(0,0,0,0)" />
                    </svg>
                </div>
            </header>

        );
    }
} export default Logo;