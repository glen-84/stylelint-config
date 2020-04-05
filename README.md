# Stylelint config

A shareable [stylelint](https://stylelint.io/) config for Sass projects.

## Installation

[Authenticate](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) with `npm login --registry=https://npm.pkg.github.com/` using your GitHub username and a personal access token (with the `read:packages` scope).

1. In the same directory as your `package.json` file, create or edit a `.npmrc` file to include the following line:
    ```npmrc
    @glen-84:registry=https://npm.pkg.github.com
    ```
2. Run `npm install @glen-84/stylelint-config --save-dev`.
3. Add `"@glen-84/stylelint-config"` to the `extends` property in your `.stylelintrc.js` file.

### Important notes

* If your application uses font icons, you will need to customize the `font-family-no-missing-generic-family-keyword` rule configuration in your `.stylelintrc.js` file.
    * e.g. `"font-family-no-missing-generic-family-keyword": [true, {ignoreFontFamilies: ["FontAwesome"]}]`
* If your application uses custom elements, you will need to customize the `selector-type-no-unknown` rule configuration in your `.stylelintrc.js` file.
    * e.g. `"selector-type-no-unknown": [true, {ignoreTypes: [/^app-/]}]` (to ignore custom elements beginning with "app-")

## Development

Run `npm install` to install the project dependencies.

### Publishing a new version

[Authenticate](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) with `npm login --registry=https://npm.pkg.github.com/` using your GitHub username and a personal access token (with the `write:packages` scope).

1. Run `npm version patch` (replace `patch` [as necessary](https://docs.npmjs.com/cli/version)) to increase the version number.
2. Run `git push && git push --tags` to push the version commit and tag.
3. Run `npm publish` to publish the new version.

## Unused rules

### Has issues

* `no-descending-specificity`
    * https://github.com/stylelint/stylelint/issues/3738
    * https://github.com/stylelint/stylelint/issues/4010
    * https://github.com/stylelint/stylelint/issues/4189
* `no-unknown-animations`
    * https://github.com/stylelint/stylelint/issues/4088
* `selector-no-qualifying-type`
    * https://github.com/stylelint/stylelint/issues/4410

### No use for

* `at-rule-name-newline-after`
* `at-rule-no-unknown` – using `scss/at-rule-no-unknown` instead.
* `at-rule-property-requirelist`
* `at-rule-whitelist` – using `at-rule-blacklist` instead.
* `block-closing-brace-space-after`
* `block-opening-brace-newline-before`
* `color-no-hex`
* `comment-word-blacklist`
* `declaration-block-semicolon-newline-before`
* `declaration-property-unit-blacklist`
* `declaration-property-value-whitelist`
* `function-blacklist`
* `function-comma-newline-before` – using `function-comma-space-before` instead.
* `function-url-scheme-blacklist` – using `function-url-scheme-whitelist` instead.
* `function-whitelist`
* `media-feature-name-blacklist`
* `media-feature-name-value-whitelist`
* `media-feature-name-whitelist`
* `media-query-list-comma-newline-before` – using `media-query-list-comma-space-before` instead.
* `no-invalid-double-slash-comments` – applies only to CSS, not Sass.
* `property-blacklist`
* `property-whitelist`
* `selector-attribute-operator-blacklist`
* `selector-attribute-operator-whitelist`
* `selector-combinator-blacklist`
* `selector-combinator-whitelist`
* `selector-id-pattern` – ID selectors may not be used.
* `selector-list-comma-space-after` – using `selector-list-comma-newline-after` instead.
* `selector-max-attribute`
* `selector-max-class`
* `selector-max-combinators`
* `selector-max-compound-selectors`
* `selector-max-pseudo-class`
* `selector-max-specificity`
* `selector-max-type`
* `selector-max-universal`
* `selector-nested-pattern`
* `selector-pseudo-class-blacklist`
* `selector-pseudo-class-whitelist`
* `selector-pseudo-element-blacklist`
* `selector-pseudo-element-whitelist`
* `time-min-milliseconds`
* `unit-blacklist`
* `unit-whitelist`
* `value-list-comma-newline-before` – using `value-list-comma-space-before` instead.

## Used rules with issues

* `declaration-property-value-blacklist`
    * https://github.com/stylelint/stylelint/issues/4117
