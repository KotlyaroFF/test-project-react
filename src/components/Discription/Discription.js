import React from 'react'
import Value from '../Value/Value'

export default function Discription() {
  return (
    <div className="discription">
      <h2 className="discription__name">Нямушка</h2>
        <p className="discription__flavor">с фуа-гра</p>
        <p className="discription__servings">
          <span className="discription__servings__amount">10</span>
            порций
        </p>
        <p className="discription__present">
          <span className="discription__present__amount"></span>
          <span className="discription_present__text"> мыши в подарок</span>
        </p>
        <p className="discription__text"></p>
        <Value />
    </div>
  )
}
