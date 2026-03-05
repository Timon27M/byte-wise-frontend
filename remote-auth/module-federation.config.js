const deps = require("./package.json").dependencies;

module.exports = {
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./AuthApp": "./src/AuthApp.tsx",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react,
      eager: true,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
      eager: true,
    },
  },
};