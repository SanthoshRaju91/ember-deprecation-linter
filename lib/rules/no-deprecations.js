/**
 * @fileoverview Plugin for linting ember deprecation patterns
 * @author Santhosh Raju
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Plugin for linting ember deprecation patterns",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            "Identifier": function(node) {
                if (node.name === "Observer") {
                    context.report({
                      node: node,
                      message: "Please try not to use Ember observers"
                    });
                  }

                  if (node.name === "observes") {
                    let message =
                      "Use of .observes() is not supported to be a proper usage.";
            
                    context.report({
                      node: node,
                      message: message
                    });
                  }
            },

            "Literal": function(node) {
                const CalleeExpression = node.parent.callee || {};
      
                if(CalleeExpression.type === "MemberExpression") {
                    if(node.parent.callee.property.name === 'on') {
                        const nodeName = node.name;
                        const message = "Using .on(" + nodeName + ") is deprecated"
                        context.report({
                            node: node,
                            message: message                                 
                        })
                    }
                }
            }
        };
    }
};
// export default function(context) {
//     return {
//       TemplateLiteral(node) {
//         context.report(node, "Do not use template literals");
//       },
  
//       Identifier(node) {
//         if (node.name === "console") {
//           context.report({
//             node: node,
//             message: "console.log should not be used"
//           });
//         }
  
//         if (node.name === "Observer") {
//           context.report({
//             node: node,
//             message: "Please try not to use Ember observers"
//           });
//         }
  
//         if (node.name === "observes") {
//           let message =
//             "Use of .observes() is not supported to be a proper usage.";
  
//           context.report({
//             node: node,
//             message: message
//           });
//         }
//       },
      
//       Literal(node) {      
//             const CalleeExpression = node.parent.callee || {};
        
//           if(CalleeExpression.type === "MemberExpression") {
//               if(node.parent.callee.property.name === 'on') {
//                     const nodeName = node.name;
//                     const message = "Using .on(" + nodeName + ") is deprecated"
//                   context.report({
//                       node: node,
//                         message: message                                 
//                   })
//               }
//           }
//       }
//     };
//   }
  

