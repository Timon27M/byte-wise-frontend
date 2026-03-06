const deps = require("./package.json").dependencies;

module.exports = {
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./AuthApp": "./src/index.ts",
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
    "react-router-dom": {
      singleton: true,
      requiredVersion: deps["react-router-dom"],
      eager: true,
    },
  },
};
