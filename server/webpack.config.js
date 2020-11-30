const CopyPlugin = require('copy-webpack-plugin');
const root = require('app-root-path').path;
module.exports = {
    entry: `${root}/index.ts`,
    target: 'node',
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'index.js', // output file
        path: `${root}/dist`,
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modules: ['node_modules', `${root}/src`]
    },
    module: {
        rules: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.tsx?$/,
            exclude: ['/node_modules/'],
            loader: 'ts-loader'
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: `${root}/package.json`, },
              { from: `${root}/README.md` },
            ],
        }),
    ]
}; 