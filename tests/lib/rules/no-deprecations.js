/**
 * @fileoverview Plugin for linting ember deprecation patterns
 * @author Santhosh Raju
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-deprecations"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-deprecations", rule, {

    valid: [
        `init()`
    ],

    invalid: [
        {
            code: `initial: function() { }.on('init');`,
            errors: [{
                message: "Using .on('init') is deprecated ",
                type: "Literal"
            }]
        }
    ]
});