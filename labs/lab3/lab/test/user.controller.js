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

    it('avoid creating an existing user', (done) => {
      // Define a user
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      };
    
      // Create the user initially
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null);
        expect(result).to.be.equal('OK');
    
        // Try creating the same user again
        userController.create(user, (err, result) => {
          // Expect an error because the user already exists
          expect(err).to.not.be.equal(null);
          expect(result).to.be.equal(null);
    
          // Done with the test
          done();
        });
      });
    });
    
  })

  describe('Get', () => {
    
    it('get a user by username', (done) => {
      
      const userToCreate = {
        username: 'testuser',
        firstname: 'Test',
        lastname: 'User'
      };
      
      userController.create(userToCreate, (createErr, createResult) => {
        expect(createErr).to.be.null;
        expect(createResult).to.equal('OK');
        
        userController.get('testuser', (getErr, getResult) => {
          expect(getErr).to.be.null;
          expect(getResult).to.deep.equal(userToCreate);
          done();
        });
      });
    });

    it('cannot get a user npmwhen it does not exist', (done) => {
      // Check with any invalid user
      userController.get('nonexistentuser', (getErr, getResult) => {
        expect(getErr).to.not.be.null;
        expect(getResult).to.be.null;
        done();
      });
    });

  });

});

