var myProductName = "feedParserDemo"; myVersion = "0.4.1";

/*  The MIT License (MIT)
	Copyright (c) 2014-2017 Dave Winer
	
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
	*/

const request = require ("request");
const FeedParser = require ("feedparser");

const urlTestFeed = "http://www.guardian.co.uk/world/usa/rss";

function getFeed (urlfeed, callback) {
	var req = request (urlfeed);
	var feedparser = new FeedParser ();
	var feedItems = new Array ();
	req.on ("response", function (res) {
		var stream = this;
		if (res.statusCode == 200) {
			stream.pipe (feedparser);
			}
		});
	req.on ("error", function (res) {
		console.log ("getFeed: Error reading feed.");
		});
	feedparser.on ("readable", function () {
		try {
			var item = this.read (), flnew;
			if (item !== null) { //2/9/17 by DW
				feedItems.push (item);
				}
			}
		catch (err) {
			console.log ("getFeed: err.message == " + err.message);
			}
		});
	feedparser.on ("end", function () {
		callback (undefined, feedItems);
		});
	feedparser.on ("error", function (err) {
		console.log ("getFeed: Error reading feed.");
		callback (err);
		});
	}

getFeed (urlTestFeed, function (err, feedItems) {
	if (!err) {
		function pad (num) { 
			var s = num.toString (), ctplaces = 3;
			while (s.length < ctplaces) {
				s = "0" + s;
				}
			return (s);
			}
		console.log ("There are " + feedItems.length + " items in the feed.\n");
		for (var i = 0; i < feedItems.length; i++) {
			console.log ("Item #" + pad (i) + ": " + feedItems [i].title + ".\n");
			}
		}
	});
