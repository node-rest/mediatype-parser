import assert from "assert";
import { describe, it } from "mocha";
import { parse } from "../src";

const invalidTypes = [
    " ",
    "null",
    "undefined",
    "/",
    "text/;plain",
    "text/\"plain\"",
    "text/p£ain",
    "text/(plain)",
    "text/@plain",
    "text/plain,wrong"
  ];

describe("Parse", () => {
    it("should parse text media type with html subtype", () => {
        const mediatype = parse("text/html");
        assert.strictEqual(mediatype.type, "text");
        assert.strictEqual(mediatype.subtype, "html");
    });

    it("should parse image media type with subtype svg and suffix xml", () => {
        const mediatype = parse("image/svg+xml");
        assert.strictEqual(mediatype.type, "image");
        assert.strictEqual(mediatype.subtype, "svg");
        assert.strictEqual(mediatype.suffix, "xml");
    });

    it("should lower-case type", () => {
        const mediatype = parse("IMAGE/SVG+XML");
        assert.strictEqual(mediatype.type, "image");
        assert.strictEqual(mediatype.subtype, "svg");
        assert.strictEqual(mediatype.suffix, "xml");
    });

    invalidTypes.forEach((type) => {
        it(`should throw on invalid media type ${JSON.stringify(type)}`, () => {
            assert.throws(parse.bind(null, type), /invalid media type/);
        });
    });

    it("should require argument", () => {
        const requiredString = () => {
            parse();
        };
        assert.throws(requiredString, new TypeError("argument mediaType is required"));
    });

    it("should reject non-strings", () => {
        assert.throws(parse.bind(null, 7), /mediaType.*required/);
    });
});
