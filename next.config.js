/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          },
        },
      ],
    })
 
    return config
  },
};

module.exports = nextConfig;
