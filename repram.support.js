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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcHJhbS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm9wdGFsbCIsInNoZnQiLCJ6ZWxmIiwicmVwcmFtIiwicHJvY2VkdXJlIiwicGFyYW1ldGVyIiwiRXJyb3IiLCJhcmd1bWVudHMiLCJzZWxmIiwiZGVsZWdhdGUiLCJhcHBseSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCQyxTQUE1QixFQUF1QztBQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsS0FBSVAsTUFBT00sU0FBUCxLQUFzQixPQUFPQSxTQUFQLElBQW9CLFVBQTlDLEVBQTBEO0FBQ3pELFFBQU0sSUFBSUUsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFREQsYUFBWUosS0FBTU0sU0FBTixDQUFaOztBQUVBLEtBQUlDLE9BQU9OLEtBQU0sSUFBTixDQUFYOztBQUVBLFFBQU8sU0FBU08sUUFBVCxHQUFvQjtBQUMxQixTQUFPTCxVQUFVTSxLQUFWLENBQWlCRixJQUFqQixFQUF1QlIsT0FBUU8sU0FBUixFQUFtQkYsU0FBbkIsQ0FBdkIsQ0FBUDtBQUNBLEVBRkQ7QUFHQSxDQWhDRDs7QUFrQ0FNLE9BQU9DLE9BQVAsR0FBaUJULE1BQWpCIiwiZmlsZSI6InJlcHJhbS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJyZXByYW1cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicmVwcmFtL3JlcHJhbS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJyZXByYW0uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJyZXByYW1cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmVwcmFtLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJyZXByYW0tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRSZW9yZGVyIGZ1bmN0aW9uIHBhcmFtZXRlci5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJvcHRmb3JcIjogXCJvcHRmb3JcIixcclxuXHRcdFx0XCJzaGZ0XCI6IFwic2hmdFwiLFxyXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IG9wdGFsbCA9IHJlcXVpcmUoIFwib3B0YWxsXCIgKTtcclxuY29uc3Qgc2hmdCA9IHJlcXVpcmUoIFwic2hmdFwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgcmVwcmFtID0gZnVuY3Rpb24gcmVwcmFtKCBwcm9jZWR1cmUsIHBhcmFtZXRlciApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwicHJvY2VkdXJlOnJlcXVpcmVkXCI6IFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJmdW5jdGlvblwiLFxyXG5cdFx0XHRcdFx0Qk9PTEVBTixcclxuXHRcdFx0XHRcdEZVTkNUSU9OLFxyXG5cdFx0XHRcdFx0TlVNQkVSLFxyXG5cdFx0XHRcdFx0T0JKRUNULFxyXG5cdFx0XHRcdFx0VU5ERUZJTkVELFxyXG5cdFx0XHRcdFx0U1RSSU5HLFxyXG5cdFx0XHRcdFx0U1lNQk9MLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHByb2NlZHVyZSApIHx8IHR5cGVvZiBwcm9jZWR1cmUgIT0gXCJmdW5jdGlvblwiICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwcm9jZWR1cmVcIiApO1xyXG5cdH1cclxuXHJcblx0cGFyYW1ldGVyID0gc2hmdCggYXJndW1lbnRzICk7XHJcblxyXG5cdGxldCBzZWxmID0gemVsZiggdGhpcyApO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gZGVsZWdhdGUoICl7XHJcblx0XHRyZXR1cm4gcHJvY2VkdXJlLmFwcGx5KCBzZWxmLCBvcHRhbGwoIGFyZ3VtZW50cywgcGFyYW1ldGVyICkgKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcHJhbTtcclxuIl19
//# sourceMappingURL=repram.support.js.map
