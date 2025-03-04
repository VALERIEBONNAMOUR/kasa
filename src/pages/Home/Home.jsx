import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import homeimg from '../../assets/homeimg.png';
import Allcards from "../../components/Allcards/Allcards";



const Home = () => {
    return (
        <main>
            <section>
        <div>
            <Header />
            <Banner
                className="banner-style-in-home-page"
                title="Chez vous, partout et ailleurs"
                image={homeimg}
            />
            <Allcards />
        </div>
        </section>
        <Footer />
        </main> 
        
    );
    
};

export default Home;

