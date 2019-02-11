import * as React from 'react'
import {usePersistentState} from '../lib/PersistentState/usePersistentState'

export const PersistentCounterHook = ({persistentKey}) => {
  const [value, setValue, clearValue] = usePersistentState<string>(0, persistentKey)
  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>{value}</button>
      <button onClick={clearValue}>Clear from local storage</button>
    </div>
  )
}
