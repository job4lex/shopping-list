// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "no-new": "warn",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-empty": "warn",
        "object-curly-spacing": [1, "always"],
        "semi": "warn",
        "class-property/class-property-semicolon": "warn",
        "react/prop-types": ["off"],
        "no-return-await": ["off"],
        "consistent-return": ["off"],
        "radix": ["off"],
        "no-shadow": ["off"],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "no-unused-vars": [
            "error",
            { "vars": "all", "args": "none", "ignoreRestSiblings": false }
        ],
        "no-use-before-define": [
            "error",
            { "functions": false, "classes": false, "variables": false }
        ],
        "no-param-reassign": ["error", { "props": false }],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "max-len": ["error", 85],
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "ignore"
            }
        ],
        "jsx-a11y/href-no-hash": "off",
        "arrow-parens": ["error", "always"],
        "curly": "error",
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
