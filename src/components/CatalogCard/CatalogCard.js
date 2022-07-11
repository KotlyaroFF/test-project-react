import React from 'react'
import Tegline from '../Tegline/Tegline'
import Discription from '../Discription/Discription'
import Downtext from '../Downtext/Downtext'
import doDisabled from '../Disabled/Disabled'
import doSelected from '../Selected/Selected'

let classes = [
  {id: 1, nameClass: 'catalog__item'},
  {id: 2, nameClass: 'catalog__item--disabled'},
  {id: 3, nameClass: 'catalog__item--selected'}
]

function CatalogCard(props) {
  const classDefaulted = classes.find(item => item.id === 1)
  const classDisabled = classes.find(item => item.id === doDisabled(props.card.available))
  const classSelected = classes.find(item => item.id === doSelected(props.card.available))
  let nameClasses = [classDefaulted.nameClass];

  if (doDisabled(props.card.available) !== undefined) {
    nameClasses.push(classDisabled.nameClass)
  }

  function selectedClass() {
    if (doSelected(props.card.available) !== undefined) {

      nameClasses.push(classSelected.nameClass);
      console.log(getNewClass());
    }
  }

  function getNewClass () {
    let newClass = nameClasses.slice()
    return newClass.join(' ')
  }
  console.log(getNewClass());

  return (
    <li className={!props.card.available ? 'catalog__item catalog__item--disabled' : 'catalog__item'} >
        <div
        className='catalog__card'
        id={props.card.id}
        onClick={selectedClass}>
          <div className="catalog__card__decor" />
          <Tegline />
          <Discription
          cardTitle={props.card.title}
          cardServingsAmount={props.card.servingsAmount}
          cardPresentAmount={props.card.presentAmount}
          cardValue = {props.card.value}
          />
        </div>
        <Downtext />
    </li>
  )
}

export {classes}

export default CatalogCard
