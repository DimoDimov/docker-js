module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.+(ts|js)', '**/?(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
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
