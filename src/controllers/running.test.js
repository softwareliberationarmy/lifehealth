jest.mock('../helpers/route-handlers');
jest.mock('../models/run');

const Run = require('../models/run');
const { getHome } = require('./running');
const { renderTemplate } = require('../helpers/route-handlers');

describe('running controller', () => {
  describe('GET Home', () => {
    it('should pass the runs to the run-home page', (done) => {
      var expected = {};

      Run.findAll.mockResolvedValue(Promise.resolve(expected));

      const res = {
        render: (path, data) => {
          expect(path).toBe('run-home');
          expect(data.runnings).toBe(expected);
          done();
        },
      };

      getHome(null, res, null);
    });
  });

  //NOTE: this test is called whn
  describe('it should call renderTemplate for getAddRun', () => {
    expect(renderTemplate).toBeCalledWith('run-add');
  });
});
