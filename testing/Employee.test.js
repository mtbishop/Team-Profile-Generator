const Employee = require('../utils/employee');

describe('Employee'),
  () => {
    describe('New Employee', () => {
      it("Returns an object that contains a name, id, and email when 'new' employee is called", () => {
        const object = new Employee();
        expect('name' in object).toEqual(true);
        expect('ID' in object).toEqual(true);
        expect('email' in object).toEqual(true);
      });
      it("Accepts name, ID and email that are found in the 'Employee' object", () => {
        const empName = 'Bob';
        const empID = '1';
        const empEmail = 'bob@fake.com';

        const empObject = new Employee(empName, empID, empEmail);

        expect(empObject.name).toEqual(empName);
        expect(empObject.ID).toEqual(empID);
        expect(empObject.email).toEqual(empEmail);
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

        expect(object.returnID()).toEqual('1');
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
  };
