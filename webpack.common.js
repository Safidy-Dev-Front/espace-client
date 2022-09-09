const path = require('path');

module.exports={
    entry:{
        app: ['./src/index.js','./src/sass/main.scss'],
    },
    output: {  
        path: path.join(__dirname, '/assets'),  
        filename: 'index_bundle.js'  
     },
     module:{
        rules: [  
            {  
               test: /\.jsx?$/,  
               exclude: /node_modules/,  
           use: {  
                 loader: "babel-loader",  
               }  
            } ,
            {
                test: /\.scss$/i,
                use: [
                {
                loader: 'file-loader',
                options: {
                name: 'css/main.css',
                }
                },
                // Compile le Sass en CSS
                "sass-loader"
                ],
                }, 
         ]  
     }
}