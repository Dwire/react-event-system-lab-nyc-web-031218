// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {
  render() {
    const someShit = () => {console.log('Entering password...')}

    return (
      <input type={"password"} onKeyUp={someShit}></input>
    )
  }
}

export default Keypad
