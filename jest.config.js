module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
    "node",
  ],
	globals: {
		'ts-jest': {
      tsConfig: 'jest.tsconfig.json',
			babelConfig: true,
			diagnostics: false,
		},
	},
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    "/node_modules/",
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
  ],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
}
