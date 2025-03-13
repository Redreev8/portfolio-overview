# Demo
[vercel](https://portfolio-overview-three.vercel.app/)

## Stack

- react
- vite
- ts
- redux/toolkit
- sass
- @reduxjs/toolkit
- axios
- classnames
- WebSocket

## Instructions for launching

1. ```npm i``` скачать зависимости
2. ```npm run build``` собрать проект
3. ```npm run preview``` запустить проект

## ESLint configuration
### Commands ```npm run lint```
```js
export default tseslint.config({
    eslintPluginPrettierRecommended,
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
})
```

## Prettier configuration

```json
{
    "trailingComma": "all",
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": true
}
```

## Stylelint configuration
### Commands ```npm run lint:scss```
```json
{
    "extends": [
        "stylelint-config-standard-scss",
        "stylelint-config-clean-order"
    ],
    "plugins": ["stylelint-order"],
    "rules": {
        "scss/dollar-variable-empty-line-before": null,
        "no-empty-source": null,
        "declaration-empty-line-before": null,
        "selector-class-pattern": null,
        "keyframes-name-pattern": null
    }
  }
```