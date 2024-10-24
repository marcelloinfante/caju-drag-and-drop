import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
};

export default config;
