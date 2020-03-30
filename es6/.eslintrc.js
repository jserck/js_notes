module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    parser: 'babel-eslint',
    "extends": [
      'standard'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    }
};