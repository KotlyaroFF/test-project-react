import React from 'react'
import './App.scss'
import CatalogList from './components/Cataloglist/CatalogList'
import { data } from './mockData';

function App() {
  return (
    <section className='catalog'>
      <h1 className="catalog__title title">Ты сегодня покормил кота?</h1>
      <CatalogList data={data} />
    </section>
  );
}

export default App;
