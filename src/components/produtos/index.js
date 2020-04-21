import React, { Component } from 'react';
import image1 from '../../assets/agave_pototarum_cv_variegata.jpg';
import image2 from '../../assets/Astrophytum_myriostigma_yoroi.jpg';
import image3 from '../../assets/Discocactus_cephaliaciculosus.jpg';
import image4 from '../../assets/Discocactus_latispinus.jpg';
import image5 from '../../assets/Euphorbia_Meloformis.jpg';
import image6 from '../../assets/Frailea_Mammifera.jpg';
import image7 from '../../assets/mammillaria_bombycina.jpg';
import image8 from '../../assets/stenocactus_phyllacanthus.jpg';
import image9 from '../../assets/thelocactus_setispinus.jpg';

import Logo from '../logo';
import Footer from '../footer/index.js';

class Produtos extends Component {

   // carregarPagina(e){
   // 	window.location.href = "/obrigado"
   // }
   render() {
      return (

         <>
            <Logo></Logo>
            <div className='product--list'>
               <div className='product--list__itens'>
                  <img className='product--list__img' src={image1} ></img>
                  <div>
                     <p className='product--list__text'>Agave pototarum cv variegata
                               <span className='product--list__preco'>R$38.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image2}></img>
                  <div>
                     <p className='product--list__text'>Astrophytum myriostigma yoroi
                        <span className='product--list__preco'>R$250.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image3}></img>
                  <div>
                     <p className='product--list__text'>Discocactus cephaliaciculosus
                        <span className='product--list__preco'>R$38.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image4} ></img>
                  <div>
                     <p className='product--list__text'>Discocactus latispinus
                        <span className='product--list__preco'>R$38.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image5}></img>
                  <div>
                     <p className='product--list__text'>Euphorbia Meloformis
                        <span className='product--list__preco'>R$135.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image6}></img>
                  <div>
                     <p className='product--list__text'>Frailea Mammifera
                        <span className='product--list__preco'>R$20.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image7} ></img>
                  <div>
                     <p className='product--list__text'>Mammillaria bombycina
                        <span className='product--list__preco'>R$39.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image8}></img>
                  <div>
                     <p className='product--list__text'>Stenocactus phyllacanthus
                        <span className='product--list__preco'>R$120.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

               <div className='product--list__itens'>
                  <img className='product--list__img' src={image9}></img>
                  <div>
                     <p className='product--list__text'>Thelocactus setispinus
                        <span className='product--list__preco'>R$35.00</span>
                     </p>
                     <a className='button' href='/cadastro'>
                        Adicionar ao carrinho
						   </a>
                  </div>
               </div>

            </div>
            <Footer></Footer> 
         </> 
      );
   }
}
export default Produtos;