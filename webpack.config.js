var path = require('path');

module.exports = {
    entry: [
        './app/app.js',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    
    output: {
        filename: "public/js/bundle.js",
        sourceMapFilename: "public/js/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}
