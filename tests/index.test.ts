// placeholder code
import { add } from "../src/index";

// test add
describe("test add function in index file", () => {
  test("Adding two numbers", () => {
    expect(add(2, 1)).toBe(3);
  });
});
