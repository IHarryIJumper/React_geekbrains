const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "src", "dist"),
        port: 8080,
        index: "index.html"
      },
    mode: 'development',
    entry: path.join(__dirname, 'src', 'app.js'),
    output: {
        path: path.join(__dirname, 'src', 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
        },
        {
            test: /\.jsx?$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    exclude: /(node_modules)/
                }
            }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader" // compiles Sass to CSS
                }
            ]
        }

        ]
    },  
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "source-map"
};