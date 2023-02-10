# Typescript Template

A template for using Typescript

Usual Setup Steps

Create a src folder for the source code and a test folder for the unit tests
1.) mkdir src
2.) mkdir tests

Use npm to initiate a new project at the root directory
3.) npm init -y

Add TypeScript as a development dependency
4.) npm i typescript --save-dev

Generate a tsconfig.json and modify it's setting
5.) tsc --init
6.) changes the setting in tsconfig.json to your prefs.

Add Jest as a development dependency
7.) npm install jest --save-dev

Install the ts-jest package that contains a preprocessor with source map between TypeScript and Jest
8.) npm install ts-jest --save-dev

Install the type definitions for Jest
9.) npm install @types/jest --save-dev

Create the entry point file that will be transpiled to js.
10.) Create an index.ts file in the 'src' directory where you will place your code - in our test an empty function called add() which also must be exported as a module
i.e.,
export function add(strNumbers: string): number {
// TODO: return sum of numbers in string
return -1;
}

OR
function sum(a, b) {
return a + b;
}
module.exports = sum;

Create a matching test file.
11.) Create a file inside tests named index.test.ts

Import the code you will test
12.) We import the add function from the index.ts file to out jest test file. Then, we write a new test suite that describes the function and inside that, we creates the first test based on our tests/rules
i.e.,
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});

import { add } from "../src/index";
describe("test index file", () => {
test("empty string should result in zero", () => {
expect(add("")).toBe(0);
});
});

Create jest config file | or use jest --init
13.) Create a “jest.config.js” at the root of the project that contains:

module.exports = {
transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  testRegex: '/tests/.*\\.(test|spec)?\\.(ts|tsx)$',
moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};

Set up your test to run
14.)Add the following section to your package.json:

{
"scripts": {
"test": "jest --watchAll --verbose --coverage"
}
}

Run tsc and Run tests in terminals
15.) tsc --watch and npm test
