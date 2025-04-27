// jest.config.js
export default {
    setupFiles: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
  };
  