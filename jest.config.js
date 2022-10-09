module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  trasnform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
