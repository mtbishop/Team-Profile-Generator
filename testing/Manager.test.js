const Employee = require('../utils/employee');
const Manager = require('../utils/manager');

describe('Manager', () => {
  describe('New Manager', () => {
    it('Extends from the Employee class', () => {
      const object = new Manager();

      expect(object).toBeInstanceOf(Employee);
    });
    it('Adds a office number property with the new keyword branching from the Employee class', () => {
      const object = new Manager();

      expect('returnOffice' in object).toEqual(true);
    });
    it('Accepts name, ID, email, and office number from the Intern object', () => {
      const returnName = 'Bob';
      const returnID = 1;
      const returnEmail = 'bob@fake.com';
      const returnOffice = 5554443333;

      const object = new Manager(
        returnName,
        returnID,
        returnEmail,
        returnOffice
      );

      expect(object.name).toEqual(returnName);
      expect(object.id).toEqual(returnID);
      expect(object.email).toEqual(returnEmail);
      expect(object.officeNumber).toEqual(returnOffice);
    });
  });
  describe('returnName function', () => {
    it('Returns the name of the Manager in the object', () => {
      const object = new Manager('Bob');

      expect(object.returnName()).toEqual('Bob');
    });
  });
  describe('returnID function', () => {
    it('Returns the ID of the Manager in the object', () => {
      const object = new Manager('Bob', 1);

      expect(object.returnID()).toEqual(1);
    });
  });
  describe('returnEmail function', () => {
    it('Returns the email of the Manager in the object', () => {
      const object = new Manager('Bob', 1, 'bob@fake.com');

      expect(object.returnEmail()).toEqual('bob@fake.com');
    });
  });
  describe('returnOffice function', () => {
    it('Returns the office number of the Manager in the object', () => {
      const object = new Manager('Bob', 1, 'bob@fake.com', 5554443333);

      expect(object.returnOffice()).toEqual(5554443333);
    });
  });
});
