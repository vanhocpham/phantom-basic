const webpage = require('webpage').create();

// open website
webpage.open('https://facebook.com', function(status) {
    console.log( status )
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var title = webpage.evaluate(function() {
            return document.title;
        });

     // log the title
        console.log(title );
    }

    phantom.exit();
});