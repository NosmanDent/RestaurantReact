import React, { useState } from 'react';
import SecondMenu from './SecondMenu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main className='bg-black'>
      <section className="menu section">
        <div className="title">
          <h2 className='text-white font-bold font-serif'>more menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <SecondMenu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
