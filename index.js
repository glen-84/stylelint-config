"use strict";

const kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

module.exports = {
    plugins: ["stylelint-scss"],
    // IMPORTANT: Please keep these rules in alphabetical order.
    rules: {
        // TODO: Remove "exceptProperties" option when browser support improves.
        // See https://caniuse.com/#feat=mdn-css_properties_opacity_percentages.
        "alpha-value-notation": ["percentage", {exceptProperties: ["opacity"]}],
        "at-rule-disallowed-list": ["debug", "warn"],
        "at-rule-empty-line-before": [
            "always",
            {
                except: ["blockless-after-same-name-blockless", "first-nested"],
                ignore: ["after-comment"]
            }
        ],
        "at-rule-name-case": "lower",
        "at-rule-name-space-after": "always-single-line",
        "at-rule-no-vendor-prefix": true,
        "at-rule-semicolon-newline-after": "always",
        "at-rule-semicolon-space-before": "never",
        "block-closing-brace-empty-line-before": "never",
        "block-closing-brace-newline-after": "always",
        "block-closing-brace-newline-before": "always-multi-line",
        "block-closing-brace-space-before": "always-single-line",
        "block-no-empty": true,
        "block-opening-brace-newline-after": "always-multi-line",
        "block-opening-brace-space-after": "always-single-line",
        "block-opening-brace-space-before": "always",
        "color-named": "never",
        // See https://elad.medium.com/why-css-hsl-colors-are-better-83b1e0b6eead.
        "color-no-hex": true,
        "comment-empty-line-before": [
            "always",
            {
                except: ["first-nested"],
                ignore: ["stylelint-commands"]
            }
        ],
        "comment-no-empty": true,
        "comment-pattern": /^([^a-z]|prettier-ignore|stylelint-)/,
        "comment-whitespace-inside": "always",
        "custom-media-pattern": kebabCase,
        "custom-property-empty-line-before": [
            "always",
            {
                except: ["after-custom-property", "first-nested"],
                ignore: ["after-comment", "inside-single-line-block"]
            }
        ],
        "custom-property-pattern": kebabCase,
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-custom-properties": true,
        "declaration-block-no-duplicate-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [
            "always",
            {
                except: ["after-declaration", "first-nested"],
                ignore: ["after-comment", "inside-single-line-block"]
            }
        ],
        "declaration-no-important": true,
        "declaration-property-unit-allowed-list": [
            {
                "/^font(-size)?$/": ["em", "rem"],
                // See https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#Prefer_unitless_numbers_for_line-height_values.
                "line-height": []
            },
            {
                ignore: ["inside-function"]
            }
        ],
        "declaration-property-value-disallowed-list": [
            {
                // See https://stackoverflow.com/a/8962837/221528.
                "/^transition(-property)?$/": ["/\\ball\\b/"]
            },
            {
                // TODO: See https://github.com/stylelint/stylelint/issues/4117.
                message: "Avoid using 'transition: all', for performance reasons."
            }
        ],
        "font-family-name-quotes": "always-unless-keyword",
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        // See https://github.com/w3c/csswg-drafts/issues/4048.
        "font-weight-notation": "numeric",
        "function-calc-no-invalid": true,
        "function-calc-no-unspaced-operator": true,
        "function-comma-newline-after": "always-multi-line",
        "function-comma-space-after": "always-single-line",
        "function-comma-space-before": "never",
        "function-disallowed-list": [
            // See https://elad.medium.com/why-css-hsl-colors-are-better-83b1e0b6eead.
            "rgb",
            "rgba"
        ],
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-url-no-scheme-relative": true,
        "function-url-quotes": "always",
        "function-url-scheme-allowed-list": [],
        "function-whitespace-after": "always",
        "hue-degree-notation": "angle",
        "indentation": 4,
        "keyframe-declaration-no-important": true,
        "keyframes-name-pattern": kebabCase,
        "length-zero-no-unit": true,
        "linebreaks": "unix",
        "max-empty-lines": 1,
        "max-line-length": 120,
        "max-nesting-depth": [2, {ignore: ["blockless-at-rules", "pseudo-classes"]}],
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-name-no-vendor-prefix": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "named-grid-areas-no-invalid": true,
        "no-duplicate-at-import-rules": true,
        "no-duplicate-selectors": true,
        "no-empty-first-line": true,
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-position-at-import-rule": true,
        "no-irregular-whitespace": true,
        "no-missing-end-of-source-newline": true,
        "number-leading-zero": "always",
        "number-max-precision": 3,
        "number-no-trailing-zeros": true,
        "property-case": "lower",
        "property-no-unknown": true,
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [
            "always-multi-line",
            {
                except: ["first-nested"],
                ignore: ["after-comment"]
            }
        ],
        "scss/at-rule-no-unknown": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-attribute-quotes": "always",
        "selector-class-pattern": kebabCase,
        "selector-combinator-space-after": "always",
        "selector-combinator-space-before": "always",
        "selector-descendant-combinator-no-non-space": true,
        "selector-list-comma-newline-after": "always",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-max-id": 0,
        "selector-no-vendor-prefix": true,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "string-quotes": "double",
        "unicode-bom": "never",
        "unit-case": "lower",
        "unit-no-unknown": true,
        "value-keyword-case": "lower",
        "value-list-comma-newline-after": "always-multi-line",
        "value-list-comma-space-after": "always-single-line",
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
        "value-no-vendor-prefix": true
    },
    reportNeedlessDisables: true,
    reportInvalidScopeDisables: true,
    reportDescriptionlessDisables: true
};
