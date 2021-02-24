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
  };
