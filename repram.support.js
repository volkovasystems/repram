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
              			"budge": "budge".
              			"falzy": "falzy",
              			"optfor": "optfor",
              			"protype": "protype",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var budge = require("budge");
var falzy = require("falzy");
var optfor = require("optfor");
var protype = require("protype");
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
                                                    				SYMBOL
                                                    			]
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (falzy(procedure) || !protype(procedure, FUNCTION)) {
		throw new Error("invalid procedure");
	}

	parameter = budge(arguments);

	var self = zelf(this);

	return function delegate() {
		var attribute = arguments;

		return procedure.apply(self, parameter.map(function (parameter) {
			return optfor(attribute, parameter);
		}));
	};
};

module.exports = repram;

//# sourceMappingURL=repram.support.js.map