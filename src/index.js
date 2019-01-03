/**
 * Return Hello message
 * @param {string} name
 * @returns {string}
 * @example
 * hello("john"); // => "Hello, john"
 */
function hello(name) {
    return `Hello, ${name}`;
}

/**
 * update property with `propertyValue` if the `propertyName` does not exists
 * @param {*} object
 * @param {string} propertyName
 * @param {string} propertyValue
 * @param {{force: boolean}} options
 * @example
 * const object = {};
 * update(object, "key", "value", { force: true })
 * console.log(object); // { key: "value" }
 */
const updateProp = (object, propertyName, propertyValue, options = { force: false }) => {
    if (object[propertyName] && options.force) {
        object[propertyName] = propertyValue;
    } else if (object[propertyName]) {
        // no update
    } else {
        object[propertyName] = propertyValue;
    }
};

/**
 * @class
 */
class Myclass {
    /**
     * report message
     * @param {string} message
     */
    report(message) {

    }
}

export {
    hello,
    updateProp
}
