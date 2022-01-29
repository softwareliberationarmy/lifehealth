const path = require('path');
const { showHtmlFile, renderTemplate } = require('./route-handlers');

describe('route handling helper methods', () => {
  describe('showHtmlFile', () => {
    it('should return a func that sends a file to the response object', () => {
      const result = showHtmlFile('breadbox.html');
      const spyResponse = {
        sendFile: function (fullPath) {
          this.lastPathSent = fullPath;
        },
      };

      result(null, spyResponse);

      expect(spyResponse.lastPathSent).toEndWith(
        path.join('src', 'views', 'breadbox.html')
      );
    });
  });

  describe('renderTemplate', () => {
    it('should call render and pass in the template name and input', () => {
      const templateName = 'dummy 1';
      const input = { someInput: true, value: 0 };
      const mockRes = { render: jest.fn() };

      const target = renderTemplate(templateName, input);

      target(null, mockRes, null);

      expect(mockRes.render).toBeCalledWith(templateName, input);
    });
  });
});
