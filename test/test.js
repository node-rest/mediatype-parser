import assert from "assert";
import typer from ".";

describe("typer.parse(string)", function () {
    it("should parse basic type", function () {
        const type = typer.parse("text/html")
        console.log("typer --->>>>", type);
        assert.strictEqual(type.type, "text")
        assert.strictEqual(type.subtype, "html")
    });
});
