import {generateId} from '../utils/hash'
import {Dispatch, SetStateAction, useCallback, useEffect, useState} from 'react'

export const usePersistentState = <S>(initialState: S | (() => S), key: string = 'react-persistent-state' + generateId()): [S, Dispatch<SetStateAction<S>>, () => void] => {
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage

  const getInitialValue = (): S | (() => S) => {
    if (!isLocalStorageAvailable) return initialState
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      try {
        return JSON.parse(storedValue)
      } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error)
      }
    }
    return initialState
  }

  const [state, setState] = useState<S>(getInitialValue())

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  const clear = useCallback(() => {
    localStorage.clear()
    setState(initialState)
  }, [initialState])

  return [state, setState, clear]
}
