import React from 'react'
import Tegline from '../Tegline/Tegline'
import Discription from '../Discription/Discription'
import Downtext from '../Downtext/Downtext'

export default function CatalogCard() {
  return (
    <li className='catalog__item'>
        <div className='catalog__card'>
          <div className="catalog__card__decor" />
          <Tegline />
          <Discription />
        </div>
        <Downtext />
    </li>
  )
}
