import React from 'react';

const SecondMenu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4 className='text-white font-bold'>{title}</h4>
                <h4 className='price font-bold'>${price}</h4>
              </header>
              <p className='item-text text-sm text-white'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default SecondMenu;
