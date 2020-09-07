process.env = {
  TEST_ENV: '123',
};

module.exports = {
  testEnvironment: 'node',
  testTimeout: 1000,
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: './tests/*.*.ts$',
  testPathIgnorePatterns: ['tests/unit/stubs/'],
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 88,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,js}'],
  maxConcurrency: 10,
};
