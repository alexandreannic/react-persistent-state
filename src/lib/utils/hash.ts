export function generateId(key?: string | number): string {
  return 'pc_' + generateHash(new Error().stack) + key
}

function generateHash(x: string): number {
  return x.split('').reduce((prevHash, currVal) => (((prevHash << 5) - prevHash) + currVal.charCodeAt(0)) | 0, 0)
}

