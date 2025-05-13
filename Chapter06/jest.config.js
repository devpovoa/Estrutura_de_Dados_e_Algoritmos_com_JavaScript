export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@nestjs|nestjs-dynamic|rxjs|ts-jest)/)"
  ],
};
