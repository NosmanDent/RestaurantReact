import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding background__gradient" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button bg-yellow-700">Explore Menu</button>
    </div>

    

    <div className="relative app__wrapper_img w-full">
      <div className="absolute  z-10 w-full">
        <img src={images.welcomey} alt="header_img" className=" opacity-20 h-full w-full scale-in-center " />
      </div>
      <div className="absolute  z-20 w-full">
          <img src={images.welcome2} alt="header_img" className=" opacity-20 h-full w-full"/>
            
      </div>
      
    </div>
      
    
  </div>
);

export default Header;