const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    console.log('env', env);
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
    
        },
        plugins: [ CSSExtract ],
        devtool: isProduction ? 'source-map':'inline-source-map', // can see which source file has a bug
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};