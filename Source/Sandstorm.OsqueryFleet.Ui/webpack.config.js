module.exports = {
    entry: {
        main: './Resources/Private/index.js'
    },
    output: {
        filename: 'Resources/Public/dist/index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    }
}
