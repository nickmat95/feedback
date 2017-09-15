const path = require('path');

module.exports = {
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].js"
	},

	module: {
		rules: [
	    	{
		    	test: /\.js$/,
		    	exclude: /(node_modules|bower_components)/,
		    	use: {
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env', 'react']
		        	}
		    	}
		    },
		    {
		    	test: /\.jsx$/,
		    	exclude: /(node_modules|bower_components)/,
		    	use: {
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env', 'react']
		        	}
		    	}
		    }
		]
	}
}