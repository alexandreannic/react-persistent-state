import * as React from 'react'
import {useState} from 'react'
import {PersistantInput2} from './PersistantInput2'
import {PersistantInput} from './PersistantInput'

const App = () => {

  const [s, ss] = useState(true)
  return (
    <div style={{
      maxWidth: 800,
      margin: '20px auto',
    }}>
      <h1>extend PersistentComponent</h1>
      <button onClick={() => ss(!s)}>a</button>
      {s && <PersistantInput persitentKey={1}/>}
      <PersistantInput persitentKey={2}/>
      <h1>usePeristentState</h1>
      <PersistantInput2 persistentKey={1}/>
      <PersistantInput2 persistentKey={2}/>
    </div>
  )
}

export default App
