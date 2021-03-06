module.exports = {
  "processors": [["stylelint-processor-styled-components", {
    "moduleName": "styled-components",
    "importName": "default",
    "strict": false,
    "ignoreFiles": [],
    "parserPlugins": [
      "jsx",
      ["decorators", { "decoratorsBeforeExport": true }],
      "classProperties",
      "exportExtensions",
      "functionBind",
      "functionSent"
    ]
  }]]
}