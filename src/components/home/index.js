import React, { Component } from 'react';

import Header from '../header/index.js';
import SlideSection from '../slide-section/index.js';
import ImageSection from '../image-section/index.js';

import img from '../../assets/cacto10.jpg';

class Home extends Component {

    render() {
        return (
            <>
                <Header />
                <SlideSection/>
                <ImageSection 
                    background={img}
                    />
                {/* <Footer></Footer> */}
            </>
        );
    }
}

export default Home;