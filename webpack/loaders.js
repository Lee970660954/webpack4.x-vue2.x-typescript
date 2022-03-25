const px2vwLoader = {
    loader: "px2vw-view-loader",
    options: {
        query: {
            viewportWidth: 750,
            viewportUnit: "vw",
            minPixelValue: 1,
            decimal: 6
        }
    }
}

module.exports = {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                px2vwLoader,
                { loader: "babel-loader" },
                { 
                    loader: "ts-loader",
                    options: { appendTsSuffixTo: [/\.vue$/] }
                }
            ]
        },
        {
            test: /\.vue$/,
            use: [
                { loader: "vue-loader" },
                px2vwLoader
            ]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: "style-loader",
                    options: {}
                },
                "css-loader",
                px2vwLoader,
                {
                    loader: "sass-loader"
                }
            ]
        }
    ]
}