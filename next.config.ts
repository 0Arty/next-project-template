import type { NextConfig } from "next";
const path = require('path');


const nextConfig: NextConfig = {
sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use 'helpers/index' as *;`,
  },
};

export default nextConfig;
