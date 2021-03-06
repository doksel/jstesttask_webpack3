const path = require('path');
 
module.exports = {
    entry: "./app/index.jsx", 
    output:{
        path: path.resolve(__dirname, './public'),    
        publicPath: '/public/',
        filename: "bundle.js"    
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    },
    module:{
        rules:[   
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,  
                loader: "babel-loader", 
                options:{
                    presets:["env", "react"]  
                }
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            }
        ]
    }
}