const path = require("path");
console.log("here in web");
module.exports = async ({ config }) => {
  // styles
  config.module.rules.push({
    test: /\.(css)$/,
    use: ["resolve-url-loader"],
    include: path.resolve(__dirname, "../"),
  });
  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: "file-loader",
        query: {
          name: "[name].[ext]",
        },
      },
    ],
    include: path.resolve(__dirname, "../"),
  });

  return config;
};
