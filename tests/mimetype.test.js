import assert from "assert";
import { describe, it } from "mocha";

import { charset } from "../src/mimetype";

describe("Mediatype Charset", () => {
    it("should return \"UTF-8\" for \"application/json\"", () => {
      assert.strictEqual(charset("application/json"), "UTF-8");
    });

    it("should return \"UTF-8\" for \"application/json; foo=bar\"", () => {
      assert.strictEqual(charset("application/json; foo=bar"), false);
    });

    it("should return \"UTF-8\" for \"application/javascript\"", () => {
      assert.strictEqual(charset("application/javascript"), "UTF-8");
    });

    it("should return \"UTF-8\" for \"application/JavaScript\"", () => {
      assert.strictEqual(charset("application/JavaScript"), "UTF-8");
    });

    it("should return \"UTF-8\" for \"text/html\"", () => {
      assert.strictEqual(charset("text/html"), "UTF-8");
    });

    it("should return \"UTF-8\" for \"TEXT/HTML\"", () => {
      assert.strictEqual(charset("TEXT/HTML"), "UTF-8");
    });

    it("should return false for unknown types", () => {
      assert.strictEqual(charset("application/x-bogus"), false);
    });

    it("should return false for invalid arguments", () => {
      assert.strictEqual(charset({}), false);
      assert.strictEqual(charset(null), false);
      assert.strictEqual(charset(true), false);
      assert.strictEqual(charset(42), false);
    });
  });
