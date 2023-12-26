const { expect } = require('chai')
const userController = require('../src/controllers/user')
const db = require('../src/dbClient')

describe('User', () => {
  
  beforeEach(() => {
    // Clean DB before each test
    db.flushdb()
  })

  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

     it('avoid creating an existing user', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.not.be.equal(null)
        done()
      })
     })
  })

  describe('Get', () => {// tests for guest function
    it('get a user by username', (done) => {
      const user = {// We first create a user to make this test a unit one
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov',
      };
    
      userController.create(user, (err, result) => {//Not sure if we want to keep this part
        expect(err).to.be.equal(null);//Same
        expect(result).to.be.equal('OK');//Same 
        setTimeout(() => {// We set a timeout to make sure the callback function work
          userController.get(user.username, (getErr, getUser) => {
            expect(getErr).to.be.equal(null);
            expect(getUser).to.deep.equal(user);
            done();
          });
        }, 10); //We fix it to 10 ms 
      });
    });    

    it('cannot get a user when it does not exist', (done) => {//Unit test to see if we can get a user when it does not exist
      // Check with any invalid user
      const usernamefalse = 'nonexistentuser';
      userController.get(usernamefalse, (getErr, getUser) => {//Cjheck if we really have the same username and the user really exist
        expect(getErr).to.not.be.equal(null);
        expect(getUser).to.deep.equal(null);
        done();
      });
    });
  });
})
