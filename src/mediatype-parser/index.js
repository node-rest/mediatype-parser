
const TYPE_REGEXP = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

/**
 * Validate media type as per RfC6838 specification
 * @param {String} mediaType media type e.g text/html
 * @return {Boolean} true if a valid media type else false
 */
export function test (mediaType) {
    if (!mediaType) {
        throw new TypeError("argument mediaType is required");
    }
    if (typeof mediaType !== "string") {
        throw new TypeError("argument mediaType is required to be a string");
    }
    const isValidMediaType = TYPE_REGEXP.test(mediaType.toLowerCase());

    if (!isValidMediaType) {
        throw new TypeError("invalid media type");
    }

    return isValidMediaType;
}


/**
 * Parse media type to object.
 * example media type: application/json
 * parsed object: { type: application, subtype: json, subtype: undefined }
 * Object will contain type, subtype and suffix as per RFC6838 specification
 *
 * @param {string} mediaType
 * @public
 *
 * @return {void} Media type
 */
export function parse (mediaType) {
    test(mediaType);

    const match = TYPE_REGEXP.exec(mediaType.toLowerCase());

    const type = match[1];
    let subtype = match[2];
    let suffix;

    const index = subtype.lastIndexOf("+");
    if (index !== -1) {
        suffix = subtype.substring(index + 1);
        subtype = subtype.substring(0, index);
    }

    return {
        type,
        subtype,
        suffix
    };
}
