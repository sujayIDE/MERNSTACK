import React from 'react'

const Component_02 = (props) => {
  // ! destructuring  :
  // let { keyName } = objectName 
  let { countValue = 10 } = props
  console.log(countValue)

  return (
    <div>Component_02</div>
  )
}

export default Component_02