const path = require('path');

module.exports = {
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors'),
        index: path.join(__dirname, 'src', 'index')
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /dist/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0', 'react'],
                    }
                }]
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /dist/],
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-0'],
                            plugins: ['react-html-attrs', 'transform-decorators-legacy']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
                // или вот так loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }
                ]
                // или вот так loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]"
            }
        ]
    },

    devtool: 'cheap-eval-source-map',

    devServer: {
        inline: true,
        contentBase: './dist',
        proxy: [{
            path: '/api/',
            target: 'http://localhost:3001'
        }],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};