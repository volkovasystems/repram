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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcHJhbS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm9wdGFsbCIsInNoZnQiLCJ6ZWxmIiwicmVwcmFtIiwicHJvY2VkdXJlIiwicGFyYW1ldGVyIiwiRXJyb3IiLCJhcmd1bWVudHMiLCJzZWxmIiwiZGVsZWdhdGUiLCJhcHBseSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNSSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLFNBQWpCLEVBQTRCQyxTQUE1QixFQUF1QztBQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsS0FBSVAsTUFBT00sU0FBUCxLQUFzQixPQUFPQSxTQUFQLElBQW9CLFVBQTlDLEVBQTBEO0FBQ3pELFFBQU0sSUFBSUUsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFREQsYUFBWUosS0FBTU0sU0FBTixDQUFaOztBQUVBLEtBQUlDLE9BQU9OLEtBQU0sSUFBTixDQUFYOztBQUVBLFFBQU8sU0FBU08sUUFBVCxHQUFvQjtBQUMxQixTQUFPTCxVQUFVTSxLQUFWLENBQWlCRixJQUFqQixFQUF1QlIsT0FBUU8sU0FBUixFQUFtQkYsU0FBbkIsQ0FBdkIsQ0FBUDtBQUNBLEVBRkQ7QUFHQSxDQWhDRDs7QUFrQ0FNLE9BQU9DLE9BQVAsR0FBaUJULE1BQWpCIiwiZmlsZSI6InJlcHJhbS5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInJlcHJhbVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicmVwcmFtL3JlcHJhbS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicmVwcmFtLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInJlcHJhbVwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvcmVwcmFtLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicmVwcmFtLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmVvcmRlciBmdW5jdGlvbiBwYXJhbWV0ZXIuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwib3B0Zm9yXCI6IFwib3B0Zm9yXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCIsXG5cdFx0XHRcInplbGZcIjogXCJ6ZWxmXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IG9wdGFsbCA9IHJlcXVpcmUoIFwib3B0YWxsXCIgKTtcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IHJlcHJhbSA9IGZ1bmN0aW9uIHJlcHJhbSggcHJvY2VkdXJlLCBwYXJhbWV0ZXIgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJwcm9jZWR1cmU6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcInBhcmFtZXRlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0Qk9PTEVBTixcblx0XHRcdFx0XHRGVU5DVElPTixcblx0XHRcdFx0XHROVU1CRVIsXG5cdFx0XHRcdFx0T0JKRUNULFxuXHRcdFx0XHRcdFVOREVGSU5FRCxcblx0XHRcdFx0XHRTVFJJTkcsXG5cdFx0XHRcdFx0U1lNQk9MLFxuXHRcdFx0XHRcdFwiLi4uXCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBwcm9jZWR1cmUgKSB8fCB0eXBlb2YgcHJvY2VkdXJlICE9IFwiZnVuY3Rpb25cIiApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHByb2NlZHVyZVwiICk7XG5cdH1cblxuXHRwYXJhbWV0ZXIgPSBzaGZ0KCBhcmd1bWVudHMgKTtcblxuXHRsZXQgc2VsZiA9IHplbGYoIHRoaXMgKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gZGVsZWdhdGUoICl7XG5cdFx0cmV0dXJuIHByb2NlZHVyZS5hcHBseSggc2VsZiwgb3B0YWxsKCBhcmd1bWVudHMsIHBhcmFtZXRlciApICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVwcmFtO1xuIl19
//# sourceMappingURL=repram.support.js.map
