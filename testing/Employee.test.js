const Employee = require('../utils/employee');

describe('Employee', () => {
  describe('New Employee', () => {
    it("Returns an object that contains a name, id, and email when 'new' employee is called", () => {
      const object = new Employee();
      expect('name' in object).toEqual(true);
      expect('id' in object).toEqual(true);
      expect('email' in object).toEqual(true);
    });
    it("Accepts name, ID and email that are found in the 'Employee' object", () => {
      const returnName = 'Bob';
      const returnID = 1;
      const returnEmail = 'bob@fake.com';

      const empObject = new Employee(returnName, returnID, returnEmail);

      expect(empObject.name).toEqual(returnName);
      expect(empObject.id).toEqual(returnID);
      expect(empObject.email).toEqual(returnEmail);
    });
  });
  describe('returnName function', () => {
    it('Returns the name of the employee in the object', () => {
      const object = new Employee('Bob');

      expect(object.returnName()).toEqual('Bob');
    });
  });
  describe('returnID function', () => {
    it('Returns the ID of the employee in the object', () => {
      const object = new Employee('Bob', 1);

      expect(object.returnID()).toEqual(1);
    });
  });
  describe('returnEmail function', () => {
    it('Returns the email of the employee in the object', () => {
      const object = new Employee('Bob', 1, 'bob@fake.com');

      expect(object.returnEmail()).toEqual('bob@fake.com');
    });
  });
  describe('returnRole function', () => {
    it('Returns the role of the employee in the object', () => {
      const object = new Employee();

      expect(object.returnRole()).toEqual('Employee');
    });
  });
});
