import db from "mime-db";

import {
    test
} from "../mediatype-parser";

/**
 * Get the default charset for a MIME type.
 * e.g charset: UTF-8
 *
 * @param {string} type
 * @return {boolean|string} charset or false
 */
export function charset (type) {
    try {
        if (!type || typeof type !== "string") {
            return false;
        }

        const isMediatype = test(type.toLowerCase());
        const mime = isMediatype && db[type.toLowerCase()];

        if (mime && mime.charset) {
            return mime.charset;
        }

        if (mime) {
            return "UTF-8";
        }

        return false;
    } catch (e) {
        return false;
    }
}
