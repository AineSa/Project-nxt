import React from 'react';
import image from '../../assets/cacto.jpg';
import image1 from '../../assets/cacto2.jpg';
import image2 from '../../assets/cacto3.jpg';



let i = 0;
let imgarray = [];
let time = 1000;

class ImageSection extends React.Component{

	constructor (props){
		super(props);
		this.carregaImagem=this.carregaImagem.bind(this);
	}

	carregaImagem(){

		imgarray.push(image);
		imgarray.push(image1);
		imgarray.push(image2);
	
		let changeImg = () =>{
			document.slide.src = imgarray[i];
	
			if(i < imgarray.length - 1){
				i++;
			} else {
				i = 0;
			}
	
			setTimeout(changeImg, 1500);
		}
	
		window.onload = changeImg;
		

	}
	render(){
		this.carregaImagem()
		return(
			<section className='slide'>
				<img name="slide"  className= 'slide__image'/>	
					<h2 className='slide__text'>As pequenas plantas são fáceis de manusear, ocupam pouco espaço, ajudam a deixar os cômodos da casa mais verdes além de trazer charme e delicadeza únicos em cada espécie.</h2>
			</section>
		);
	}
}

export default ImageSection;



