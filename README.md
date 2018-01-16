## feedParserDemo

A demo of Dan MacTough's feedparser package for Node.

### The story

I use the <a href="https://github.com/danmactough/node-feedparser">feedparser</a> package in <a href="https://github.com/scripting/river5">River5</a>, which is my latest river-of-news feed reader. So all my news flows through this code. That's a lot of news, and it's been working solidly for years.

Back in 2013 when I was getting started in Node, it was a little tricky adapting to feedparser, because the package is designed for maximum efficiency at the expense of a bit of ease-of-use, especially for a Node newbie. 

In the spirit of giving back to a product I use a lot, I pulled out a bit of <a href="https://github.com/scripting/reader/blob/master/davereader.js#L555">code</a> from River5 and simplified it so it makes a good demo of feedparser. 

If you're new to feedparser, this might help you get started a bit faster with less head-scratching. :-)

### How to

1. Download the project. 

2. Open the folder in your Terminal app. 

3. At the command line: `npm install`

4. `node demo.js`

You should see a list of item titles from the feed. 

### Updates

#### v0.4.3 -- 1/16/18 by DW

Added code to display the error message when feedparser calls us back with an error.

### Questions, etc

If you have questions please post an issue <a href="https://github.com/scripting/feedParserDemo/issues">here</a>. 

Pull requests are okay on this project, esp from Dan. ;-)

Happy feed reading!

Dave Winer, August 2017

