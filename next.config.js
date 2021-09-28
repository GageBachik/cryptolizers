/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.cache = {
      cacheDirectory: path.resolve(
        __dirname,
        "node_modules/.cache/.temp_cache"
      ),
      type: "filesystem",
    };
    return config;
  },
};
