JS practics:

- TP01: principles(functions, operations, tables...)
- TP02: export, import, modules...
- TP03: Webpack
- TP04: ES2015, PROMISE
- TP05: Angular JS
    - tp01: expressions
    - tp02: Vues et Expressions
    - tp03: Carousel d'images
    - tp04: forms
    - tp05: Comunication Server
    - tp06: Communication REST
    - tp07: Services
        - Finish Service TripsService (service)

   
        //npm start

------------------------------------------------------------------


How to add bootstrap:

    - Installer Bootstrap
        npm i bootstrap --save
    - Installer les loaders style-loader, css-loader
        npm i css-loader style-loader file-loader --save-dev
    - Compléter la configuration Webpack
{
test: /\.(css)$/,
use: ['style-loader', 'css-loader']
},

{
test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
use: 'file-loader?name=fonts/[name].[ext]'
}

    - Importer bootstrap
        import 'bootstrap/dist/css/bootstrap.css'
    - Pour la partie JS - Installer JQuery et PopperJS (Bootstrap 4)
        npm i --save jquery popper.js

    - Compléter la configuration Bootstrap
...
var webpack = require("webpack");

module.exports = {
entry: {
...
},

output: {
...
},

// pour du debogage des sources ES2015
devtool: 'cheap-module-eval-source-map',

module: {
rules: [
...
]},

plugins: [
...,

new webpack.ProvidePlugin({
	$: "jquery",
	jQuery: "jquery",
	"window.jQuery": "jquery",
	Popper:'popper.js'
})
]};

    - Importer la partie JS de boostrap
        import 'bootstrap'
