module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(js)', '**/?(*.)+(spec|test).+(js)'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 100,
      lines: 70,
      statements: -2,
    },
  },
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './coverage/',
};
