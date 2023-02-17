const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@compo": path.resolve(__dirname, "src/Components"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
