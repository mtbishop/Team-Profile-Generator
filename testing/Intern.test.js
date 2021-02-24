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
});
