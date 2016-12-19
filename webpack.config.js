module.exports = {
    entry: "./es6.js",
    output: {
        path: "javascripts",
        filename: "main.js"
    },
    module: {
        loaders: [
            { test: /\.js/, loader: "babel" }
        ]
    }
};