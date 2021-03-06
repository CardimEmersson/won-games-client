module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/**/stories.tsx',
    '!src/stories/**/*.ts(x)',
    '!src/pages/**/*.ts(x)',
    '!src/styles/**/*.ts(x)'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', 'src', '<rootDir>/.jest']
};
