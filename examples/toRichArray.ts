import { toRichArray } from '../richArray'

const clients = [
  {
    name: 'jason',
    age: 22,
    gender: 'male',
  },
  {
    name: 'carol',
    age: 40,
    gender: 'female',
  },
  {
    name: 'mathew',
    age: 22,
    gender: 'male',
  },
  {
    name: 'andrew',
    age: 25,
    gender: 'male',
  },
]
const richArray = toRichArray(clients)

console.log({ richArray })
