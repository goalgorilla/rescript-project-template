const fs = require('fs')
const esbuild = require('esbuild')

const configs = {
  "client": {
    bundle: true,
    entryPoints: ["src/Index.mjs"],
    logLevel: "info",
    minify: true,
    outfile: "public/bundle.js",
    sourcemap: true,
    treeShaking: true,
  },
}

// If we're run directly then we build.
if (require.main === module) {
  for (const [package, config] of Object.entries(configs)) {
    console.info(`Building ${package}...`);
    esbuild.buildSync(config);
  }
  console.info("Done")
}
else [
  module.exports = { configs }
]
