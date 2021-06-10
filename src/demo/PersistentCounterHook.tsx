import * as React from 'react'
import {usePersistentState} from '../PersistentState/usePersistentState'

export const PersistentCounterHook = ({persistentKey}) => {
  const [value, setValue, clearValue] = usePersistentState<number>(0, persistentKey)
  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>{value}</button>
      <button onClick={clearValue}>Clear from local storage</button>
    </div>
  )
}
