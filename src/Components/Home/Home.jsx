import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Footer from '../Footer/Footer';
import ScrollButton from '../ScrollButton/ScrollButton';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Category></Category>
         <Featured></Featured>
         <Footer></Footer>
         <ScrollButton></ScrollButton>
        </div>
    );
};

export default Home;