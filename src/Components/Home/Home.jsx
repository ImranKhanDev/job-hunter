import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <Featured></Featured>
         <Footer></Footer>
        </div>
    );
};

export default Home;