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
});
