const request = require('supertest')
const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const server = app.listen(8080, () => {
    console.log('Testing on port 8080')
})

const Engineer = require('../models/engineer')

let mongoServer 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
})

afterAll(async()=> {
    await mongoose.connection.close() // close connection from mongoose to database/mongodb memory server
    mongoServer.stop() // shutoff mongodb memory server
    server.close() // shutoff node server
})

afterAll((done) => done())

describe('Test the Engineers endpoints',() => {
   test('It Should Create A New Engineer', async () => {
    const response = await request(app)
      .post('/engineers')
      .send({ name: 'John Doe', Specialty: 'john', YearsExperience: '5'})

    expect(response.statusCode).toBe(200)
    expect(response.body.engineer.name).toEqual('John Doe')
    expect(response.body.engineer.email).toEqual('john.doe@example.com')
   })
   //test()
   test('It should login a engineer', async () => {
    const engineer = new Engineer({ name: 'John Doe', specialty: 'john', yearsExperience: '5' })
    await engineer.save()

    const response = await request(app)
      .post('/engineers/new')
      .send({ name: 'John Doe', specialty: 'john' })

    
    expect(response.statusCode).toBe(200)
    expect(response.body.user.name).toEqual('John Doe')
    expect(response.body.user.specialty).toEqual('john')
  })
  test('It should update a engineer', async () => {
    const engineer = new Engineer({ name: 'Fatema', specialty: 'john', yearsExperience: '5' })
    await engineer.save()

    const response = await request(app)
      .put(`/engineers/${engineer._id}`)
      .send({ name: 'Kristina', specialty: 'example' })
    
    expect(response.statusCode).toBe(200)
    expect(response.body.name).toEqual('Kristina')
    expect(response.body.specialty).toEqual('example')
  })
   //test()
   test('It should delete a engineer', async () => {
    const engineer = new Engineer({ name: 'John Doe', specialty: 'john', yearsExperience: '5' })
    await engineer.save()

    const response = await request(app)
      .delete(`/engineers/${engineer._id}`)
    
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toEqual('Engineer deleted')
  })
})