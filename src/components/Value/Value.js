import React from 'react'

export default function Value(props) {
  return (
    <div className="value">
      <p className="value__number">{props.value}</p>
      <p className="value__measure">кг</p>
    </div>
  )
}
