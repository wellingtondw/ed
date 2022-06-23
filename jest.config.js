/* eslint-disable no-undef */
module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/src/styles/**/*.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest']
  },
  transformIgnorePatterns: ['/node_modules/'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
};
