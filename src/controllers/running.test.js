jest.mock('../helpers/route-handlers');
jest.mock('../models/run');

const Run = require('../models/run');
const { getHome, postAddRun } = require('./running');
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

  describe('GET run-add', () => {
    it('should call renderTemplate for getAddRun', () => {
      expect(renderTemplate).toBeCalledWith('run-add');
    });
  });

  describe('POST run-add', () => {
    it('should create a new run and redirect to the running home page', (done) => {
      const expectedRunDate = new Date();
      const expectedDistance = 3.1;

      const req = {
        user: { createRun: jest.fn().mockResolvedValue(Promise.resolve({})) },
        body: { rundate: expectedRunDate, distance: expectedDistance },
      };
      const res = {
        redirect: (path) => {
          expect(path).toBe('/running');
          done();
        },
      };

      postAddRun(req, res);

      expect(req.user.createRun).toBeCalledWith({
        runDate: expectedRunDate,
        miles: expectedDistance,
      });
    });
  });
});
