const webpage = require('webpage').create();

// screenshot facebook site
webpage.open('https://facebook.com/', function() {
    webpage.render('facebook.png');
    phantom.exit();
});