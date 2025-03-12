import React from "react";
import Banner from "../../components/Banner/Banner";
import homeimg from '../../assets/homeimg.png';
import Allcards from "../../components/Allcards/Allcards";


const Home = () => {
    return (
            <section>
        <div>
            <Banner
                className="banner-style-in-home-page"
                title="Chez vous, partout et ailleurs"
                image={homeimg}
            />
            <Allcards />
        </div>
        </section>   
    );
};

export default Home;

