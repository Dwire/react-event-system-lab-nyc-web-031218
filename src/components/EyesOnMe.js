// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  render(){
    const someFocus = () => console.log('Good!');
    const someBlur = () => console.log('Hey! Eyes on me!');

    return (
      <button onFocus={ someFocus } onBlur={ someBlur }>Button</button>
    )
  }
}


export default EyesOnMe
