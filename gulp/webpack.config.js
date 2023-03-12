const gulpConf = require("../gulp.config.js");

const addConf = {
  modeMap: {
    dev: "development",
    development: "development",
    prod: "production",
    production: "production",
  },
};

const webpackTSConf = {
  mode: addConf.modeMap[gulpConf.mode] || "development",
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        loader: "ts-loader",
        options: {
          configFile: "gulp/tsconfig.json",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};

const webpackJSConf = {
  mode: addConf.modeMap[gulpConf.mode] || "development",
  devtool: "source-map",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js"],
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env", { targets: "defaults" }]],
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};

exports = module.exports = () => {
  if (gulpConf.scriptType == "js") return webpackJSConf;
  else if (gulpConf.scriptType == "ts") return webpackTSConf;
};
