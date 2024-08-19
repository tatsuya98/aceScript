
import usersData from '../app/mongodb/test-data/userData'
import katasData from '../app/mongodb/test-data/katasData'
import { client, db } from '../app/mongodb/connection'
import  seed  from '../app/mongodb/seed'

 
beforeEach(() => {
  return client.connect().then(() => {
    return seed(usersData, katasData)
  })
})

afterAll(() => {
  client.close()
})


describe('api/users', () => {
    it('returns an array of users', () => {
      return client.connect().then(() => {
        return db.collection('users').findOne({username: 'test1'})
      }).then((res) => {
        console.log(res)
        // res.forEach((user) => {
        //   expect(user.username).toBe()
        // })
      })
    })
  
})

