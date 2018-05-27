// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
            {
                test: /^(?!.*\.spec\.js$).*\.js$/,
                use: ['babel-loader', 'source-map-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'awesome-typescript-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}, 'postcss-loader',],
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(gif|png|jpg|svg|jpeg|woff|woff2|eot|ttf)$/i,
                loader: 'file-loader'
            }
        ],
    },
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new CopyWebpackPlugin([
            { from: resolve(__dirname, '../../src/assets'), to: 'assets'},
            { from: resolve(__dirname, '../../src/cookies.html')}
        ]),
        new HtmlWebpackPlugin({template: 'index.html.ejs',}),
    ],
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
    performance: {
        hints: false,
    },
};
