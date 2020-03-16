import assert from "assert";
import { describe, it } from "mocha";
import { parse } from "../src";

describe("Parse", () => {
    it("should parse basic type", () => {
        const type = parse("text/html");
        console.log("typer --->>>>", type);
        assert.strictEqual(type.type, "text");
        assert.strictEqual(type.subtype, "html");
    });
});
