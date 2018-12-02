# eslint-plugin-ember-deprecation

Plugin for linting deprecation patterns in ember project like. .on(&#39;init&#39;)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ember-deprecation`:

```
$ npm install eslint-plugin-ember-deprecation --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ember-deprecation` globally.

## Usage

Add `ember-deprecation` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ember-deprecation"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ember-deprecation/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





