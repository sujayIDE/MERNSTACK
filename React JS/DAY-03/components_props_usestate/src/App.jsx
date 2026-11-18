//  ! import componentName from 'path' 

import Component_01 from "./components/Component_01"
import Component_02 from "./components/Component_02"
import Component_03 from "./components/Component_03"

const App = () => {
  let count = 0;
  return (
    <main>

      <p>Count value is  : {count} </p>
      <hr />

      <Component_01 countValue={count} />
      <Component_02 />
      <Component_03 countValue={count} />
      <Component_03  />
    </main>
  )
}

export default App