"use strict"; /*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "repram",
              			"path": "repram/repram.js",
              			"file": "repram.js",
              			"module": "repram",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/repram.git",
              			"test": "repram-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Reorder function parameter.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"optfor": "optfor",
              			"shft": "shft",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var falzy = require("falzy");
var optall = require("optall");
var shft = require("shft");
var zelf = require("zelf");

var repram = function repram(procedure, parameter) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"procedure:required": "function",
                                                    			"parameter:required": [
                                                    				"string",
                                                    				"function",
                                                    				BOOLEAN,
                                                    				FUNCTION,
                                                    				NUMBER,
                                                    				OBJECT,
                                                    				UNDEFINED,
                                                    				STRING,
                                                    				SYMBOL,
                                                    				"..."
                                                    			]
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (falzy(procedure) || typeof procedure != "function") {
		throw new Error("invalid procedure");
	}

	parameter = shft(arguments);

	var self = zelf(this);

	return function delegate() {
		return procedure.apply(self, optall(arguments, parameter));
	};
};

module.exports = repram;

//# sourceMappingURL=repram.support.js.map