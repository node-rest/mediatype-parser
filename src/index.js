
const TYPE_REGEXP = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
/**
 * Class for MediaType object.
 * @public
 */
class MediaType {
    /**
     * @param {*} void
     */
    constructor () {
        this.type = "";
        this.subtype = "";
        this.suffix = "";
    }

    /**
     * Parse media type to object.
     * Object will contain type, subtype and suffix as per RFC6838 specification
     *
     * @param {string} string
     * @public
     *
     * @return {void} Media type
     */
    parse (string) {
        if (!string) {
            throw new TypeError("argument string is required");
        }

        if (typeof string !== "string") {
            throw new TypeError("argument string is required to be a string");
        }

        const match = TYPE_REGEXP.exec(string.toLowerCase());
        if (!match) {
            throw new TypeError("invalid media type");
        }

        const type = match[1];
        let subtype = match[2];
        let suffix;

        const index = subtype.lastIndexOf("+");
        if (index !== -1) {
            suffix = subtype.substr(index + 1);
            subtype = subtype.substr(0, index);
        }

        this.type = type;
        this.subtype = subtype;
        this.suffix = suffix;
    }
}

export const mediatype = new MediaType();
