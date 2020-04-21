import React from 'react';


class ImageSection extends React.Component {

    constructor(props) {
        super(props);
        this.image = props.background;
    }

    render(){
        return(
            <section className="image-section">
                <figure className='image-section__img'>
                    <img className='image-section__image' src = {this.props.background} />
                    <h2 className='image-section__text'>As pequenas plantas são fáceis de manusear, ocupam pouco espaço, ajudam a deixar os cômodos da casa mais verdes além de trazer charme e delicadeza únicos em cada espécie.</h2>
                </figure>


            </section>

        );

    }
}
export default ImageSection;
