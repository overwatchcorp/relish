const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  envs: ['browser', 'mocha'],
  useEslintrc: true,
});

it('should throw no linter errors', () => {
  const report = cli.executeOnFiles(['./']);
  if (report.errorCount > 0) {
    report.results.forEach((result) => {
      if (result.messages) {
        result.messages.forEach(message => console.log( // eslint-disable-line no-console
          result.filePath,
          message.message,
          message.line,
          message.column,
        ));
      }
    });
  }
  expect(report.errorCount).toEqual(0);
});
