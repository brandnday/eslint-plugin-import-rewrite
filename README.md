# eslint-plugin-import-rewrite


This is a simple Node.js module for eslint plugin which handles import rewrite. At this moment, the plugin can only replace a keyword in import path. This plugin might be useful if the project has multiple import alias or tsconfig alias.

## Installation

```shell
npm install eslint-plugin-import-rewrite --save-dev

or

yarn add -D eslint-plugin-import-rewrite
```

## Usage

Write down your import path aliases and path that needs to be rewritten.

```js
// .eslintrc.js
module.exports = {
  plugins: ['import-rewrite'],
    parser: '@typescript-eslint/parser',
    ...
    rules: {
        'import-rewrite/rewrite-path': [
            'error',
            [
                {
                    keyword: 'lib',
                    replaceWith: '~lib',
                    message:
                        'Replace lib to ~lib'
                },
            ]
        ],
};
```

One of the way to add aliases if you are using typescript is using path alias, you can add the aliases to the paths in `.tsconfig.json`.

```js
// .tsconfig.json
{
    "compilerOptions": {
        ...
        "paths": {
            "~src": ["src/*"],
        },
        ...
    }
}
```

## References

- eslint-plugin-import-path
- [`eslint generator`](https://www.npmjs.com/package/generator-eslint)
- https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353
