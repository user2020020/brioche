import React from 'react';
import './Menu.css';
import {images} from '../../constants';
import { MenuItem, SubHeading } from '../../components';

const SpecialMenu = () => {
  const breakfastItems = [
    {
      name: 'Toast',
      description: 'Simple yet comforting, our toast and jam embrace the charm of rustic simplicity, offering golden slices of toasted bread adorned with artisanal jams that burst with natural sweetness.',
      price: 119,
      image: images.frittata,
    },
    {
      name: 'Croissant',
      description: 'Flaky layers of buttery perfection, the croissant is a French classic, boasting a delicate golden exterior and a soft, airy interior that melts in every bite.',
      price: 89,
      image: images.cannoli,
    },
    {
      name: 'Beignets',
      description: 'Beignets, the epitome of indulgence, are heavenly pillows of deep-fried dough, generously dusted with powdered sugar, creating a delightful harmony of crispy exteriors and pillowy softness within.',
      price: 89,
      image: images.cornetti,
    },
    {
      name: 'Sandwich',
      description: 'A handheld delight, our sandwiches are a symphony of flavors and textures, featuring fresh, premium ingredients nestled between layers of artisanal bread for a satisfying and portable culinary experience.',
      price: 129,
      image: images.crepe,
    },
    {
      name: 'Pancakes',
      description: 'Our pancakes are a breakfast classic reimagined, boasting a perfect balance of fluffiness and flavor, served with a drizzle of syrup to elevate your morning ritual.',
      price: 79,
      image: images.biscotti,
    },
  ]
  const lunchItems = [
    {
      name: 'Spaghetti',
      description: 'Silky strands of al dente pasta dance in a rich marinara sauce, marrying traditional Italian flavors for a timeless, comforting dish..',
      price: 229,
      image: images.pesto,
    },
    {
      name: 'Fried Chicken',
      description: 'Crispy and golden on the outside, succulent and flavorful within, our fried chicken is a mouthwatering symphony of texture and taste.',
      price: 239,
      image: images.carbonara,
    },
    {
      name: 'Pizza Margherita',
      description: 'A classic Italian pizza, the Margherita is topped with simple ingredients like tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.',
      price: 239,
      image: images.margherita,
    },
    {
      name: 'Burritos',
      description: 'A flavor-packed fiesta in every bite, our burritos wrap up a delightful combination of seasoned meats, beans, rice, and vibrant toppings, creating a handheld delight.',
      price: 189,
      image: images.calzone,
    },
    {
      name: 'Fried Rice',
      description: 'Wok-tossed perfection, our fried rice is a savory masterpiece, blending aromatic grains with a medley of vegetables and choice proteins for an irresistible Asian-inspired dish.',
      price: 199,
      image: images.risotto,
    },
  ]
  const dessertItems = [
    {
      name: 'Sundae',
      description: 'Indulge in the ultimate dessert experience – our ice cream sundae is a symphony of flavors and textures, featuring creamy scoops, decadent sauces, and delightful toppings that create a sweet masterpiece.',
      price: 149,
      image: images.pannacotta,
    },
    {
      name: 'Tiramisu',
      description: 'A popular Italian dessert, tiramisu features layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.',
      price: 179,
      image: images.tiramisu,
    },
    {
      name: 'Gelato',
      description: 'Italian ice cream, gelato is known for its smooth and dense texture, with a lower fat content than traditional ice cream, and comes in various flavors.',
      price: 119,
      image: images.gelato,
    },
    {
      name: 'Smoothie',
      description: 'Sip into vitality with our vibrant smoothies, where a fusion of fresh fruits, yogurts, and wholesome ingredients harmonize to create a refreshing and nutritious blend for a burst of energy.',
      price: 59,
      image: images.espresso,
    },
    {
      name: 'Juice',
      description: 'Quench your thirst with the pure essence of nature – our fruit juices capture the essence of ripe fruits, offering a refreshing and invigorating sip that brings the orchards bounty to your glass.',
      price: 89,
      image: images.latte,
    },
  ]
  return( 
    <div className='menu-page'>
      <div>
        <SubHeading title={"Breakfast"} id={'breakfast'}/>
        <div className='container'>
          {breakfastItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
        <SubHeading title={"Lunch and Dinner"} id={'lunch'}/>
        <div className='container'>
          {lunchItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
        <SubHeading title={"Dessert and Drinks"} id={'beverages'}/>
        <div className='container'>
          {dessertItems.map((item,index) =>(<MenuItem key={index} item={item} />))}
        </div>
      </div>
    </div>
)};

export default SpecialMenu;
