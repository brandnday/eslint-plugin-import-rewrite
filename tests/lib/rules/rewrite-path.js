/**
 * @fileoverview rewrite import path
 * @author brandnday
 */

const rule = require("../../../lib/rules/rewrite-path"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    comment: true,
    useJSXTextNode: true,
  },
});
ruleTester.run("rewrite-path", rule, {
  valid: [
    {
      code: "import text from 'text'",
      errors: [{}],
      options: [{ keyword: "tezst", replaceWith: "replacedtext" }],
    },
  ],
  invalid: [
    {
      code: "import { text } from 'someRoot/someSubFolder/somesubsubfolder';",
      errors: [{ message: "testmessage" }],
      options: [
        {
          keyword: "someRoot/someSubFolder",
          replaceWith: "~subFolder",
          message: "testmessage",
        },
      ],
    },
  ],
});
