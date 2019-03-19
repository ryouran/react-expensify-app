const path = require('path');

module.exports = {
    entry: './src/app.js', // relative path is fine!
    output: {
        path: path.join(__dirname, 'public'), // need absolute path!
        filename: 'bundle.js'
    },
    // loader
    module: { 
        // specifiy how you want to load the module
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // regex any files that end with .js
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]

    },
    devtool: 'cheap-module-eval-source-map', // can see which source file has a bug
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
}