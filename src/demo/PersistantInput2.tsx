import * as React from 'react'
import {usePersistentState} from '../lib/PersistantComponent/usePersistentState'

export const PersistantInput2 = ({persistentKey}) => {

  const [value, setValue, clearValue] = usePersistentState<string>(0, persistentKey)
  return (
    <div>
      <button onClick={() => setValue((prev) => prev + 1)}>{value}</button>
      <button onClick={clearValue}>Clear local storage</button>
    </div>
  )
}
