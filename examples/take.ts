import { RichArray } from '../richArray'

const clients = new RichArray(
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
  }
)

const firstTwoClients = clients.take(2)

console.log({ firstTwoClients })
