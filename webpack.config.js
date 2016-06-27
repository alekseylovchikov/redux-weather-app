var path = require('path');

module.exports = {
    entry: [
        './src/app'
    ],
    output: {
        path: path.join(__dirname, 'app/js'),
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};