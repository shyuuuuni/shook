import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // next.config.js(mjs) directory
  dir: './',
});

const config: Config = {
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@backend/(.*)$': '<rootDir>/src/backend/$1',
  },
};

export default createJestConfig(config);
