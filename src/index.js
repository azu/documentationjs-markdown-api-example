/**
 * Return Hello message
 * @param {string} name
 * @returns {string}
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
