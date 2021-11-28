const path = require('path');
const { showHtmlFile } = require('./route-handlers');

describe('route handling helper methods', () => {
    describe('showHtmlFile', () => {
        it('should return a func that sends a file to the response object', () => {
            const result = showHtmlFile('breadbox.html');
            const spyResponse = {                 
                sendFile:  function(fullPath){
                    this.lastPathSent = fullPath;
                }
            };

            result(null, spyResponse);

            expect(spyResponse.lastPathSent).toEndWith(path.join('src', 'views', 'breadbox.html'));
        });
    });
})