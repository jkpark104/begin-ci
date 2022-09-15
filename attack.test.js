import { attack } from './attack.js'

test('should return damage sentence when called correctly', () => {
  const result = attack('Smelly Ogre', 23, true)
  expect(result).toBe('Smelly Ogre 23 true')
})
