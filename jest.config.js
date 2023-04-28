module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: ['react', 'next']
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
