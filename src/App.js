import React from 'react'
import './App.css';
import CatalogList from './components/Cataloglist/CatalogList';

function App() {
  return (
    <section className='catalog'>
      <h1 className="catalog__title title">Ты сегодня покормил кота?</h1>
      <CatalogList />
    </section>
  );
}

export default App;
