import React from 'react';
import Header from '../Header/Header';
import image from '../../Image/body.jpg'
import Body from '../Body/Body';
import './Home.css'
import Footer from '../Footer/Footer';

const Home = () => {

    return (

        <div className="body">
    {/* ......................... */}

            <div>
           {/* NavLink components & header */}
           <Header></Header>
            </div>
           {/* extra adding site related info */}
           <div className="container pt-3">
               <h3 className="heading">OUR JAPANESE COURSES </h3>
               <img className="w-75" src={image} alt="" />
                <p className="p-2">We offer basic Japanense Language courses taught by an experienced Japanese native teacher, 'Kuni' and also Bagladeshi teachers. We take classes in Japanese, Bengali and English. You can also learn basic conversation and manners to help you to communicate in Japanese in your context.</p>
           </div>
           <div>
            {/* body part */}
            <Body></Body>
            </div>
            {/* footer.... */}
            <Footer></Footer>

            {/* ....................... */}
        </div>
    );
};

export default Home;