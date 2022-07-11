import React from 'react'
import CatalogCard from '../CatalogCard/CatalogCard'

export default function Cataloglist(props) {
  return (
    <ul className="catalog__list">
      {props.data.map(cards => {
        return <CatalogCard key={cards.id} card={cards} />
      })}
    </ul>
  )
}

