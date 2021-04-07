module.exports = (key, string) => string
    .split('')
    .map((val) => String.fromCharCode(val.charCodeAt(0) - require('./key-sum')(key)))
    .join('')
