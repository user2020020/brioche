import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const handleMenu = (event) => {
    navigate('/menu')
  }
  const handleAwards = (event) => {
    navigate('/awards')
  }
  return(
  <div className='app-bg'>
    <div className="app-aboutus flex-center section-padding" id="about">
      <div className="app-aboutus-content flex-center">
        <div className="app-aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">At Brioche, we are more than a restaurant; we are a culinary haven where diverse tastes converge. With a legacy of 9 years, our commitment to delivering exceptional dining experiences is unwavering. Our menu reflects a fusion of global influences, showcasing our love for innovative, multi-cuisine offerings. Step into Brioche, where every dish is a story, every moment a celebration, and every visitor a cherished part of our vibrant culinary family.</p>
          <button type="button" className="custom-button" onClick={handleMenu}>View Menu</button>
        </div>

        <div className="app-aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">Founded in 2015, Brioche emerged as a culinary gem, weaving a narrative of innovation and delectable experiences. From our modest beginnings, we've evolved into a culinary landmark, celebrating 9 years of flavorsome traditions and culinary artistry. The Brioche journey is a testament to our commitment to excellence, shaping a history defined by passion and an unwavering dedication to delighting palates.</p>
          <button type="button" className="custom-button" onClick={handleAwards}>View Awards</button>
        </div>
      </div>
    </div>
    <div className='buffer'></div>
  </div>
  )};

export default AboutUs;
