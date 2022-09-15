import { attack } from './attack'

const resultTag = document.getElementById('resultTag')
const creature = document.getElementById('creature')
const damage = document.getElementById('damage')
const resultButton = document.getElementById('resultButton')

resultButton.addEventListener('click', () => {
  const result = attack(creature.value, damage.value)
  console.log({ result })
  resultTag.innerHTML = result
})
