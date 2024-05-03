export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.js'],
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
}