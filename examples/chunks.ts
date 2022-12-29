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
  },
  {
    name: 'andrew',
    age: 25,
    gender: 'male',
  }
)

const chunkedClients = clients.chunks(2)

console.log({ chunkedClients: chunkedClients[0] })
