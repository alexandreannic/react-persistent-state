import {LocalStorageEntity} from '../utils/localStorageApi'
import {generateId} from '../utils/hash'
import {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import throttle from 'lodash.throttle'

export function usePersistentState<S>(initialState: S | (() => S), key?): [S, Dispatch<SetStateAction<S>>, () => void] {
  const initLocalStorage = () => new LocalStorageEntity<S>(generateId(key))
  const [storage] = useState(initLocalStorage)
  const [state, setState] = useState<S>(storage.load() || initialState)

  const throttled = useRef(throttle(storage.save, 1000))
  useEffect(() => throttled.current(state), [state])

  return [
    state,
    setState,
    storage.clear
  ]
}
