var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: "app.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, exclude: /node_modules/, loader: "style-loader!css-loader"},
            {test: /\.scss$/, exclude: /node_modules/, loaders: ["style", "css", "sass"]}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}
