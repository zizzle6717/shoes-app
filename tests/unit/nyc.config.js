module.exports = {
  all: false,
  'check-coverage': true,
  include: ['src/**/*.js'],
  exclude: ['**/coverage', '**/test', 'src/app.js', 'src/server.js', 'src/store/connection.js', 'src/store/knexfile.js', '.mocharc.js'],
  reporter: ['html', 'text'],
  'report-dir': './coverage',
  'temp-dir': './.nyc_output',
  branches: 50,
  functions: 75,
  lines: 75,
  statements: 90,
  watermarks: {
    branches: [35, 50],
    functions: [50, 75],
    lines: [50, 75],
    statements: [90, 97.5],
  },
};
