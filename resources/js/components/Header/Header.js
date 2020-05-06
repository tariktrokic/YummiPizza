import React from 'react';
import Title from './Title';
import NavBar from './Navbar';


function Header(props) {
    return (
    <div className = "header">
        <Title cssClass= "mainTitle" text="Yummi Pizza"/>
        <h3 className="secondaryTitle">Mmmmm... delicioso!</h3>
        <NavBar/>
    </div>
    )
}

export default Header;