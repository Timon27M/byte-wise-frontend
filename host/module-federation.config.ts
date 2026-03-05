const deps = require("./package.json").dependencies;

export const mfConfig = {
  name: "byte_wise_frontend",
  filename: "remoteEntry.js",
  remotes: {
    auth: "auth@http://localhost:3002/remoteEntry.js",
  },
  exposes: {
    "./App": "./src/App.tsx",
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
    "react-redux": {
      singleton: true,
      requiredVersion: deps["react-redux"],
    },
    "@reduxjs/toolkit": {
      singleton: true,
      requiredVersion: deps["@reduxjs/toolkit"],
    },
    "@mui/material": {
      singleton: true,
      requiredVersion: deps["@mui/material"],
    },
    "@emotion/react": {
      singleton: true,
    },
    "@emotion/styled": {
      singleton: true,
    },
    "react-router-dom": {
      singleton: true,
      requiredVersion: deps["react-router-dom"],
    },
  },
};
