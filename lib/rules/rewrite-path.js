/**
 * @fileoverview rewrite import path
 * @author brandnday
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "layout", 
    docs: {
      description: "rewrite import path",
      category: "Fill me in",
      recommended: false,
      url: null, 
    },
    fixable: "code", 
    schema: [
      {
        anyOf: [
          {
            type: "array",
            items: {
              type: "object",
              properties: {
                keyword: { type: "string" },
                replaceWith: { type: "string" },
              },
              additionalProperties: false,
            },
          },
          { type: "object" },
        ],
      },
    ],
  },

  create(context) {
    var checkIsImportValid = (node) => {
      if (!node || !node.source || !node.source.value) {
        return;
      }
      var value = node.source.value;
      context.options.forEach(function (item) {
        if (value.includes(item.keyword)) {
          var resolvedText = value.replace(item.keyword, item.replaceWith);
          context.report({
            fix: (fixer) =>
              fixer.replaceTextRange(
                [node.source.range[0] + 1, node.source.range[1] - 1],
                resolvedText
              ),
            node: node.source,
            message: item.message,
          });
        }
      });
    };

    return {
      ImportDeclaration: checkIsImportValid,
    };
  },
};
