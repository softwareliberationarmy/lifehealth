const config = {
    setupFilesAfterEnv: [
        "jest-extended"
    ],
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(test).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/cypress/"
    ]
};

module.exports = config;