import {LocalStorageEntity} from '../utils/localStorageApi'
import {generateId} from '../utils/hash'
import {Dispatch, SetStateAction, useEffect, useMemo, useRef, useState} from 'react'
import throttle from 'lodash.throttle'

export function usePersistentState<S>(initialState: S | (() => S), key?: string): [S, Dispatch<SetStateAction<S>>, () => void] {
  const localStorage = useMemo(() => new LocalStorageEntity<S>(generateId(key)), [])
  const [state, setState] = useState<S>(localStorage.load() ?? initialState)

  const throttled = useRef(throttle(localStorage.save, 1000))
  useEffect(() => throttled.current(state), [state])

  return [
    state,
    setState,
    () => localStorage.clear()
  ]
}
