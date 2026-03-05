import * as path from "node:path";
import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";
import ReactRefreshPlugin from "@rspack/plugin-react-refresh";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import mfConfig from "./module-federation.config";

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  target: "web",
  context: __dirname,

  entry: {
    main: "./src/main.tsx",
  },

  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"],
  },

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  output: {
    uniqueName: "remote_auth",
    publicPath: "http://localhost:3002/",
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: { syntax: "typescript", tsx: true },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new rspack.HtmlRspackPlugin({ template: "./index.html" }),
    new ModuleFederationPlugin(mfConfig),
    isDev ? new ReactRefreshPlugin() : null,
  ].filter(Boolean),
});
