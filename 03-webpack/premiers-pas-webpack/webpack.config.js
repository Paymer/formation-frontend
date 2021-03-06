
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
// définition des points d'entrée
// il est possible de définir plusieurs points d'entrée
entry: './app/index.js',
output: {

path: path.resolve(__dirname, 'dist'),
filename: "bundle.js"
},
plugins: [
new UglifyJSPlugin(),
new HtmlWebpackPlugin() 
]
}