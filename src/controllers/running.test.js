jest.mock('../models/run');
jest.mock('../helpers/route-handlers');

const Run = require('../models/run');
const { getHome } = require('./running');

describe('running controller', () => {
    describe('GET Home', () => {
        it('should pass the runs to the run-home page', (done) => {                        
            var expected = {}

            Run.findAll.mockResolvedValue(
                Promise.resolve(expected)
            );

            const res = {
                render: (path,data) => {
                    expect(path).toBe('run-home');
                    expect(data.runnings).toBe(expected);
                    done();
                }
            };

            getHome(null, res, null);
        });
    });
});