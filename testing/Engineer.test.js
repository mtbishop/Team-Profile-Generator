const Employee = require('../utils/employee');
const Engineer = require('../utils/engineer');

describe('Engineer', () => {
  describe('New Engineer', () => {
    it('Extends from the Employee class', () => {
      const object = new Engineer();

      expect(object).toBeInstanceOf(Employee);
    });
    it('Adds an github property with the new keyword branching from the Employee class', () => {
      const object = new Engineer();

      expect('gitHub' in object).toEqual(true);
    });
    it('Accepts name, ID, email, and github from the Engineer object', () => {
      const object = new Engineer(
        returnName,
        returnID,
        returnEmail,
        returnGithub
      );

      expect(object.name).toEqual(returnName);
      expect(object.id).toEqual(returnID);
      expect(object.email).toEqual(returnEmail);
      expect(object.gitHub).toEqual(returnGithub);
    });
  });
  describe('returnName function', () => {
    it('Returns the name of the engineer in the object', () => {
      const object = new Engineer('Bob');

      expect(object.returnName()).toEqual('Bob');
    });
  });
  describe('returnID function', () => {
    it('Returns the ID of the engineer in the object', () => {
      const object = new Engineer('Bob', 1);

      expect(object.returnID()).toEqual(1);
    });
  });
  describe('returnEmail function', () => {
    it('Returns the email of the engineer in the object', () => {
      const object = new Engineer('Bob', 1, 'bob@fake.com');

      expect(object.returnEmail()).toEqual('bob@fake.com');
    });
  });
  describe('returnGithub function', () => {
    it('Returns the github of the engineer in the object', () => {
      const object = new Engineer('Bob', 1, 'bob@fake.com, bobGitHub');

      expect(object.returnGithub()).toEqual('bobGitHub');
    });
  });
  describe('returnRole function', () => {
    it('Returns the role of the Engineer in the object', () => {
      const object = new Engineer();

      expect(object.returnRole()).toEqual('Engineer');
    });
  });
});
