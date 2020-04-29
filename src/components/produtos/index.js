import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import image1 from '../../assets/agave_pototarum_cv_variegata.jpg';
import image2 from '../../assets/Astrophytum_myriostigma_yoroi.jpg';
import image3 from '../../assets/Discocactus_cephaliaciculosus.jpg';
import image4 from '../../assets/Discocactus_latispinus.jpg';
import image5 from '../../assets/Euphorbia_Meloformis.jpg';
import image6 from '../../assets/Frailea_Mammifera.jpg';
import image7 from '../../assets/mammillaria_bombycina.jpg';
import image8 from '../../assets/stenocactus_phyllacanthus.jpg';
import image9 from '../../assets/thelocactus_setispinus.jpg';

import Produto from '../produtos/produtos.js';

import Logo from '../logo';
// import Footer from '../footer/index.js';

class Produtos extends Component {

   render() {
      return (
         <>
            <Logo />
            <div className='product--list'>

               <Produto
                  image={image1}
                  titulo='Agave pototarum cv variegata'
                  valor='R$38.00'
               />

               <Produto
                  image={image2}
                  titulo='Astrophytum myriostigma yoroi'
                  valor='R$250.00'
               />

               <Produto
                  image={image3}
                  titulo='Discocactus cephaliaciculosus'
                  valor='R$38.00'
               />

               <Produto
                  image={image4}
                  titulo='Discocactus latispinus'
                  valor='R$38.00'
               />

               <Produto
                  image={image5}
                  titulo='Euphorbia Meloformis'
                  valor='R$135.00'
               />

               <Produto
                  image={image6}
                  titulo='Frailea Mammifera'
                  valor='R$20.00'
               />

               <Produto
                  image={image7}
                  titulo='Mammillaria bombycina'
                  valor='R$39.00'
               />

               <Produto
                  image={image8}
                  titulo='Stenocactus phyllacanthus'
                  valor='R$120.00'
               />

               <Produto
                  image={image9}
                  titulo='Thelocactus setispinus'
                  valor='R$35.00'
               />
            </div>
         </>
      );
   }
}
export default Produtos;