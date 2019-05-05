![npm](https://img.shields.io/npm/v/eslint-config-manpacker-typescript.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/eslint-config-manpacker-typescript.svg)
![npm](https://img.shields.io/npm/dw/eslint-config-manpacker-typescript.svg)
![NPM](https://img.shields.io/npm/l/eslint-config-manpacker-typescript.svg)
<br><br>
![nodei.co](https://nodei.co/npm/eslint-config-manpacker-typescript.png?downloads=true&downloadRank=true&stars=true)
<br>
## Explain
This project uses parser <code>"@typescript-eslint/parser"</code><br/>
And plugin <code>["@typescript-eslint"](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)</code>.<br> Inherits <code>"typescript", "manpacker"</code>


## Install
Rely on <code>"eslint", "typescript"</code>
```
npm install eslint typescript eslint-config-manpacker-typescript  -D
```
## Usage

- Add &nbsp;<code>.eslintrc</code> &nbsp; file to your project. &nbsp;<br/>
 Or <code>.eslintrc</code> file does not exist, Create a new file.

```
npx eslint --init
```

Configuration content of file.

```
{
  "extends": ["manpacker-typescript"]
}
```
- You can add a configuration entry to the <code>package.json</code> file as follows.

```
"eslintConfig": {
  "extends": ["manpacker-typescript"]
}
```
Refer to the following configuration.<br>
Example:<br>
```
"eslintConfig": {
  "root": true,
  "extends": ["manpacker-typescript"],
  "parserOptions": {
    "project": "./tsconfig.json",
  },
  "rules": {}
}
```

## Npm
[link](https://www.npmjs.com/package/eslint-config-manpacker-typescript)
