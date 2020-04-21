import React from 'react';
import image from '../../assets/cacto.jpg';
import image1 from '../../assets/cacto2.jpg';
import image2 from '../../assets/cacto3.jpg';

let i = 0;
let imgarray = [];

class SlideSection extends React.Component{


	state = {
		slider: null
	};
	constructor (props){
		super(props);
		this.carregaImagem=this.carregaImagem.bind(this);
	}

	carregaImagem(){

		imgarray.push(image);
		imgarray.push(image1);
		imgarray.push(image2);
	
		let changeImg = () =>{
			//document.slide.src = imgarray[i];

			this.setState({
				slider: imgarray[i]
			});
	
			if(i < imgarray.length - 1){
				i++;
			} else {
				i = 0;
			}
	
			setTimeout(changeImg, 1500);
		}
	
		window.onload = changeImg;
		

	}
	componentWillMount() {
		this.carregaImagem();
	}

	render(){
		return(
			<section className='slide'>
				<img src={this.state.slider}  className= 'slide__image'/>	
				<ul className='slide__text'>
                        <li>Escolha seu cacto, adicione no carrinho e no final preencha os seus dados , em breve responderemos com seu orçamento.</li>
                        <li>As plantas vão desenvasadas e são enviadas por correio, dentro de cada frete minimo cabem ate 15 plantas.</li>
						<a className='button' href='/produtos'>
                        	Veja nossos produtos aqui
						</a>
                </ul>						
			</section>


		);
	}
}

export default SlideSection;


