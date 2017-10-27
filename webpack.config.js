var path = require('path');

module.exports = {
    entry: './src/drabs.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    resolve: {
        fallback: [path.join(__dirname, 'node_modules')]
    },
    // Same issue, for loaders like babel
    resolveLoader: {
        fallback: [path.join(__dirname, 'node_modules')]
    },
};
