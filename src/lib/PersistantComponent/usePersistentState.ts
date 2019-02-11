import {LocalStorageEntity} from '../utils/localStorageApi'
import {generateId} from '../utils/hash'
import {useEffect, useState} from 'react'

export function usePersistentState<T>(value?, key?) {
  const initLocalStorage = () => new LocalStorageEntity<T>(generateId(key))
  const [ls] = useState(initLocalStorage)
  const [x, setX] = useState(ls.load() || value || 0)
  useEffect(() => ls.save(x), [x])
  return [
    x,
    setX,
    ls.clear
  ]
}
