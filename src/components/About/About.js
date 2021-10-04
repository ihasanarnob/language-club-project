import React from 'react';
import './About.css'
import img from '../../Image/homepage.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div className="body">
            <div>
                {/* header */}
                <Header></Header>
            </div>
            <h3 className="heading">About Us</h3>
            <div className="about mb-3">
  <img  src={img} className="w-75 mx-auto card-img-top" alt="..."/>
  <div className="container card-body">
    <h5 className="card-title">We share knowledge with the world</h5>
    <p className="container card-text">We offer basic Japanse conversation courses taught by an experienced Japanese native teacher, 'Kuni'. You can also learn business conversation and business manners to help you to communicate in Japanese in your business context.</p>
     <h3>Our Features - </h3>
     <h6>- Experienced native Japanese teacher. <br />
         - Opportunity to communicate with Japanese people. <br />
         - Latest information about Japan and Japanese culture. <br />
         - And opportunity to communicate with Japanese learners.</h6>

            <h3 className="mb-2 mt-5">How Can I Contact or Enroll?</h3>
            <h6>To register for this course or to ask any questions, please feel free to contact us.</h6>
            <p>Contact Us : 017 6853 3988 (Bangladeshi) </p>
            <p>  Office Hour ： 9:30am - 5:30pm (Friday and public holiday closed)</p>
        </div>
        </div>

        <div>
            <Footer></Footer>
        </div>
</div>
    );
};

export default About;