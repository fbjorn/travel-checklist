module.exports = {
  contextSeparator: '_',
  // Key separator used in your translation keys

  createOldCatalogs: false,
  // Save the \_old files

  defaultNamespace: 'translations',
  // Default namespace used in your i18next config

  defaultValue: '',
  // Default value to give to empty keys

  indentation: 2,
  // Indentation of the catalog files

  keepRemoved: false,
  // Keep keys from the catalog that are no longer in code

  keySeparator: '.',
  // Key separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

  // see below for more details
  lexers: {
    hbs: ['HandlebarsLexer'],
    handlebars: ['HandlebarsLexer'],

    htm: ['HTMLLexer'],
    html: ['HTMLLexer'],

    js: ['JavascriptLexer'], // if you're writing jsx inside .js files, change this to JsxLexer
    jsx: ['JsxLexer'],
    mjs: ['JavascriptLexer'],

    ts: [
      {
        lexer: 'TypescriptLexer',
        attr: 'i18nKey', // Attribute for the keys

        // compiler options (https://www.typescriptlang.org/docs/handbook/compiler-options.html)
        // note that jsx MUST be set to Preserve, or your strings will not be extracted.
        tsOptions: {
          jsx: 'Preserve',
          target: 'esnext',
          lib: ['es2017', 'dom'],
          experimentalDecorators: true,
        },
      },
    ],

    default: ['JavascriptLexer'],
  },

  lineEnding: 'auto',
  // Control the line ending. See options at https://github.com/ryanve/eol

  locales: ['en', 'ru'],
  // An array of the locales in your applications

  namespaceSeparator: ':',
  // Namespace separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()

  input: './src/app/**/*.{js,ts,tsx}',
  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file

  reactNamespace: true,
  // For react file, extract the defaultNamespace - https://react.i18next.com/components/translate-hoc.html
  // Ignored when parsing a `.jsx` file and namespace is extracted from that file.

  sort: false,
  // Whether or not to sort the catalog

  useKeysAsDefaultValue: false,
  // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
  // The option `defaultValue` will not work if this is set to true

  verbose: false,
  // Display info about the parsing including some stats
};
