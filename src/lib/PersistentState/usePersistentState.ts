import {LocalStorageEntity} from '../utils/localStorageApi'
import {generateId} from '../utils/hash'
import {Dispatch, SetStateAction, useEffect, useState} from 'react'

export function usePersistentState<S>(initialState: S | (() => S), key?): [S, Dispatch<SetStateAction<S>>, () => void] {
  const initLocalStorage = () => new LocalStorageEntity<S>(generateId(key))
  const [storage] = useState(initLocalStorage)
  const [state, setState] = useState<S>(storage.load() || initialState)
  useEffect(() => storage.save(state), [state])
  return [
    state,
    setState,
    storage.clear
  ]
}
