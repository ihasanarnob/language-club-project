import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Header.css'

const Header = () => {
    return (
        <div className=" d-flex justify-content-between banner">
            <div>
                <h3 className="heading p-3" >Titan Japanese Language Center</h3>
            </div>
            <div>
                <Menubar></Menubar>
            </div>
            
        </div>
    );
};

export default Header;