import React from 'react';

import { Link } from 'react-router-dom';

class Produto extends React.Component {

    constructor(props) {
        super(props);
        this.image = props.image;
        this.titulo = props.titulo;
        this.valor = props.valor;
    }

    render() {
        return (
            <div className='product--list__itens'>
                <img className='product--list__img' src={this.props.image} ></img>
                <div>
                    <p className='product--list__text'>
                        {this.props.titulo}
                    </p>
                    <span className='product--list__preco'>
                        {this.props.valor}
                    </span>
                    <Link to='/cadastro' className='button'>
                        Adicionar ao carrinho
                    </Link>
                </div>
            </div>
        );
    }
}

export default Produto;