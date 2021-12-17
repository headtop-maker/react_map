module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['node_modules/?!(react-router)'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/*'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx?)$',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  collectCoverageFrom: ['**/src/**/*.{ts,tsx}'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
