import * as React from 'react'
import {useState} from 'react'
import {PersistentCounterHook} from './PersistentCounterHook'
import {PersistentInputClass} from './PersistentInputClass'

const App = () => {

  const [s, ss] = useState(true)
  return (
    <div style={{
      maxWidth: 800,
      margin: '20px auto',
    }}>
      <h1>extend PersistentComponent</h1>
      <button onClick={() => ss(!s)}>a</button>
      {s && <PersistentInputClass persitentKey={1}/>}
      <PersistentInputClass persitentKey={2}/>
      <h1>usePeristentState</h1>
      <PersistentCounterHook persistentKey={1}/>
      <PersistentCounterHook persistentKey={2}/>
    </div>
  )
}

export default App
