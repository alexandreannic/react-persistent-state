export const generateId = (key?: string | number): string => {
  return 'react-persistant-state-' + (key ?? generateHash(new Error().stack ?? ''))
}

const generateHash = (x: string): number => {
  return x.split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
}

