

export default function nameClassesJoin() {
  if (doSelected(props.card.available) !== undefined) {
    nameClasses.push(classSelected.nameClass);
    console.log(nameClasses);
    }
  nameClasses.join(' ')
  }
