export function generateId(key?: string | number): string {
  return 'react-persistant-state-' + generateHash(new Error().stack ?? '') + key
}

function generateHash(x: string): number {
  return x.split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
}

