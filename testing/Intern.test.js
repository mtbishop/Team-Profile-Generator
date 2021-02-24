const Employee = require('../utils/employee');
const Intern = require('../utils/intern');

describe('Intern', () => {
  describe('New Intern', () => {
    it('Extends from the Employee class', () => {
      const object = new Intern();

      expect(object).toBeInstanceOf(Employee);
    });

    it('Adds a school property with the new keyword branching from the Employee class', () => {
      const object = new Intern();
      expect('school' in object).toEqual(true);
    });
    it('Accepts name, ID, email, and school from the Intern object', () => {
      const returnName = 'Bob';
      const returnID = 1;
      const returnEmail = 'bob@fake.com';
      const returnSchool = 'KU';

      const object = new Intern(
        returnName,
        returnID,
        returnEmail,
        returnSchool
      );

      expect(object.name).toEqual(returnName);
      expect(object.id).toEqual(returnID);
      expect(object.email).toEqual(returnEmail);
      expect(object.school).toEqual(returnSchool);
    });
  });
  describe('returnName function', () => {
    it('Returns the name of the intern in the object', () => {
      const object = new Intern('Bob');

      expect(object.returnName()).toEqual('Bob');
    });
  });
  describe('returnID function', () => {
    it('Returns the ID of the intern in the object', () => {
      const object = new Intern('Bob', 1);

      expect(object.returnName()).toEqual(1);
    });
  });

  describe('returnEmail function', () => {
    it('Returns the email of the intern in the object', () => {
      const object = new Intern('Bob', 1, 'bob@fake.com');

      expect(object.returnName()).toEqual('bob@fake.com');
    });
  });
  describe('returnSchool function', () => {
    it('Returns the school of the intern in the object', () => {
      const object = new Intern('Bob', 1, 'bob@fake.com', 'KU');

      expect(object.returnName()).toEqual('KU');
    });
  });
  describe('returnRole function', () => {
    it('Returns the role of the Intern in the object', () => {
      const object = new Intern();

      expect(object.returnRole()).toEqual('Intern');
    });
  });
});
