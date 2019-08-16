const page = require('webpage').create();

let url = "https://facebook.com";

// hook into initial request
page.onResourceRequested = function(request) {
    console.log('Request ' + JSON.stringify(request, undefined, 4));
};

// hook to response
page.onResourceReceived = function(response) {
    console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

page.open(url);