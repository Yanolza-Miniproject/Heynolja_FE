/** @type {import('@jest/types').Config.InitialOptions} */
//eslint-disable-next-line no-undef
module.exports = {
  // The test environment that will be used for testing, jsdom for browser environment
  // https://jestjs.io/docs/configuration#testenvironment-string
  testEnvironment: "jsdom",

  preset: "ts-jest/presets/default-esm",

  // A list of paths to directories that Jest should use to search for files in
  // https://jestjs.io/docs/configuration#roots-arraystring
  roots: ["<rootDir>/src/"],

  // The glob patterns Jest uses to detect test files.
  // https://jestjs.io/docs/configuration#testmatch-arraystring
  testMatch: ["**/*.test.ts?(x)"],

  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],

  // Jest transformations
  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta", // or, alternatively, 'ts-jest-mock-import-meta' directly, without node_modules.
              options: {
                metaObjectReplacement: {
                  url: "http://43.200.54.142:8080/api/v1",
                },
              },
            },
          ],
        },
      },
    ],
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // Code coverage config
  // https://jestjs.io/docs/configuration#collectcoveragefrom-array
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!**/__mocks__/**",
    "!**/node_modules/**",
    "!**/*.d.ts",
  ],

  // Important: order matters, specific rules should be defined first
  // https://jestjs.io/fr/docs/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss|less)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss|less)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle static assets
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg|ttf|woff|woff2)$":
      "jest-svg-transformer",

    // Handle TypeScript path aliases
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  snapshotSerializers: ["@emotion/jest/serializer"],

  verbose: true,
  testTimeout: 30000,
};
