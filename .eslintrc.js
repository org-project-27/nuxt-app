// eslint-disable-next-line no-undef
export default {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugins:vue/vue3-essential'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        // 0 off, 1 warning, 2 error
        'indent': [
            'error',
            4
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'max-len': [1, {
            'code': 110,
            'comments': 110,
            // eslint-disable-next-line max-len
            'ignorePattern': '^import\\s.+\\sfrom\\s.+;$', // max-length warning disabled for imports
            'ignoreUrls': true
        }],
        'no-cond-assign': 2,
        'no-dupe-else-if': 2,
        'no-duplicate-case': 2,
        'vue/no-bare-strings-in-template': [2, {
            'allowlist': [
                // eslint-disable-next-line max-len
                '(', ')', ',', '.', '&', '+', '-', '=', '*', '/', '#', '%',
                '!', '?', ':', '[', ']', '{', '}', '<', '>',
                '\u00b7', '\u2022', '\u2010', '\u2013', '\u2014', '\u2212', '|'
            ],
            'attributes': {
                // eslint-disable-next-line max-len
                '/.+/': ['title', 'aria-label', 'aria-placeholder',
                    'aria-roledescription', 'aria-valuetext'],
                'input': ['placeholder'],
                'img': ['alt']
            },
            'directives': ['v-text']
        }],
    },
    // eslint-disable-next-line max-len
    ignorePatterns: ['jquery.js', 'jquery-ui.js', 'xml2json', 'script', 'integrator', 'imagesloaded', 'ima', 'client', 'bridge.html', 'external']
};