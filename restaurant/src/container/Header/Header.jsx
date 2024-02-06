import React from 'react';
import {useNavigate} from "react-router-dom";
import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => {
  const navigate = useNavigate();

    const handleMenu = (event) => {
        navigate('/menu')
    } 
  return (
    <div className="app-header app-wrapper section-padding app-bg" id='home'>
      <div className='app-wrapper-info'>
        <SubHeading title="Chase the new flavor"/>
        <h1 className='app-header-h1'>Enjoy the flavors of life</h1>
        <p className='p__opensans' style={{margin: '2rem 0'}}>Welcome to Brioche – a culinary haven where diverse flavors converge to create an exquisite dining experience. Embark on a gastronomic journey that transcends borders, as our multi-cuisine restaurant invites you to savor a symphony of tastes. From the vibrant spices of Asia to the rich traditions of Europe, Brioche promises an unparalleled fusion of global culinary delights.</p>
        <button type='button' className='custom-button' onClick={handleMenu}>Explore menu</button>
      </div>
      <div className='app-wrapper-img'>
        <img src={images.gallery01} alt="welcome-img" />
      </div>
    </div>
)};

export default Header;
