let babelOptions = {
    "presets": ["es2015","react", "stage-0"]
};
module.exports = {
 entry: './src/index.tsx',
 output: {
   filename: './dist/bundle.js',
     path: __dirname
 },
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                }
            ]
        }]
    },
 resolve: {
   extensions: [".tsx", ".ts", ".js", "json"]
 },
};
