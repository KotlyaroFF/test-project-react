import React from 'react'
import Value from '../Value/Value'




function Discription(props) {
  function doCardPresentAmount() {
    if (props.cardPresentAmount > 1) {
      if (props.cardPresentAmount > 4) {
        return ' мышей в подарок';
      } else {return ' мыши в подарок'};
    } else {return ' мышь в подарок'};
  };
  function doCardPresentText() {
    if (props.cardPresentAmount > 4) {
      return 'заказчик доволен';
    }
  };
  return (
    <div className="discription">
      <h2 className="discription__name">Нямушка</h2>
        <p className="discription__flavor" >{props.cardTitle}</p>
        <p className="discription__servings">
          <span className="discription__servings__amount">{props.cardServingsAmount} </span>
            порций
        </p>
        <p className="discription__present">
          <span className="discription__present__amount">{props.cardPresentAmount} </span>
          <span className="discription__present__text">{doCardPresentAmount()}</span>
        </p>
        <p className="discription__present__text">{doCardPresentText()}</p>
        <Value  value = {props.cardValue}/>
    </div>
  )
}

export default Discription
