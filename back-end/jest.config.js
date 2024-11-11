module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: "__tests__/coverage",
    // An array of file extensions your modules use
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
    // The test environment that will be used for testing
    testEnvironment: "node",
    // A preset that is used as a base for Jest's configuration
    preset: 'ts-jest',
    // A map from regular expressions to paths to transformers
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
    },
    // The glob patterns Jest uses to detect test files
    setupFilesAfterEnv: ['<rootDir>/src/prisma/singleton.ts'],
};