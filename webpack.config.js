module.exports = {
    entry: "./app/script.jsx",
    output: {
        filename: "output.js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            }
        ]
    }
}